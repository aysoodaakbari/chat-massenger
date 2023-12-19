import { BrowserRouter } from "react-router-dom";
import { IChildren } from "./interface";

export const RouterProvider = ({ children }: IChildren) => {
  return <BrowserRouter basename="/">{children}</BrowserRouter>;
};
