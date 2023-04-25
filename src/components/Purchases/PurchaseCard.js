import React, { useState } from "react";
import styles from "./Purchases.module.scss";
import { Card, Button } from "antd";

function generateContent(tabList, purchase) {
    let status = "Ready to Dispatch"; // in the future should be dinamic

    const contentList = {};
    for (let i = 0; i < tabList.length; i++) {
        contentList[i] = (
            <div className={styles.purchaseDetails}>
                <div className={styles.productDetails}>
                    <div>
                        <img src={purchase.data[i].img} alt="" />
                    </div>
                    <div className={styles.overview}>
                        <p>Product size: {purchase.data[i].size}</p>
                        <p>Product units: {purchase.data[i].units}</p>
                        <p>Date of purchase: {purchase.date}</p>
                    </div>
                </div>
                <div className={styles.moreDetails}>
                    <div className={styles.deliveryStatus}>
                        <p>Delivery Status:</p>
                        {status}
                    </div>
                    <div>
                        <Button>Buy again</Button>
                    </div>
                </div>
            </div>
        );
    }
    return contentList;
}

function PurchaseCard({ purchase }) {
    let [tabKey, setTabKey] = useState(0);

    const tabList = purchase.data.map((product, index) => ({
        key: index,
        tab: product.model,
    }));

    const contentList = generateContent(tabList, purchase);

    const onTabChange = (key) => {
        setTabKey(key);
    };

    return (
        <Card
            className={styles.purchaseCard}
            tabList={tabList}
            onTabChange={onTabChange}
        >
            {contentList[tabKey]}
        </Card>
    );
}

export default PurchaseCard;
