import { Typography } from "@mui/material";
import "./style.scss";

export const Banner = (props: {
  bannerHeadingText: string;
  bannerBodyText?: string;
}) => {
  return (
    <div className="services-section container h-screen overflow-hidden">
      <div className="min-h-[20vh] pb-10">
        <Typography
          className="pt-16 !font-bold text-white-main"
          variant="subtitle2"
        >
          {props.bannerHeadingText}
        </Typography>

        <Typography
          className="!mt-2 w-full pl-4 !font-medium text-white-900 xl:!leading-8"
          variant="body1"
        >
          {props.bannerBodyText ? props.bannerBodyText : ""}
        </Typography>

        <div className="mt-4 h-0.5 w-96 bg-gradient-to-r from-white-50 to-white-600" />
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-center">
        <img src="/azki-twitter_1.png" />
      </div>
    </div>
  );
};
