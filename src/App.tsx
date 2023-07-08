import { Outlet } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";
import defaultTheme from "./config/theme.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import CustomSnackBarProvider from "./components/CustomSnackBars/CustomSnackBarProvider.tsx";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CustomSnackBarProvider />
      <CssBaseline />

      <Header />

      <Grid sx={{ minHeight: "calc(100vh - 135px)", bgcolor: "#eeeeee" }}>
        <Outlet />
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
