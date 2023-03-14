import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MyCoinsPage from "../pages/MyCoinsPage/MyCoinsPage";
import endpoints from "./endpoints";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: endpoints.login, element: <LoginPage /> },
      { path: endpoints.home, element: <HomePage /> },
      { path: endpoints.myCoins, element: <MyCoinsPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (Ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: Ui,
    },
  ]);
