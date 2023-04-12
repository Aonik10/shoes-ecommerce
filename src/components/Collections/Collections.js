import React from "react";
import styles from "./Collections.module.scss";
import Spinner from "./Spinner/Spinner";
import Card from "./Card/Card";
import { requestCollections } from "../../api/api";
import { usePromise } from "../../hooks/usePromise";

const Collections = () => {
    let products = usePromise(requestCollections);

    return (
        <div className={styles.collections}>
            <div>
                <h1>All Collections</h1>
                <h2>Find the best option for you</h2>
            </div>
            {products.state === "Pending" ? (
                <Spinner />
            ) : products.state === "Success" ? (
                <div className={styles.cards}>
                    {products.data.map((product) => (
                        <Card product={product} />
                    ))}
                </div>
            ) : (
                <div>Error loading collections</div>
            )}
        </div>
    );
};

export default Collections;
