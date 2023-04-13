import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Collections from "./components/Collections/Collections";
import Product from "./components/Collections/Product/Product";
import {
    createHashRouter,
    RouterProvider,
    useNavigation,
} from "react-router-dom";
import {
    requestCollections,
    requestMen,
    requestProduct,
    requestWomen,
} from "./api/api";
import Spinner from "./components/Collections/Spinner/Spinner";

const router = createHashRouter(
    [
        {
            path: "/",
            element: (
                <AppContent>
                    <Home />
                </AppContent>
            ),
            //children: []
        },
        { path: "/login", element: <Login /> },
        {
            path: "/collections",
            element: (
                <AppContent>
                    <Collections />
                </AppContent>
            ),
            loader: requestCollections,
        },
        {
            path: "/collections/:id",
            element: (
                <AppContent>
                    <Product />
                </AppContent>
            ),
            loader: async ({ params }) => {
                const { id } = params;
                return requestProduct(id);
            },
        },
        {
            path: "/men",
            element: (
                <AppContent>
                    <Collections />
                </AppContent>
            ),
            loader: requestMen,
        },
        {
            path: "/women",
            element: (
                <AppContent>
                    <Collections />
                </AppContent>
            ),
            loader: requestWomen,
        },
        {
            path: "/about",
            element: (
                <AppContent>
                    <Home />
                </AppContent>
            ),
        },
        {
            path: "/contact",
            element: (
                <AppContent>
                    <Home />
                </AppContent>
            ),
        },
    ],
    { path: "/*" }
);

function AppContent({ children }) {
    let { state } = useNavigation();
    //devuelve varias cosas del estado de react router
    return (
        <div className={styles.App}>
            <div className={styles.contentWrap}>
                <NavBar />
                {state === "loading" ? <Spinner /> : children}
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
