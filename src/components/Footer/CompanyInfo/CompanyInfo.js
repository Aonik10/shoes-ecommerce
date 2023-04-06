import React from "react";
import styles from "./CompanyInfo.module.scss";

const CompanyInfo = (props) => {
    return (
        <a className={styles.link} href={props.url}>
            {props.title}
        </a>
    );
};

export default CompanyInfo;
