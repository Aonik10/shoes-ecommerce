import React from "react";
import styles from "./Purchases.module.scss";
import { useLoaderData } from "react-router-dom";
import PurchaseCard from "./PurchaseCard";
import { Empty } from "antd";

function Purchases() {
    let { purchases } = useLoaderData();

    return (
        <div className={styles.purchases}>
            {purchases.length === 0 ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
                purchases.map((purchase) => (
                    <PurchaseCard purchase={purchase} key={purchase.orderId} />
                ))
            )}
        </div>
    );
}

export default Purchases;

/*

{
  "purchases": [
    {
      "orderId": "ac2fc6e3-b306-47f8-88ac-c5db45c3a942",
      "data": [
        {
          "id": "643f0d96655da0ed093bf0f4",
          "size": "35",
          "units": 2
        },
        {
          "id": "64417607ff0a651d0cf82080",
          "size": "36",
          "units": 1
        }
      ]
    }
  ]
}

*/
