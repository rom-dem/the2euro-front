import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import endpoints from "./endpoints";

import LoginPage from "../pages/LoginPage/LoginPage";
import CreatePage from "../pages/CreatePage/CreatePage";
import DetailPage from "../pages/DetailPage/DetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: endpoints.login, element: <LoginPage /> },
      { path: endpoints.slash, element: <HomePage /> },
      { path: endpoints.createCoin, element: <CreatePage /> },
      { path: `${endpoints.coin}${endpoints.id}`, element: <DetailPage /> },
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
