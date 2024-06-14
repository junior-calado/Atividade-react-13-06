import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
    return (
        <header className={styles.header}>
            <h1>{titulo}</h1>
        </header>
    );
};

export default Header;
