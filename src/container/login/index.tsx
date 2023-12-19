import { IconButton } from "@mui/material";
import LoginPage from "../../pages/login";
import { Banner } from "../../components/login/banner";

const LoginContainer = () => {
  return (
    <div className="flex w-full !bg-white-200">
      <div className="mx-auto flex w-full max-w-[30rem] flex-col px-4 md:w-1/2">
        <div className="hidden md:block md:basis-1/5" />

        <div className="flex h-12 items-center justify-between md:h-auto md:justify-center">
          <IconButton
            className="basis-8 md:!hidden"
            aria-label=""
            onClick={() => {
              window.location.href = `/`;
            }}
          >
            {/* TODO */}
            {/*    <SvgExit className="h-full w-full" /> */}
          </IconButton>

          <div className="basis-8 md:hidden" />
        </div>

        <LoginPage />

        <div className="hidden md:block md:basis-1/12" />
      </div>

      <div className="hidden bg-white-400 pr-6 md:flex md:w-1/2 xl:pr-24">
        <Banner bannerHeadingText="" />
      </div>
    </div>
  );
};

export default LoginContainer;
