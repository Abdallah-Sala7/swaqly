import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./main.css";

import {
  Home,
  RootLayout,
  AuthPage,
  Products,
  Profile,
  AddProduct,
  AllProduct,
  Setting,
} from "./pages";

import {
  Login,
  Register,
  ForgotPass,
  ResetPass,
  WithGaurd,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WithGaurd>
        <RootLayout />
      </WithGaurd>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "setting", element: <Setting /> },
      {
        path: "products",
        element: <Products />,
        children: [
          { index: true, element: <AllProduct /> },
          { path: "all", element: <AllProduct /> },
          { path: "add", element: <AddProduct /> },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPass /> },
      { path: "reset-password", element: <ResetPass /> },
    ],
  },
  {
    path: "*",
    element: <div>404 this page not found</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
