import React from "react";
import styles from "./Welcome.module.scss";
import background from "./pexels-jeshootscom-7432.jpg";

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <img src={background} alt="" />
            <div className={styles.welcomeHeader}>
                <div className={styles.mainMsg}>
                    YOUR
                    <span className={styles.colored}> FAVOURITES</span> ARE BACK
                </div>

                <div className={styles.secondMsg}>
                    CHECK OUT THE NEW STEPBACKS
                </div>
            </div>
        </div>
    );
};

export default Welcome;
