import React from "react";
import styles from "./ProductSlider.module.scss";
import Card from "../Collections/Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLoaderData } from "react-router-dom";

function ProductSlider() {
    let products = useLoaderData();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <div className={styles.productSlider}>
            <h2 className={styles.productCategory}>MOST POPULAR</h2>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass={styles.carouselContainer}
            >
                {products.map((product) => (
                    <div className={styles.card} key={product._id}>
                        <Card product={product} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ProductSlider;
