"use client"

import { useState, useEffect, useRef } from 'react';
// import { useMicVAD } from '@ricky0123/vad-react';
import { getWavBytes, nanoid } from '@/lib/utils';


const VoiceChat = ({ id, sendMessages, sendStatus, showChatStatus }) => {
    const [status, setStatus] = useState('');
    const [messages, setMessages] = useState([]);

    const audioConstrains = {
        audio: {
            channelCount: 1,
            echoCancellation: true,
            autoGainControl: true,
            noiseSuppression: true,
        },
    };

    const conversationRef = useRef(nanoid());
    const audioQueueRef = useRef([]);
    const recordingRef = useRef([]);
    const vadRef = useRef(null);
    const isPlayingRef = useRef(false);
    const shouldRecordRef = useRef(false);
    const audioContextRef = useRef(null);
    const audioContextMicRef = useRef(null);
    const sourceMicRef = useRef(null);
    const startTimeRef = useRef(null);
    const sourceRef = useRef(null);
    const startedRef = useRef(false);
    const isFirstRef = useRef(true);
    const socketRef = useRef(null);
    const streamRef = useRef(null);

    const audioPlay = async (base64) => {
        try {
            const audioContext = audioContextRef.current;
            if (audioContext && audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            const arrayBuffer = base64ToArrayBuffer(base64);
            let buffer = createAudioBuffer(arrayBuffer);

            const source = audioContext.createBufferSource();
            source.buffer = buffer;

            source.connect(audioContext.destination);

            source.start();
            source.onended = playNext;
            sourceRef.current = source;
        } catch (error) {
            isPlayingRef.current = false;
            console.log('Play Error', error);
        }
    };

    const playNext = async () => {
        if (audioQueueRef.current.length > 0) {
            isPlayingRef.current = true;
            const base64string = audioQueueRef.current.shift();
            await audioPlay(base64string);
        } else {
            isPlayingRef.current = false;
            if (isFirstRef.current) {
                isFirstRef.current = false;
            }
        }
    };

    const enqueueAudio = async (base64Audio) => {
        if (!Object.isFrozen(audioQueueRef.current)) {
            audioQueueRef.current.push(base64Audio);
            if (!isPlayingRef.current) {
                playNext();
            }
        }
    };

    const stopPlay = async () => {
        try {
            audioQueueRef.current = [];
            Object.freeze(audioQueueRef.current);
            const source = sourceRef.current;
            if (source) {
                source.stop();
                source.disconnect();
                sourceRef.current = null;
            }
            isPlayingRef.current = false;
        } catch (error) {
            console.log('Stop Error');
        }
    };

    const base64ToArrayBuffer = (base64) => {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        recordingRef.current.push(bytes);
        return bytes.buffer;
    };

    const createAudioBuffer = (arrayBuffer) => {
        const audioContext = audioContextRef.current;
        const dataView = new DataView(arrayBuffer);
        const pcmData = new Float32Array(dataView.byteLength / 2);

        for (let i = 0; i < pcmData.length; i++) {
            pcmData[i] = dataView.getInt16(i * 2, true) / 32768; // Convert PCM to float [-1, 1]
        }

        const audioBuffer = audioContext.createBuffer(1, pcmData.length, 44100);
        audioBuffer.copyToChannel(pcmData, 0);

        return audioBuffer;
    };

    const mergeBuffers = (lhs, rhs) => {
        const mergedBuffer = new Int16Array(lhs.length + rhs.length);
        mergedBuffer.set(lhs, 0);
        mergedBuffer.set(rhs, lhs.length);
        return mergedBuffer;
    };

    const startRecording = async (onAudioCallback) => {
        let audioWorkletNode;
        let audioBufferQueue = new Int16Array(0);
        const stream = streamRef.current || await navigator.mediaDevices.getUserMedia(audioConstrains);
        streamRef.current = stream;

        const audioContextMic = new (window["AudioContext"] || window["webkitAudioContext"])({
            sampleRate: 44100,
            latencyHint: 'balanced',
        });
        audioContextMicRef.current = audioContextMic;

        let gainNode = audioContextMic.createGain();

        const sourceMic = audioContextMic.createMediaStreamSource(stream);
        sourceMicRef.current = sourceMic;

        await audioContextMic.audioWorklet.addModule('/audio-processor.js');
        audioWorkletNode = new AudioWorkletNode(audioContextMic, 'audio-processor');

        const destinationNode = audioContextMic.createMediaStreamDestination();

        sourceMic.connect(gainNode);
        gainNode.connect(audioWorkletNode);
        audioWorkletNode.connect(destinationNode);

        gainNode.gain.setValueAtTime(0, audioContextMic.currentTime);

        audioWorkletNode.port.onmessage = async (event) => {
            if (!isFirstRef.current && gainNode.gain.value === 0) {
                gainNode.gain.setValueAtTime(1, audioContextMic.currentTime);
            }
            const currentBuffer = new Int16Array(event.data.audio_data);
            audioBufferQueue = mergeBuffers(audioBufferQueue, currentBuffer);

            const bufferDuration = (audioBufferQueue.length / audioContextMic.sampleRate) * 1000;

            // wait until we have 30ms of audio data
            if (bufferDuration >= 30) {
                const totalSamples = Math.floor(audioContextMic.sampleRate * 0.1);

                const finalBuffer = new Uint8Array(audioBufferQueue.subarray(0, totalSamples).buffer);

                audioBufferQueue = audioBufferQueue.subarray(totalSamples);

                if (!isPlayingRef.current || shouldRecordRef.current) {
                    recordingRef.current.push(finalBuffer);
                }

                if (onAudioCallback) onAudioCallback(finalBuffer);
            }
        };
    };

    // vadRef.current = useMicVAD({
    //     startOnLoad: false,
    //     positiveSpeechThreshold: 0.75,
    //     onSpeechStart: async () => {
    //         shouldRecordRef.current = true;
    //     },
    //     onSpeechEnd: async (arr) => {
    //         shouldRecordRef.current = false;
    //     },
    //     onVADMisfire: async () => { },
    //     onFrameProcessed: async (probabilities) => { }
    // });

    const voiceChat = async () => {
        setMessages([]);
        setStatus('loading');

        // vadRef.current.start();

        let interval = null;

        audioContextRef.current = new (window["AudioContext"] || window["webkitAudioContext"])({
            sampleRate: 44100,
            latencyHint: 'balanced',
        });

        const url = new URL(location.href);
        const voice_id = url.searchParams.get('voice_id');
        const socketURL = `${process.env.NEXT_PUBLIC_API_URL?.replace('http', 'ws')}/voice/bot/${id}?call_id=${conversationRef.current}&voice_id=${voice_id ? voice_id : ''}`;
        socketRef.current = new WebSocket(socketURL);

        socketRef.current.onopen = async () => {
            setStatus('connected');
            console.log('Connected');
            interval = setInterval(async () => {
                if (!isPlayingRef.current) setStatus('listening');
            }, 3000);
            await startRecording((audioData) => {
                if (socketRef.current?.readyState === 1) {
                    socketRef.current.send(audioData);
                }
            });
        };

        socketRef.current.onmessage = async (message) => {
            const received = message.data;
            if (received) {
                const receivedData = JSON.parse(received);
                const payload = receivedData.payload;
                const userSpoke = receivedData.userSpoke;

                if (receivedData.text) {
                    let newMessage = receivedData.text;
                    if (newMessage.content && newMessage.content.length > 0) {
                        if (newMessage.role === 'user') {
                            startTimeRef.current = Date.now();
                        }
                        setMessages((prevValues) => [...prevValues, newMessage]);
                    }
                } else if (!userSpoke) {
                    setStatus('speaking');
                    if (!isPlayingRef.current) {
                        if (startTimeRef.current) {
                            console.log('Response time: ', (Date.now() - startTimeRef.current) / 1000, ' sec');
                            startTimeRef.current = null;
                        }
                        audioQueueRef.current = [];
                    }
                    try {
                        await enqueueAudio(payload);
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    startTimeRef.current = Date.now();
                    stopPlay();
                }
            }
        };

        socketRef.current.onclose = () => {
            console.log('Connection Closed');
            clearInterval(interval);
        };

        socketRef.current.onerror = (error) => {
            console.log({ event: 'onerror', error });
        };
    };

    const endChat = async () => {
        stopPlay();
        isPlayingRef.current = false;
        isFirstRef.current = true;
        socketRef.current?.close();
        socketRef.current = null;
        // vadRef.current.pause();

        // Merge recorded data
        const totalLength = recordingRef.current.reduce((sum, buffer) => sum + buffer.length, 0);
        const mergedArray = new Uint8Array(totalLength);
        let offset = 0;
        for (let buffer of recordingRef.current) {
            mergedArray.set(buffer, offset);
            offset += buffer.length;
        }

        const audioBuffer = createAudioBuffer(mergedArray.buffer);


        const left = audioBuffer.getChannelData(0);
        const interleaved = new Float32Array(left.length);

        for (let src = 0, dst = 0; src < left.length; src++, dst++) {
            interleaved[dst] = left[src];
        }

        const wavBytes = getWavBytes(interleaved.buffer, {
            isFloat: true,       // floating point or 16-bit integer
            numChannels: 1,
            sampleRate: 44100,
        });
        const wav = new Blob([wavBytes], { type: 'audio/wav' });
        var form_data = new FormData();
        var fileOfBlob = new File([wav], `${conversationRef.current}.wav`);
        form_data.append('wav_file', fileOfBlob);
        const record_url = `${process.env.NEXT_PUBLIC_API_URL}/voice/recording/${conversationRef.current}`;
        fetch(record_url, {
            method: 'post',
            body: form_data,
        })
        .then(x => x.json)
        .then(y => 
            {
                console.log('done');
            }
        );

        conversationRef.current = nanoid();
        audioContextRef.current?.close();
        audioContextMicRef.current?.close();
        sourceMicRef.current?.disconnect();
        setStatus('stopped');
    };

    useEffect(() => {
        if (showChatStatus && !startedRef.current) {
            startedRef.current = true;
            voiceChat();
        } else if (!showChatStatus && startedRef.current) {
            startedRef.current = false;
            endChat();
        }
    }, [showChatStatus]);

    useEffect(() => {
        if(messages.length){
            sendMessages(messages);
        }
    }, [messages]);

    useEffect(() => {
        sendStatus(status);
    }, [status]);

    return (
        <></>
    );
};

export default VoiceChat;
