import React from "react";
import styles from "./SocialMediaButton.module.scss";

const SocialMediaButton = (props) => {
    return (
        <button className={styles.socialMedia}>
            <img src={props.img} alt="" />
        </button>
    );
};

export default SocialMediaButton;
