import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import endpoints from "./endpoints";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const CreatePage = lazy(() => import("../pages/CreatePage/CreatePage"));
const DetailPage = lazy(() => import("../pages/DetailPage/DetailPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

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
