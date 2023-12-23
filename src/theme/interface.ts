import { PaletteColorOptions, PaletteOptions } from "@mui/material";

export interface IAzkiPalette extends PaletteOptions {
  white?: {
    "50": string;
    "100": string;
    "150": string;
    "200": string;
    "400": string;
    "600": string;
    "800": string;
    main: string;
    contrastText: string;
  };
  primary?: PaletteColorOptions & {
    "50": string;
    "100": string;
    "150": string;
    "200": string;
    "400": string;
    "600": string;
    "800": string;
    main: string;
  };
  secondary?: PaletteColorOptions & {
    "50": string;
    "100": string;
    "150": string;
    "200": string;
    "400": string;
    "600": string;
    "800": string;
    main: string;
  };
}
