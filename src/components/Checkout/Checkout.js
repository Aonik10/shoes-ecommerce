import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.scss";
import { Button, Descriptions } from "antd";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";

function Checkout() {
    const { data } = useSelector((state) => state.session);
    let products = useLoaderData();
    let navigate = useNavigate();
    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleWidth);
        return () => {
            window.removeEventListener("resize", handleWidth);
        };
    }, []);

    const handleClick = async (func) => {
        await func();
    };

    //let mql = window.matchMedia("screen and (max-width: 740px)");

    return (
        <div className={styles.checkout}>
            <Descriptions
                className={styles.descriptions}
                title={"BILLING INFORMATION"}
                bordered={true}
                column={width > 740 ? 2 : 1}
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
