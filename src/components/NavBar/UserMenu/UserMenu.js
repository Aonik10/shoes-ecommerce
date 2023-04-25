import React from "react";
import styles from "./UserMenu.module.scss";
import NavBarLink from "./../NavBarLink/NavBarLink";
import { useDispatch } from "react-redux";
import { sessionLogout } from "../../../features/sessionSlice";
import { logout } from "../../../api/api";

function UserMenu({ name }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(sessionLogout());
        logout();
    };

    return (
        <div className={styles.menu}>
            <div className={styles.menuHeader}>
                <p>{"Hi " + name + "!"}</p>
            </div>
            <li>
                <NavBarLink url="/purchases" content="Purchases" />
            </li>
            <li>
                <NavBarLink url="/settings" content="My account" />
            </li>
            <li onClick={handleLogout}>
                <NavBarLink url="/" content="Logout" />
            </li>
        </div>
    );
}

export default UserMenu;
