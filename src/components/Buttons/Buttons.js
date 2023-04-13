import React from "react";
import styles from "./Buttons.module.scss";
import cart from "./shopping-cart.svg";
import heart from "./heart.svg";

export function AddToCart() {
    return (
        <button className={styles.AddToCart}>
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
