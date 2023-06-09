import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Collections from "./components/Collections/Collections";
import Product from "./components/Collections/Product/Product";
import About from "./components/About/About";
import {
    createHashRouter,
    Outlet,
    RouterProvider,
    useNavigation,
} from "react-router-dom";
import {
    getPurchases,
    createPurchase,
    getUserCart,
    requestCollections,
    requestMen,
    requestProduct,
    requestWomen,
} from "./api/api";
import Spinner from "./components/Collections/Spinner/Spinner";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CheckoutResult from "./components/Checkout/CheckoutResult";
import Contact from "./components/Contact/Contact";
import Purchases from "./components/Purchases/Purchases";
import UserSettings from "./components/UserSettings/UserSettings";

export const router = createHashRouter(
    [
        {
            path: "/",
            element: <AppContent />,
            errorElement: <Error />,
            children: [
                {
                    path: "",
                    element: <Home />,
                    loader: requestCollections,
                },
                {
                    path: "collections",
                    element: <Collections />,
                    loader: requestCollections,
                },
                {
                    path: "collections/:id",
                    element: <Product />,
                    loader: async ({ params }) => {
                        const { id } = params;
                        return requestProduct(id);
                    },
                },
                {
                    path: "men",
                    element: <Collections />,
                    loader: requestMen,
                },
                {
                    path: "women",
                    element: <Collections />,
                    loader: requestWomen,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                    loader: getUserCart,
                },
                {
                    path: "cart/checkout",
                    element: <Checkout />,
                    loader: getUserCart,
                },
                {
                    path: "cart/checkout/result",
                    element: <CheckoutResult />,
                    loader: createPurchase,
                },
                {
                    path: "purchases",
                    element: <Purchases />,
                    loader: getPurchases,
                },
                {
                    path: "settings",
                    element: <UserSettings />,
                },
            ],
        },
        { path: "/login", element: <Login /> },
    ],
    { path: "/*" }
);

function AppContent() {
    let { state } = useNavigation();
    //devuelve varias cosas del estado de react router
    return (
        <div className={styles.App}>
            <div className={styles.contentWrap}>
                <NavBar />
                {state === "loading" ? <Spinner /> : <Outlet />}
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
