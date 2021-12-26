import React from 'react'

import * as styles from './card.module.css'

const Card = ({ title, link, children }) => {
    return (
        <div className={styles.card}>
            <a href={link}>
                <h1>{title}</h1>
                <h2>{link}</h2>
                <span className={styles.cardText}>{children}</span>
            </a>
        </div>
    )
}

export default Card
