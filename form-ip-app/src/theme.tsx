import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    fs_12_rg: {
      fontSize: string;
      [key: string]: any;
    };
    fs_12_sb: {
      fontSize: string;
      [key: string]: any;
    };

    // fs_14_sb: React.CSSProperties;
    // fs_14_rg: React.CSSProperties;

    fs_14_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_14_rg: {
      fontSize: string;
      [key: string]: any;
    };

    fs_16_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_16_rg: {
      fontSize: string;
      [key: string]: any;
    };
  }

  interface TypographyVariantsOptions {
    fs_12_rg: {
      fontSize: string;
      [key: string]: any;
    };
    fs_12_sb: {
      fontSize: string;
      [key: string]: any;
    };

    // fs_14_sb: React.CSSProperties;
    // fs_14_rg: React.CSSProperties;

    fs_14_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_14_rg: {
      fontSize: string;
      [key: string]: any;
    };

    fs_16_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_16_rg: {
      fontSize: string;
      [key: string]: any;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fs_12_rg: true;
    fs_12_sb: true;
    fs_14_rg: true;
    fs_14_sb: true;
    fs_16_rg: true;
    fs_16_sb: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#2569F4" },
    secondary: {
      main: "rgb(153,161,173)",
      light: "#FAFAFA",
    },
    info: {
      dark: "#3E3E3E",
      main: "#797979",
      light: "#E2E2E2",
    },
  },
  spacing: 10,
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    

    subtitle1: {
      fontSize: "0.625rem",
      fontWeight: 600,
    },

    fs_12_sb: {
      fontSize: "0.625rem",
      fontWeight: 600,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "0.75rem",
      },
    },

    fs_12_rg: {
      fontSize: "0.625rem",
      fontWeight: 400,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "0.75rem",
      },
    },

    fs_14_sb: {
      fontSize: "0.687rem",
      fontWeight: 600,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "0.875rem",
      },
    },

    fs_14_rg: {
      fontSize: "0.687rem",
      fontWeight: 400,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "0.875rem",
      },
    },

    fs_16_rg: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "1rem",
      },
    },

    fs_16_sb: {
      fontSize: "0.875rem",
      fontWeight: 600,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "1rem",
      },
    },

    // body1: {
    //   fontSize: "0.75rem",
    //   fontWeight: 600,
    // },
    // body2: {
    //   fontSize: "0.75rem",
    //   fontWeight: 400,
    // },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "15rem",
          // width: { xs: "65%", sm: "15rem" },
          "&:hover": { backgroundColor: "#2455BA" },
        },
      },
    },
  },
});
