import React from "react";
import { Link } from "react-router-dom";
import styles from "../NavBar.module.scss";

const NavBarLink = ({ url, content, logo }) => {
    return (
        <Link to={url}>
            {content}
            {logo ? <img src={logo} alt="logo" className={styles.logo} /> : ""}
        </Link>
    );
};

export default NavBarLink;
