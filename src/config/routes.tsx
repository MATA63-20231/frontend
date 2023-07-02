import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFound.tsx";
import RecipeCreation from "../pages/RecipeCreation.tsx";
import RecipeView from "../pages/RecipeView.tsx";
import Login from "../pages/Login.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/nova-receita",
        element: <RecipeCreation />,
      },
      {
        path: "/receita/:id",
        element: <RecipeView />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
