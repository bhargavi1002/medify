import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ imageSrc, text }) => {
    return (
        <div className={styles.card} style={{backgroundColor: "#fff"}}>
            <img src={imageSrc} alt={text} className={styles.cardImage} />
            <p className={styles.cardText}>{text}</p>
        </div>
    );
};

export default Card;
