import React from "react";
import styles from "./Checkout.module.scss";
import { Button, Descriptions } from "antd";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";

function Checkout() {
    const { data } = useSelector((state) => state.session);
    let products = useLoaderData();
    let navigate = useNavigate();

    const handleClick = async (func) => {
        await func();
    };

    return (
        <div className={styles.checkout}>
            <Descriptions
                className={styles.descriptions}
                title={"BILLING INFORMATION"}
                bordered={true}
                column={2}
            >
                <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
                <Descriptions.Item label="Lastname">
                    {data.lastname}
                </Descriptions.Item>
                <Descriptions.Item label="City">{data.city}</Descriptions.Item>
                <Descriptions.Item label="Address">
                    {data.address}
                </Descriptions.Item>
                <Descriptions.Item label="Postal Code">
                    {data.postalCode}
                </Descriptions.Item>
                <Descriptions.Item label="Phone Number">
                    {data.phoneNumber}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions
                className={styles.descriptions}
                title={"PRODUCTS RESUME"}
                bordered={true}
                column={products.length}
            >
                <Descriptions.Item label="Total Products">
                    {products.reduce(
                        (total, product) => total + product.units,
                        0
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Amount">
                    $
                    {products.reduce(
                        (total, product) =>
                            total + product.units * product.price,
                        0
                    )}
                </Descriptions.Item>
            </Descriptions>
            <div className={styles.buttons}>
                <Button onClick={() => handleClick(() => navigate("/cart"))}>
                    Go back
                </Button>
                <Button onClick={() => handleClick(() => navigate("result"))}>
                    Buy now!
                </Button>
            </div>
        </div>
    );
}

export default Checkout;
