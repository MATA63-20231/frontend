import "notistack";
import "@mui/material";

// Add the 'title' props to snackBars
declare module "notistack" {
  interface VariantOverrides {
    success: {
      title?: string;
    };
    error: {
      title?: string;
    };
    warning: {
      title?: string;
    };
    info: {
      title?: string;
    };
  }
}

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
    indexList: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    mainTitle?: React.CSSProperties;
    indexList: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    mainTitle: true;
    indexList: true;

  }
}
