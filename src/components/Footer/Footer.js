import React from "react";
import styles from "./Footer.module.scss";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    GithubFilled,
    LinkedinOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

const Footer = () => {
    let socialMedia = [
        {
            color: "blue",
            title: "Facebook",
            link: "https://www.facebook.com/emi.pellegrino.3/",
            component: FacebookOutlined,
        },
        {
            color: "skyblue",
            title: "Twitter",
            link: "https://twitter.com/EmiPellegrino1",
            component: TwitterOutlined,
        },
        {
            color: "purple",
            title: "Instagram",
            link: "https://www.instagram.com/emipellegrino3/",
            component: InstagramOutlined,
        },
        {
            color: "#0e76a8",
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/emipellegrino1/",
            component: LinkedinOutlined,
        },
        {
            color: "black",
            title: "GitHub",
            link: "https://github.com/Aonik10",
            component: GithubFilled,
        },
    ];

    return (
        <div className={styles.footer}>
            <div className={styles.socialMedia}>
                {socialMedia.map((media, index) => (
                    <Tooltip
                        key={index}
                        title={media.title}
                        color={media.color}
                        mouseEnterDelay={0}
                    >
                        <media.component
                            style={{ color: media.color }}
                            onClick={() => window.location.replace(media.link)}
                        />
                    </Tooltip>
                ))}
            </div>
            <div>
                <CompanyInfo url="/contact" title="Contact Us" />
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
