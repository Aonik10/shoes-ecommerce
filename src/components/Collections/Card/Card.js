import React, { useState } from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const [hovering, setHovering] = useState(false);

    return (
        // mi duda ahora es, como paso una propiedad por medio de un link al component Product
        <div className={styles.card} key={product.id}>
            <Link to={"/collections/" + product.id}>
                <img
                    src={hovering ? product.imgs.diagonal : product.imgs.side}
                    alt=""
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                />
            </Link>
            <div className={styles.info}>
                <div>{product.model}</div>
                <div>${product.price}</div>
            </div>
        </div>
    );
};

export default Card;
