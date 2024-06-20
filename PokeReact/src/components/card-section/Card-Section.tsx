import React from "react";
import styles from "./card-section.module.css";

export interface CardSectionInput {
  title: string;
  children: React.ReactNode;
}

function CardSection({ children, title }: CardSectionInput) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default CardSection;
