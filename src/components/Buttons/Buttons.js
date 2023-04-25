import React from "react";
import styles from "./Buttons.module.scss";
import cart from "./shopping-cart.svg";
import heart from "./heart.svg";
import { addToCart } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export function AddToCart({ id, size }) {
    let navigate = useNavigate();

    const handleClick = async () => {
        let body = { id, size };
        await addToCart(body);
        navigate("/cart");
    };

    return (
        <button
            className={`${styles.AddToCart} ${styles.btnEffect}`}
            onClick={handleClick}
        >
            <img src={cart} alt="" />
            <span>Add to Cart</span>
        </button>
    );
}

export function AddtoFav() {
    return (
        <button className={`${styles.AddToFav} ${styles.btnEffect}`}>
            <img src={heart} alt="" />
        </button>
    );
}

export function Continue() {
    return <Button className={styles.continueBtn}>Continue</Button>;
}
