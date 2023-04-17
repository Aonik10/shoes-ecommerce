import React from "react";
import styles from "./CartPreview.module.scss";

function CartPreview() {
    return (
        <div className={styles.CartPreview}>
            <div className={styles.cartContainer}></div>
        </div>
    );
}

export default CartPreview;
