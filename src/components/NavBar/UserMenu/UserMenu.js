import React from "react";
import styles from "./UserMenu.module.scss";
import NavBarLink from "./../NavBarLink/NavBarLink";

function UserMenu(props) {
    return (
        <div className={styles.menu}>
            <p>{"Hi " + props.name + "!"}</p>
            <li>
                <NavBarLink url="/collections" content="Purchases" />
            </li>
            <li>
                <NavBarLink url="/collections" content="My account" />
            </li>
            <li>
                <NavBarLink url="/collections" content="Logout" />
            </li>
        </div>
    );
}

export default UserMenu;
