import {createBrowserRouter} from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Product from "../pages/Products";
import Services from "../pages/Services";
import About from "../pages/AboutUs";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Mainpage/>
            },
            {
                path: "/products",
                element: <Product/>
            },
            {
                path: "/services",
                element:<Services/>
            },
            {
                path: "/about",
                element:<About/>
            }
        ]
    }

]);

export default router;