import { RouterProvider } from "./RouterProvider";
import { IChildren } from "./interface";
import { MuiProvider } from "./MuiProvider";
import { Provider } from "react-redux";
import { store } from "../store/store";

export const MainProvider = ({ children }: IChildren) => {
  return (
    <Provider store={store}>
      <RouterProvider>
        <MuiProvider>{children}</MuiProvider>
      </RouterProvider>
    </Provider>
  );
};
