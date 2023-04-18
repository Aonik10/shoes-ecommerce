import styles from "./Collections.module.scss";
import Card from "./Card/Card";
import { useLoaderData } from "react-router-dom";

const Collections = () => {
    // solved with this guide
    // https://beta.reactrouter.com/en/dev/guides/deferred#the-problem
    let products = useLoaderData();
    // let products = useMemo(() => requestCollections(), []);

    return (
        <div className={styles.collections}>
            <div>
                <h1>All Collections</h1>
                <h2>Find the best option for you</h2>
            </div>
            <div className={styles.cards}>
                {products.map((product) => (
                    <Card product={product} />
                ))}
            </div>
        </div>
    );
};

export default Collections;

/*
            {products.state === "Pending" ? (
                <Spinner />
            ) : products.state === "Success" ? (
                <div className={styles.cards}>
                    {products.data.map((product) => (
                        <Card product={product} />
                    ))}
                </div>
            ) : (
                <div>Error loading collections</div>
            )}
*/

/*
/*          <React.Suspense fallback={<Spinner />}>
                <Await
                    resolve={products}
                    errorElement={<div>Error loading collections</div>}
                    children={(resolvedProducts) => (
                        <div className={styles.cards}>
                            {resolvedProducts.map((product) => (
                                <Card product={product} />
                            ))}
                        </div>
                    )}
                />
            </React.Suspense>
*/
