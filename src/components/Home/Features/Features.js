import React from "react";
import styles from "./Features.module.scss";
import man from "./running-man.jpg";
import woman from "./running-woman.jpg";

const Features = () => {
    return (
        <div className={styles.features}>
            <div className={styles.man}>
                <img src={man} alt="" />
            </div>
            <div className={styles.woman}>
                <img src={woman} alt="" />
            </div>
        </div>
    );
};

export default Features;
