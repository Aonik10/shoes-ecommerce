import React from "react";
import styles from "./Product.module.scss";
import { useLoaderData } from "react-router-dom";
import Photos from "./Photos";
import InfoContainer from "./InfoContainer";

function Product() {
    // https://reactrouter.com/en/main/route/loader

    const data = useLoaderData();

    return (
        <div className={styles.product}>
            <Photos imgs={data.imgs} />
            <InfoContainer data={data} />
        </div>
    );
}

export default Product;
