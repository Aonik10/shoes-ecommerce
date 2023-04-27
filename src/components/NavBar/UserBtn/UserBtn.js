import React from "react";
import styles from "./UserBtn.module.scss";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";
import Avatar from "antd/es/avatar/avatar";

const UserBtn = ({ data }) => {
    let [viewMenu, setViewMenu] = useState(false);

    return (
        <div>
            <div
                className={`${styles.userMenu} ${
                    viewMenu ? styles.slideIn : ""
                }`}
            >
                {
                    <UserMenu
                        name={data.name}
                        viewMenu={viewMenu}
                        setViewMenu={setViewMenu}
                    />
                }
            </div>
            <Avatar
                className={styles.userBtn}
                src={data.profilePhoto}
                shape="square"
                draggable={false}
                size={"large"}
                onClick={() => setViewMenu(!viewMenu)}
            />
        </div>
    );
};

export default UserBtn;

/*<button className={styles.userBtn}>
                <img
                    className={styles.profilePhoto}
                    src={data.profilePhoto}
                    alt=""
                    onClick={() => setViewMenu(!viewMenu)}
                />
            </button>*/
