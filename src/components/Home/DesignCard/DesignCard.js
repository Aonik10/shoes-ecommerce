import React from "react";
import styles from "./DesignCard.module.scss";

const DesignCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardPhoto}>
                <img src={props.img} alt={props.model} />
            </div>
            <div className={styles.data}>
                <div className={styles.model}>{props.model}</div>
                <div className={styles.price}>{props.price}</div>
            </div>
        </div>
    );
};

export default DesignCard;
