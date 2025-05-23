import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Bills from "../Pages/Bills";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PayBill from "../Pages/PayBill";
import PrivateRoute from "../Contexts/PrivateRoute";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/bills",
        element: (
          <PrivateRoute>
            <Bills></Bills>
          </PrivateRoute>
        ),
        loader: () => fetch("/billsData.json"),
        hydrateFallbackElement: (
          <span className="loading loading-spinner text-center loading-xl"></span>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/paybill/:id",
        element: (
          <PrivateRoute>
            <PayBill></PayBill>
          </PrivateRoute>
        ),
        loader: () => fetch("/billsData.json"),
        hydrateFallbackElement: (
          <span className="loading loading-spinner text-center loading-xl"></span>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
