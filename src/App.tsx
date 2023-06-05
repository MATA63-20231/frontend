import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";
import createTheme from "@mui/material/styles/createTheme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import RecipeCreation from "./pages/RecipeCreation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeCreation />,
  },
  {
    path: "/a",
    element: <div>oi</div>,
  },
]);

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Header />

      <Grid sx={{ minHeight: "80vh", bgcolor: "#212529" }}>
        <RouterProvider router={router} />
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
