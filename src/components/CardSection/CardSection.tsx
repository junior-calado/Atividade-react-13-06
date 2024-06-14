import React from 'react';
import styles from './CardSection.module.css';

interface CardSectionProps {
    titulo: string;
    children: React.ReactNode;
}

const CardSection: React.FC<CardSectionProps> = ({ titulo, children }) => {
    return (
        <section className={styles.cardSection}>
            <h2 className={styles.title}>{titulo}</h2>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
};

export default CardSection;
