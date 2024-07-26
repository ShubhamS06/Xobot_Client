import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './faq.module.css'

export default function CommonAccordion({ index, question, answar, isExpanded, onExpand }) {
    return (
        <Accordion expanded={isExpanded} className={styles.faqAccordion}>
            <AccordionSummary
                aria-controls={`panel${index}-header`}
                id={`panel${index}-header`}
                className={styles.faqAccordionSummary}
            >
                <div className={styles.faqAccordionIndex}>{(index + 1).toString().padStart(2, '0')}</div>
                <div className={styles.faqAccordionQuestion}>{question}</div>
                <div className={styles.faqAccordionExpandIcon} onClick={() => onExpand(index)}>+</div>
            </AccordionSummary>
            <AccordionDetails>
                {answar}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
    );
}
