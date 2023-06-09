import React from "react";
import Welcome from "./Welcome/Welcome";
import ProductSlider from "../ProductSlider/ProductSlider";
import Designs from "./Designs/Designs";
import Features from "./Features/Features";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.Home}>
            <Welcome />
            <ProductSlider />
            <Designs />
            <Features />
        </div>
    );
};

export default Home;
