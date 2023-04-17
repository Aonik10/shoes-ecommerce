import React, { useState } from "react";
import styles from "./Product.module.scss";

function Photos({ imgs }) {
    let [photo, setPhoto] = useState(imgs.side);

    return (
        <div className={styles.photos}>
            <div className={styles.mainPhoto}>
                <img src={photo} alt="" />
            </div>
            <div className={styles.allPhotos}>
                {Object.keys(imgs).map((key) => (
                    <button onClick={() => setPhoto(imgs[key])} key={key}>
                        <img src={imgs[key]} alt="" />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Photos;
