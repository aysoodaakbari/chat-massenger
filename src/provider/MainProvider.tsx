import { RouterProvider } from "./RouterProvider";
import { IChildren } from "./interface";

export const MainProvider = ({ children }: IChildren) => {
  return <RouterProvider>{children}</RouterProvider>;
};
