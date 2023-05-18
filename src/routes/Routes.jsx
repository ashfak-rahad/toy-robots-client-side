import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";
import Registration from "../pages/Registration";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/alls",
                element: <AllToys/>
            },
            {
                path: "/add",
                element: <AddToy/>
            },
            {
                path: "/sign",
                element: <Registration/>
            }
           
        ]
    }
])

export default Routes