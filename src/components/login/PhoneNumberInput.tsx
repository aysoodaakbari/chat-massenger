import { forwardRef, useState } from "react";
import { TextField, TextFieldProps, Typography } from "@mui/material";

export const PhoneNumberInput = forwardRef(
  (
    props: { message?: string } & TextFieldProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | React.RefObject<HTMLDivElement>
      | null
      | undefined,
  ) => {
    const [showHelperText, setShowHelperText] = useState<boolean>(false);

    const count = (props.value as string).length;
    const hasError = props.error;
    const errorMessage = props.message;

    return (
      <TextField
        ref={ref}
        variant="outlined"
        type="tel"
        inputProps={{
          maxLength: 11,
          dir: "ltr",
          className: "placeholder:text-left",
          onFocus: () => {
            setShowHelperText(true);
          },
          onBlur: () => {
            setShowHelperText(false);
          },
        }}
        InputLabelProps={{ className: "!text-sm" }}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;

          if (target.value.length <= target.maxLength) {
            target.value = target.value.slice(0, target.maxLength);
          }
        }}
        onKeyDown={(e) => {
          if (
            (e.ctrlKey || e.metaKey) &&
            ["c", "v", "x", "a"].includes(e.key.toLowerCase())
          ) {
            return;
          }

          if (
            !/^\d$/.test(e.key) &&
            e.key !== "Backspace" &&
            e.key !== "Tab" &&
            e.key !== "Delete" &&
            e.key !== "ArrowLeft" &&
            e.key !== "ArrowRight"
          ) {
            e.preventDefault();
          }
        }}
        helperText={
          <span className="relative flex h-6 w-full flex-row items-center">
            {hasError ? (
              <span className="!text-xs">{errorMessage}</span>
            ) : (
              <></>
            )}

            <span
              className="absolute left-0"
              style={{
                visibility: showHelperText ? "visible" : "hidden",
              }}
            >
              <Typography
                align="right"
                variant="body2"
                component="span"
                className={`${hasError ? "text-error-main" : ""}`}
              >
                <span
                  className={`${count === 11 ? "" : "text-white-400"} ${
                    hasError ? "text-error-main" : ""
                  }`}
                >
                  11
                </span>{" "}
                / {count}
              </Typography>
            </span>
          </span>
        }
        {...props}
      />
    );
  },
);
