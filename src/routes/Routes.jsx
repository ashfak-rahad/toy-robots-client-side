import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";
import Registration from "../pages/Registration";
import PageError from "../pages/PageError";
import AddedToy from "../pages/AddedToy";
import VeiwDetails from "../pages/VeiwDetails";





const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/alls",
        element: <AllToys />,
      },
      {
        path: "/add",
        element: <AddToy />,
      },
      {
        path: "/sign",
        element: <Registration />,
      },
      {
        path: "/myToys",
        element: <AddedToy/>,
      },
      {
        path: "/alls/:id",
        element:<VeiwDetails/>
      }
     
      
    ],
  },
]);

export default Routes;
