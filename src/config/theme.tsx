import { LinkProps } from "@mui/material/Link";
import createTheme from "@mui/material/styles/createTheme";
import LinkBehavior from "../components/LinkBehavior.tsx";


// create default pallete
declare module '@mui/material/styles' {
  interface Palette {
    default: Palette['primary'];
  }

  interface PaletteOptions {
    default?: PaletteOptions['primary'];
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
