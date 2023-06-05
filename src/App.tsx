import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";

import { Outlet } from "react-router-dom";

import defaultTheme from "./config/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <Header />

            <Grid sx={{ minHeight: "80vh", bgcolor: "#eeeeee" }}>
                <Outlet />
            </Grid>

            <Footer />
        </ThemeProvider>
    );
}

export default App;
