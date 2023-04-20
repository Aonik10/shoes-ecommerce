import React from "react";
import NavBarLink from "./NavBarLink/NavBarLink";
import UserBtn from "./UserBtn/UserBtn";
import styles from "./NavBar.module.scss";
import logo from "./logo-footprints.png";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";

const NavBar = () => {
    const session = useSelector((state) => state.session);

    return (
        <div className={styles.navBar}>
            <div className={styles.navBarMenu}>
                <NavBarLink url="/" content="" logo={logo} />
                <div className={styles.menuLink}>
                    <NavBarLink url="/collections" content="Collections" />
                    <NavBarLink url="/men" content="Men" />
                    <NavBarLink url="/women" content="Women" />
                    <NavBarLink url="/about" content="About" />
                    <NavBarLink url="/contact" content="Contact us" />
                </div>
            </div>
            <div className={styles.navBarMenu}>
                <NavBarLink
                    url="/cart"
                    content={
                        <div className={styles.shoppingCart}>
                            <ShoppingCartOutlined />
                        </div>
                    }
                />
                {session.logged ? (
                    <UserBtn data={session.data} />
                ) : (
                    <NavBarLink url="/login" content="Login" />
                )}
            </div>
        </div>
    );
};

export default NavBar;
