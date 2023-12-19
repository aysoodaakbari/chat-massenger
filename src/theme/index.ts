import { createTheme } from "@mui/material/styles";
import pallete from "./pallet";
import { IAzkiPalette } from "./interface";

let theme = createTheme({
  direction: "rtl",
  palette: pallete as IAzkiPalette,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fieldset: {
            borderRadius: "8px",
          },
          "@media (max-width: 900px)": {
            fieldset: {
              borderRadius: "4px",
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({}) => ({
          outline: "unset",
          borderRadius: 8,
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: pallete.white?.[100],
          borderRadius: 4,
          ".MuiLinearProgress-bar": {
            borderRadius: 4,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginLeft: "0 !important",
          marginRight: "0 !important",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: "transparent",
          borderRadius: 8,
          border: "1px solid rgba(255, 255, 255, 0.23)",
          ":hover": {
            borderColor: "#fff",
            background: "transparent",
          },
          "::after,::before": {
            border: "0 !important",
          },
          "&.Mui-focused": {
            borderColor: "rgba(60, 125, 255, 1)",
            background: "transparent",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({}) => ({
          borderRadius: 8,

          "@media (max-width: 900px)": {
            borderRadius: 4,
          },
        }),
        textPrimary: {
          color: pallete.primary?.main,
        },
        sizeLarge: {
          height: "48px",
        },
        sizeSmall: {
          minWidth: "75px !important",
          borderRadius: "4px",
        },
        containedPrimary: {
          ":disabled": {
            background: pallete.primary?.main,
            opacity: 0.4,
          },
        },
        containedSecondary: {
          color: pallete.text?.primary,
          backgroundColor: pallete.white?.main,
        },
      },
    },
  },
});

export default theme;
