import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";

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
            }
           
        ]
    }
])

export default Routes