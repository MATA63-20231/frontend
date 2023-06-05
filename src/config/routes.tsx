import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFound.tsx";
import RecipeCreation from "../pages/RecipeCreation.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nova-receita",
        element: <RecipeCreation />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;