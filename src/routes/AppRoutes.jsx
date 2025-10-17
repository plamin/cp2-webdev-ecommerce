import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "perfil", element: <Perfil /> },
      { path: "carrinho", element: <Carrinho /> },
    ],
  },
]);

export default router;