import React from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";

function Product(props) {
    let params = useParams();
    //hacer el request al servidor con el id para obtener la informacion del producto (descartar creo)
    //usar useLoader, un loader para "precargar" la informacion de los childrens, creo.
    // https://reactrouter.com/en/main/route/loader

    return (
        <div className={styles.product}>
            <div className={styles.photos}>
                <div className={styles.mainPhoto}>
                    <img src="" alt="" />
                </div>
                <div className={styles.allPhotos}>
                    <div>
                        asdasd
                        <img src={props} alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.information}></div>
        </div>
    );
}

export default Product;
