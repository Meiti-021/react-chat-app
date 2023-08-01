import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    cardUserName: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cardUserName?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cardUserName: true;
    h3: false;
  }
}
const theme = createTheme({});
export default theme;
