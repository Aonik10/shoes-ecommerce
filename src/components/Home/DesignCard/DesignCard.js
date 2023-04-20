import React from "react";
import styles from "./DesignCard.module.scss";
import { useNavigate } from "react-router-dom";

const DesignCard = ({ model, img, price, to }) => {
    let navigate = useNavigate();

    return (
        <div className={styles.card}>
            <div className={styles.cardPhoto}>
                <img src={img} alt={model} onClick={() => navigate(to)} />
            </div>
            <div className={styles.data}>
                <div className={styles.model}>{model}</div>
                <div className={styles.price}>{price}</div>
            </div>
        </div>
    );
};

export default DesignCard;
