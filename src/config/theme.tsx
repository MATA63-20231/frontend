import { LinkProps } from "@mui/material/Link";
import createTheme from "@mui/material/styles/createTheme";
import LinkBehavior from "../components/LinkBehavior.tsx";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#CE1212",
    },
    secondary: {
      main: "#37373f",
    },
    default: {
      main: "#212529",
    },
  },

  typography: {
    fontFamily: "Open Sans",
    mainTitle: {
      fontFamily: "Inter",
      fontSize: "28px",
      fontWeight: "700",
      whiteSpace: "nowrap",
    },
    h1: {
      fontFamily: "Amatic SC",
      fontSize: "52px",
      fontWeight: 500,
      margin: 0,
      color: "#CE1212",
    },
    h2: {
      fontSize: "13px",
      letterSpacing: "1px",
      fontWeight: 400,
      margin: 0,
      padding: 0,
      color: "#7F7F90",
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          padding: "8px 20px",
          borderRadius: "50px",
          transition: "0.3s",
        },
      },
    },
    MuiAlert: {
      styleOverrides: { message: { width: "100%" } },
    },
  },
});

export default defaultTheme;
