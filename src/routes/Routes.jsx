import { createBrowserRouter, useLoaderData } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";
import Registration from "../pages/Registration";
import PageError from "../pages/PageError";

import VeiwDetails from "../pages/VeiwDetails";
import MyToys from "../pages/MyToys";
import Update from "../pages/Update";
import RequireAuth from "./RequireAuth";


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
        element:<RequireAuth><MyToys /></RequireAuth> ,
      },
      {
        path: "/toy/:id",
        element:<RequireAuth><VeiwDetails/></RequireAuth>,
        loader: ({ params }) =>
          fetch(`https://toy-robots.vercel.app/robot/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://toy-robots.vercel.app/robot/${params.id}`),
      },
    ],
  },
]);

export default Routes;
