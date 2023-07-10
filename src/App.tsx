import { Outlet } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";
import defaultTheme from "./config/theme.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer.tsx";
import CustomSnackBarProvider from "./components/CustomSnackBars/CustomSnackBarProvider.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <CustomSnackBarProvider />
        <CssBaseline />

        <Header />

        <Grid sx={{ minHeight: "calc(100vh - 135px)", bgcolor: "#eeeeee" }}>
          <Outlet />
        </Grid>

        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
