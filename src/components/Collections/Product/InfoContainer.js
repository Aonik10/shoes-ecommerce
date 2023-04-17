import React, { useState } from "react";
import styles from "./Product.module.scss";
import { AddToCart, AddtoFav } from "../../Buttons/Buttons";
import star from "./star-filled.svg";

function InfoContainer({ data }) {
    let [btnKey, setBtnKey] = useState(
        Object.keys(data.stock).find((key) => data.stock[key] > 1)
    );

    return (
        <div className={styles.infoContainer}>
            <div className={styles.information}>
                <div className={styles.genderRating}>
                    <div className={styles.gender}>{data.gender}</div>
                    <div className={styles.rating}>
                        {Array(data.rating)
                            .fill(null)
                            .map((_, index) => (
                                <img src={star} alt="" key={index} />
                            ))}
                    </div>
                </div>
                <h1>{data.model}</h1>
                <p>${data.price}</p>
                <h2>Sizes</h2>
                <div className={styles.sizes}>
                    {Object.keys(data.stock).map((key) => (
                        <button
                            className={`${styles.size} ${
                                data.stock[key] === 0 ? styles.soldOut : ""
                            } ${key === btnKey ? styles.selected : ""}`}
                            onClick={() => setBtnKey(key)}
                            disabled={data.stock[key] === 0 ? true : false}
                            key={key}
                        >
                            {key + " (AR)"}
                        </button>
                    ))}
                </div>
                <div className={styles.lastAdvice}>
                    {data.stock[btnKey] === 1 && "Last unit available!"}
                </div>
            </div>
            <div className={styles.btns}>
                <AddToCart id={data.id} size={btnKey} />
                <AddtoFav id={data.id} />
            </div>
        </div>
    );
}

export default InfoContainer;
