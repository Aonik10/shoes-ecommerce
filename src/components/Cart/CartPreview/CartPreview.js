import React from "react";
import styles from "./CartPreview.module.scss";

function CartPreview() {
    return (
        <div className={styles.cartPreview}>
            <div className={styles.cartContainer}>
                <div className={styles.header}>
                    <h3 className={styles.heading}>Shopping Cart</h3>
                    <h5 className={styles.action}>Remove all</h5>
                </div>
                <div className={styles.cartItems}>
                    <div className={styles.imageBox}>
                        <img
                            src={"https://iili.io/HkW3q42.webp"}
                            style={{ height: "120px" }} //cambiar
                            alt=""
                        />
                    </div>
                    <div className={styles.about}>
                        <h1 className={styles.title}>Product Name</h1>
                        <h3 className={styles.subtitle}>38 AR</h3>
                        <img
                            src={"https://iili.io/HkW3q42.webp"}
                            style={{ height: "30px" }} //cambiar
                            alt=""
                        />
                    </div>
                    <div className={styles.counter}>
                        <div className={styles.counterBtn}>+</div>
                        <div className={styles.count}>2</div>
                        <div className={styles.counterBtn}>-</div>
                    </div>
                    <div className={styles.prices}>
                        <div className={styles.amount}>$2.99</div>
                        <div className={styles.remove}>
                            <u>Remove</u>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className={styles.checkout}>
                    <div className={styles.total}>
                        <div>
                            <div className={styles.subtotal}>Sub-Total</div>
                            <div className={styles.items}>2 items</div>
                        </div>
                        <div className={styles.totalAmount}>$6.18</div>
                    </div>
                    <button className={styles.checkoutBtn}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartPreview;
