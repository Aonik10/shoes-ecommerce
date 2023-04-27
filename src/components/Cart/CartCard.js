import React, { useRef, useState } from "react";
import { Card, Spin, InputNumber } from "antd";
import styles from "./Cart.module.scss";
import { deleteCartElement, modifyCartUnits } from "../../api/api";
import { useNavigate } from "react-router-dom";

function CartCard({ product, refresh }) {
    //let [value, setValue] = useState(product.units);
    let navigate = useNavigate();
    const ref = useRef(product.units);

    let [loading, setLoading] = useState(false);

    const handleClick = async (value) => {
        setLoading(true);
        if (value < 1) {
            await deleteCartElement({
                id: product.id,
                size: product.size,
            });
        } else {
            await modifyCartUnits({
                id: product.id,
                size: product.size,
                value: value,
            });
        }
        await refresh();
        setLoading(false);
    };

    return (
        <Card className={styles.cartCard} key={product.id}>
            <div className={styles.cardContent}>
                <div className={styles.productPhoto}>
                    <img
                        src={product.img}
                        alt=""
                        onClick={() => navigate("/collections/" + product.id)}
                    />
                </div>
                <div className={styles.productDetails}>
                    <div className={styles.content}>
                        <h1>{product.model}</h1>
                        <p>{product.size + " AR"}</p>
                    </div>

                    <div className={styles.editQty}>
                        <Spin
                            className={styles.spin}
                            style={{
                                visibility: loading ? "visible" : "hidden",
                            }}
                        />
                        <InputNumber
                            ref={ref}
                            className={styles.inputNumber}
                            controls={false}
                            disabled={loading}
                            onChange={(v) => handleClick(v)}
                            addonAfter={
                                <button
                                    disabled={loading}
                                    onClick={() =>
                                        handleClick(
                                            parseInt(ref.current.value) - 1
                                        )
                                    }
                                >
                                    -
                                </button>
                            }
                            addonBefore={
                                <button
                                    disabled={loading}
                                    onClick={() =>
                                        handleClick(
                                            parseInt(ref.current.value) + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                            }
                            value={product.units}
                            min={1}
                            max={99}
                        />
                    </div>
                    <div className={styles.amount}>
                        ${product.price * product.units}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CartCard;
