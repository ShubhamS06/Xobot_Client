import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Xobot</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/x-icon" href="/xobot.svg" />
        <link rel="favicon" type="image/x-icon" href="/xobot.svg"></link>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
