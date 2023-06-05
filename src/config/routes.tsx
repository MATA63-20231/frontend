import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RecipeCreation from "../pages/RecipeCreation.tsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <div></div>,
            },
            {
                path: "/receitas/nova-receita",
                element: <RecipeCreation />,
            },
        ],
    },
]);

export default router;
