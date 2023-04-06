import React from "react";
import styles from "./Footer.module.scss";
import SocialMediaButton from "./SocialMediaButton/SocialMediaButton";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import facebook from "./brand-facebook-filled.svg";
import twitter from "./brand-twitter-filled.svg";
import instagram from "./brand-instagram.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.socialMedia}>
                <SocialMediaButton img={facebook} />
                <SocialMediaButton img={twitter} />
                <SocialMediaButton img={instagram} />
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
