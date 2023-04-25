import React from "react";
import styles from "./CompanyInfo.module.scss";
import { Link } from "react-router-dom";

const CompanyInfo = (props) => {
    return (
        <Link className={styles.link} to={props.url}>
            {props.title}
        </Link>
    );
};

export default CompanyInfo;
