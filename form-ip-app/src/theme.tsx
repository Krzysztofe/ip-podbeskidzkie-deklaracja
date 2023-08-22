import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    // primary: {
    //   main: "rgb(242,242,242)",
    // light:
    // },

    secondary: {
      main: "rgb(153,161,173)",
    },
    info: {
      dark: "#3E3E3E",
      main: "#797979",
      light: "#E2E2E2",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },

    // subtitle2: {
    //   fontSize: "1rem",
    //   fontWeight: 400,
    // },

    body1: {
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});
