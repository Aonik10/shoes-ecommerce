import React from "react";
import { Button, Result } from "antd";
import { useLoaderData, useNavigate } from "react-router-dom";

function CheckoutResult() {
    let navigate = useNavigate();
    let { orderCode } = useLoaderData();
    let success = orderCode ? true : false;

    let messages = {
        success: {
            title: "Successfully Purchased!",
            message:
                "Order Number: " +
                orderCode +
                " An email has been sent to your registered email for more information",
        },
        warning: {
            title: "Something went wrong",
            message: "Order couldn't be generated, please try again later",
        },
    };

    return (
        <div>
            <Result
                status={success ? "success" : "warning"}
                title={messages[success ? "success" : "warning"].title}
                subTitle={messages[success ? "success" : "warning"].message}
                extra={[
                    <Button
                        key="purchases"
                        onClick={() => navigate("/purchases")}
                    >
                        Go to purchases
                    </Button>,
                    <Button
                        key="see more"
                        onClick={() => navigate("/collections")}
                    >
                        See more products
                    </Button>,
                ]}
            />
        </div>
    );
}

export default CheckoutResult;
