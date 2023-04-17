import React from "react";
import styles from "./Buttons.module.scss";
import cart from "./shopping-cart.svg";
import heart from "./heart.svg";
import { addToCart } from "../../api/api";

export function AddToCart({ id, size }) {
    const handleClick = () => {
        let body = { id, size };
        console.log(body);
        addToCart(body);
    };

    return (
        <button className={styles.AddToCart} onClick={handleClick}>
            <img src={cart} alt="" />
            <span>Add to Cart</span>
        </button>
    );
}

export function AddtoFav() {
    return (
        <button className={styles.AddToFav}>
            <img src={heart} alt="" />
        </button>
    );
}
