import React from "react";
import { List } from "antd";
import styles from "./Cart.module.scss";
import CartCard from "./CartCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { DeleteFilled } from "@ant-design/icons";
import { deleteCartElement } from "../../api/api";

function Cart() {
    let products = useLoaderData();
    let navigate = useNavigate();

    const handleClick = (id, size) => {
        deleteCartElement({
            id: id,
            size: size,
        });
        navigate(0);
    };

    // Falta resolver:

    // Si seguimos actualizando con el useNavigate() o lo cambiamos
    // Restringir la cantidad minima a 0, o si es cero eliminar el producto del carrito
    // Agregar boton de Finalizar Compra

    return (
        <div className={styles.cart}>
            <List
                className={styles.cartList}
                bordered={true}
                header={<div className={styles.cartHeader}>Shopping Cart</div>}
                footer={
                    <div className={styles.cartFooter}>
                        <div>Total:</div>
                        <div>
                            $
                            {products.reduce(
                                (total, product) =>
                                    total + product.price * product.units,
                                0
                            )}
                        </div>
                    </div>
                }
                dataSource={products.map((product) => (
                    <div className={styles.cartItems}>
                        <CartCard product={product} />
                        <DeleteFilled
                            className={styles.deleteIcon}
                            onClick={() =>
                                handleClick(product.id, product.size)
                            }
                        />
                    </div>
                ))}
                renderItem={(product) => <List.Item>{product}</List.Item>}
            />
        </div>
    );
}

export default Cart;
