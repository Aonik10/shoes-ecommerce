import React, { useState } from "react";
import styles from "./Product.module.scss";
import { Await, useLoaderData } from "react-router-dom";
import { AddToCart, AddtoFav } from "../../Buttons/Buttons";
import star from "./star-filled.svg";
import Spinner from "../Spinner/Spinner";

function Product() {
    // https://reactrouter.com/en/main/route/loader

    // hacer un mapeo con las imagenes para que no sea un choclo feo
    // dividir los divs en dos o mas componentes

    const data = useLoaderData();
    /*
    let [photo, setPhoto] = useState(data.imgs.side);
    let [btnKey, setBtnKey] = useState(
        Object.keys(data.stock).find((key) => data.stock[key] > 1)
    );
    */
    let [photo, setPhoto] = useState(data.imgs.side);
    let [btnKey, setBtnKey] = useState(
        Object.keys(data.stock).find((key) => data.stock[key] > 1)
    );

    return (
        <div className={styles.product}>
            <div className={styles.photos}>
                <div className={styles.mainPhoto}>
                    <img src={photo} alt="" />
                </div>
                <div className={styles.allPhotos}>
                    <button onClick={() => setPhoto(data.imgs.side)}>
                        <img src={data.imgs.side} alt="" />
                    </button>
                    <button onClick={() => setPhoto(data.imgs.diagonal)}>
                        <img src={data.imgs.diagonal} alt="" />
                    </button>
                    <button onClick={() => setPhoto(data.imgs.top)}>
                        <img src={data.imgs.top} alt="" />
                    </button>
                    <button onClick={() => setPhoto(data.imgs.bottom)}>
                        <img src={data.imgs.bottom} alt="" />
                    </button>
                </div>
            </div>
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
                    <AddToCart />
                    <AddtoFav />
                </div>
            </div>
        </div>
    );
}

export default Product;
