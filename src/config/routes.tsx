import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFound.tsx";
import RecipeCreation from "../pages/Recipe/RecipeCreation.tsx";
import RecipeView from "../pages/RecipeView/RecipeView.tsx";
import Login from "../pages/Login/Login.tsx";
import Register from "../pages/Register/Register.tsx";
import RecipeEdit from "../pages/Recipe/RecipeEdit.tsx";
import RecipeSearch from "../pages/RecipeSearch.tsx";

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
        path: "/cadastro",
        element: <Register />,
      },
      {
        path: "/nova-receita",
        element: <RecipeCreation />,
      },
      {
        path: "/editar-receita/:recipeId",
        element: <RecipeEdit />,
      },
      {
        path: "/receita/:recipeId",
        element: <RecipeView />,
      },
      {
        path: "/receita/busca/:search_text",
        element: <RecipeSearch />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
