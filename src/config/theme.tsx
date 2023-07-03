import { LinkProps } from "@mui/material/Link";
import createTheme from "@mui/material/styles/createTheme";
import LinkBehavior from "../components/LinkBehavior.tsx";

// Create personalized theme variants
declare module "@mui/material/styles" {
  interface Palette {
    default: Palette["primary"];
  }

  interface PaletteOptions {
    default?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    mainTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    mainTitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    mainTitle: true;
  }
}

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
      variants: [
        {
          props: { variant: "contained" },
          style: {
            fontSize: "14px",
            padding: "8px 20px",
            marginLeft: "30px",
            borderRadius: "50px",
            transition: "0.3s",
          },
        },
      ],
    },
  },
});

export default defaultTheme;
