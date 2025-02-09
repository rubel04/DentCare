import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./COMPONENTS/ErrorPage.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./COMPONENTS/Home.jsx";
import AllTreatments from "./COMPONENTS/AllTreatments.jsx";
import ServiceDetails from "./COMPONENTS/ServiceDetails.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Login from "./COMPONENTS/Login.jsx";
import Register from "./COMPONENTS/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/allTreatments",
        element: <AllTreatments />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/service/details/:id",
        element: <ServiceDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`/services.json`);
          const data = await res.json();
          const singleService = data.find((service) => service.id == params.id);
          return singleService;
        },
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider
      routes={<RouterProvider router={router}></RouterProvider>}
    ></AuthProvider>
  </StrictMode>
);
