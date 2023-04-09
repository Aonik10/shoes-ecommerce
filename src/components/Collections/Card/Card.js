import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
    let product = props.product;

    return (
        <div className={styles.card} key={product.id}>
            <img src={product.imgs.side} alt="" />
            <div className={styles.info}>
                <div>{product.model}</div>
                <div>${product.price}</div>
            </div>
        </div>
    );
};

export default Card;
