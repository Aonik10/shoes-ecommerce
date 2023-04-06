import React from "react";
import styles from "./Welcome.module.scss";

const Welcome = () => {
    return (
        <div className={styles.welcome}>
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
