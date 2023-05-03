import React from "react";
import styles from "./NavBar.module.scss";

function Hamburger({ active, setActive }) {
    return (
        <div
            className={`${styles.hamburgerBtn} ${
                active ? styles.hamburgerBtnActive : ""
            }`}
            onClick={() => setActive(!active)}
        >
            <div
                className={`${styles.linesHamburgerBtn} ${
                    active ? styles.hamburgerActive : ""
                }`}
            >
                <div className={styles.middleLine}></div>
            </div>
        </div>
    );
}

export default Hamburger;
