import React from "react";
import styles from "./UserBtn.module.scss";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useDispatch } from "react-redux";
import { sessionLogout } from "../../../features/sessionSlice";
import { logout } from "../../../api/api";

function UserMenu({ name, setViewMenu }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        setViewMenu(false);
        dispatch(sessionLogout());
        logout();
    };

    return (
        <div className={styles.menu}>
            <div className={styles.menuHeader}>
                <p>{"Hi " + name + "!"}</p>
            </div>
            <li onClick={() => setViewMenu(false)}>
                <NavBarLink url="/purchases" content="Purchases" />
            </li>
            <li onClick={() => setViewMenu(false)}>
                <NavBarLink url="/settings" content="My account" />
            </li>
            <li onClick={handleLogout}>
                <NavBarLink url="/" content="Logout" />
            </li>
        </div>
    );
}

export default UserMenu;
