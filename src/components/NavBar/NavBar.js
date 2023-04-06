import React from "react";
import NavBarLink from "./NavBarLink/NavBarLink";
import styles from "./NavBar.module.scss";
import logo from "./logo-footprints-sin-fondo.png";

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.navBarMenu}>
                <NavBarLink url="/" content="" logo={logo} />
                <NavBarLink url="/collection" content="Collections" />
                <NavBarLink url="/collection" content="Men" />
                <NavBarLink url="/collection" content="Women" />
                <NavBarLink url="/about" content="About" />
                <NavBarLink url="/contact" content="Contact us" />
            </div>
            <div className={styles.navBarMenu}>
                <NavBarLink url="/" content="Carrito" />
                <NavBarLink url="/login" content="Login" />
            </div>
        </div>
    );
};

export default NavBar;