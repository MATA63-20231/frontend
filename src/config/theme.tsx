import { LinkProps } from "@mui/material/Link";
import createTheme from "@mui/material/styles/createTheme";
import LinkBehavior from "../components/LinkBehavior.tsx";


// create personalized theme variants
declare module '@mui/material/styles' {
  interface Palette {
    default: Palette['primary'];
  }

  interface PaletteOptions {
    default?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    primary?: React.CSSProperties;
    secondary?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    primary: true;
    secondary: true;
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
      main: "#212529" 
    }, 
  },

  typography: {
    fontFamily: 'Open Sans',
    primary: {
      fontFamily: 'Amatic SC',
    },
    secondary: {
      fontFamily: ' Inter',
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
  },
});

export default defaultTheme;
