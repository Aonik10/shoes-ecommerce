import React from "react";
import styles from "./UserBtn.module.scss";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";

const UserBtn = (props) => {
    const data = props.data;
    let [viewMenu, setViewMenu] = useState(false);

    return (
        <div>
            <div
                className={`${styles.userMenu} ${
                    viewMenu ? styles.slideIn : ""
                }`}
            >
                {<UserMenu name={data.name} />}
            </div>
            <button className={styles.userBtn}>
                <img
                    className={styles.profilePhoto}
                    src={data.profilePhoto}
                    alt=""
                    onClick={() => setViewMenu(!viewMenu)}
                />
            </button>
        </div>
    );
};

export default UserBtn;
