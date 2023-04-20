import React from "react";
import DesignCard from "../DesignCard/DesignCard";
import styles from "./Designs.module.scss";
import rampage from "./rampage-blue.jpg";
import keepgoing from "./keep-going.jpg";
import walker from "./footprint-walker.jpg";
import redhot from "./redhot-falcon.jpg";
import { Link } from "react-router-dom";

const Designs = () => {
    return (
        <div className={styles.designs}>
            <div className={styles.msgSection}>
                <div className={styles.mainMsg}>INCREDIBLE DESIGNS</div>
                <div className={styles.secondMsg}>
                    Find out the way throughout your own choices
                </div>
                <Link className={styles.btn} to="./collections">
                    SEE MORE
                </Link>
            </div>
            <div className={styles.designsGrid}>
                <DesignCard
                    to="/collections/64417607ff0a651d0cf82080"
                    img={rampage}
                    model="RAMPAGE BLUE"
                    price="$150"
                />
                <DesignCard
                    to="/collections/64417706ff0a651d0cf82088"
                    img={keepgoing}
                    model="KEEP GOING EDITION"
                    price="$145"
                />
                <DesignCard
                    to="/collections/64417841ff0a651d0cf820a0"
                    img={walker}
                    model="FOOTPRINT WALKER"
                    price="$138"
                />
                <DesignCard
                    to="/collections/644177c1ff0a651d0cf8209c"
                    img={redhot}
                    model="REDHOT FALCON"
                    price="$115"
                />
            </div>
        </div>
    );
};

export default Designs;
