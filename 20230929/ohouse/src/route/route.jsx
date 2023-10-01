import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/layout";
import MainPage from "../pages/mainPage";
import ShoppingPage from "../pages/shoppingPage";
import LifePage from "../pages/lifePage";
import List from "../pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },

      {
        path: "/shopping",
        element: <ShoppingPage />,
      },
      {
        path: "/life",
        element: <LifePage />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
]);
export default router;
