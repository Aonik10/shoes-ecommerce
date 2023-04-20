import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../NavBar.module.scss";

const NavBarLink = ({ url, content, logo }) => {
    let location = useLocation().pathname;

    return (
        <Link to={url} className={location === url ? styles.actualLink : ""}>
            {content}
            {logo ? <img src={logo} alt="logo" className={styles.logo} /> : ""}
        </Link>
    );
};

export default NavBarLink;
