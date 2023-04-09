import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Collections from "./components/Collections/Collections";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter(
    [
        { path: "/", element: AppContent(<Home />) }, //
        { path: "/login", element: <Login /> },
        { path: "/collections", element: AppContent(<Collections />) },
        { path: "/men", element: AppContent(<Home />) },
        { path: "/women", element: AppContent(<Home />) },
        { path: "/about", element: AppContent(<Home />) },
        { path: "/contact", element: AppContent(<Home />) },
    ],
    { path: "/*" }
);

function AppContent(component) {
    return (
        <div className={styles.App}>
            <div className={styles.contentWrap}>
                <NavBar />
                {component}
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
