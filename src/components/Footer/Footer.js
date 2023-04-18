import React from "react";
import styles from "./Footer.module.scss";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

const Footer = () => {
    let socialMedia = [
        { color: "blue", title: "Facebook", component: FacebookOutlined },
        { color: "skyblue", title: "Twitter", component: TwitterOutlined },
        { color: "purple", title: "Instagram", component: InstagramOutlined },
        { color: "red", title: "Youtube", component: YoutubeOutlined },
    ];

    return (
        <div className={styles.footer}>
            <div className={styles.socialMedia}>
                {socialMedia.map((media) => (
                    <Tooltip
                        title={media.title}
                        color={media.color}
                        mouseEnterDelay={0}
                    >
                        <media.component style={{ color: media.color }} />
                    </Tooltip>
                ))}
            </div>
            <div>
                <CompanyInfo url="/contact" title="Contact us" />
                <CompanyInfo url="/about" title="Terms of Use" />
                <CompanyInfo url="/about" title="Privacy Policy" />
                <div className={styles.copyright}>
                    @Copyright All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
