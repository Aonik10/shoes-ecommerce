import React, { useCallback, useState } from "react";
import { Button, List } from "antd";
import styles from "./Cart.module.scss";
import CartCard from "./CartCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { DeleteFilled } from "@ant-design/icons";
import { deleteCartElement, getUserCart } from "../../api/api";

function Cart() {
    let navigate = useNavigate();
    let loaderProducts = useLoaderData();

    let [products, setProducts] = useState(loaderProducts);

    let [loading, setLoading] = useState(false);

    let refreshProducts = useCallback(async () => {
        setLoading(true);
        setProducts(await getUserCart());
        setLoading(false);
    }, [setProducts]);

    const handleClick = async (id, size) => {
        await deleteCartElement({
            id: id,
            size: size,
        });
        await refreshProducts();
    };

    // Falta resolver:

    //
    // Evaluar del lado del servidor si la cantidad de producto es cero ==> eliminar del carrito
    // Agregar boton de Continuar
    // Poner disable al boton cada vez que se utiliza (el de incremento/decremento)
    // poner un indicador de loading DONE

    return (
        <div className={styles.cart}>
            <div className={styles.cartElements}>
                <List
                    className={styles.cartList}
                    bordered={true}
                    header={
                        <div className={styles.cartHeader}>Shopping Cart</div>
                    }
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
                            <CartCard
                                product={product}
                                refresh={refreshProducts}
                            />
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
                <Button
                    className={styles.continueBtn}
                    disabled={loading || products.length === 0}
                    onClick={() => navigate("checkout")}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}

export default Cart;
