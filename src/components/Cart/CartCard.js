import React, { useRef } from "react";
import Card from "antd/es/card/Card";
import { InputNumber } from "antd";
import styles from "./Cart.module.scss";
import {
    deleteCartElement,
    modifyCartByOne,
    modifyCartByValue,
} from "../../api/api";
import { useNavigate } from "react-router-dom";

function CartCard({ product }) {
    //let [value, setValue] = useState(product.units);
    let navigate = useNavigate();
    const ref = useRef(product.units);

    const handleClick = (cb, value) => {
        if (parseInt(ref.current.value) + value < 1) {
            deleteCartElement({
                id: product.id,
                size: product.size,
            });
        } else {
            cb({
                id: product.id,
                size: product.size,
                value: value,
            });
        }
        navigate(0);
    };

    return (
        <Card className={styles.cartCard} key={product.id}>
            <div className={styles.cardContent}>
                <div className={styles.productDetails}>
                    <img
                        src={product.img}
                        alt=""
                        onClick={() => navigate("/collections/" + product.id)}
                    />
                    <div className={styles.content}>
                        <h1>{product.model}</h1>
                        <p>{product.size + " AR"}</p>
                    </div>
                </div>
                <div className={styles.editQty}>
                    <InputNumber
                        ref={ref}
                        className={styles.inputNumber}
                        controls={false}
                        onChange={(v) => handleClick(modifyCartByValue, v)}
                        addonAfter={
                            <button
                                onClick={() => handleClick(modifyCartByOne, -1)}
                            >
                                -
                            </button>
                        }
                        addonBefore={
                            <button
                                onClick={() => handleClick(modifyCartByOne, 1)}
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
        </Card>
    );
}

export default CartCard;
