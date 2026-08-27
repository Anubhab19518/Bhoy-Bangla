"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

interface FAQ {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
            onClick={() => toggleItem(index)}
          >
            <div className={styles.faqQuestionRow}>
              <h4 className={styles.faqQuestion}>{faq.question}</h4>
              <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && (
              <div className={styles.faqAnswer}>
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
