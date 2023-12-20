import { RouterProvider } from "./RouterProvider";
import { IChildren } from "./interface";
import { MuiProvider } from "./MuiProvider";

export const MainProvider = ({ children }: IChildren) => {
  return (
    <RouterProvider>
      <MuiProvider>{children}</MuiProvider>
    </RouterProvider>
  );
};
