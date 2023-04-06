import React from "react";
import { requestCollections } from "../../api/api";
import { usePromise } from "../../hooks/usePromise";

const Collections = () => {
    let products = usePromise(requestCollections);

    return (
        <div>
            <div>
                <h1>All Collections</h1>
                <div>Find the best option for you</div>
            </div>

            {products.state == "Pending" ? (
                <div>Loading</div>
            ) : products.state == "Success" ? (
                products.data.map((product) => <div>{product.model}</div>)
            ) : (
                <div>Error loading collections</div>
            )}
        </div>
    );
};

export default Collections;
