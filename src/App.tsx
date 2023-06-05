import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeCreation from "./pages/RecipeCreation.tsx";
import AAAAAAAAAAAA from "./components/AAAAAAAAAAAA.tsx";

const router = createBrowserRouter([
    {
        element: <AAAAAAAAAAAA />,
        children: [
            {
                path: "/",
                element: <RecipeCreation />,
            },
            {
                path: "/a",
                element: <div>oi</div>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
