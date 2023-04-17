import React from "react";
import styles from "./UserMenu.module.scss";
import NavBarLink from "./../NavBarLink/NavBarLink";
import { useDispatch } from "react-redux";
import { sessionLogout } from "../../../features/sessionSlice";
import { logout } from "../../../api/api";

function UserMenu(props) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(sessionLogout());
        logout();
    };

    return (
        <div className={styles.menu}>
            <p>{"Hi " + props.name + "!"}</p>
            <li>
                <NavBarLink url="/collections" content="Purchases" />
            </li>
            <li>
                <NavBarLink url="/collections" content="My account" />
            </li>
            <li onClick={handleLogout}>
                <NavBarLink url="/" content="Logout" />
            </li>
        </div>
    );
}

export default UserMenu;
