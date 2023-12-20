import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./../theme";
import { IChildren } from "./interface";
import { ReactElement } from "react";

export const MuiProvider = (props: IChildren): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
