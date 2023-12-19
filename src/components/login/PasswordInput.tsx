import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { forwardRef, useState } from "react";
import checkPersianCharacters from "../../utils/checkPersianCharacter";

export const PasswordInput = forwardRef(
  (
    props: { message?: string } & TextFieldProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | React.RefObject<HTMLDivElement>
      | null
      | undefined,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const hasError = props.error;
    const errorMessage = props.message;

    return (
      <TextField
        ref={ref}
        type={showPassword ? "text" : "password"}
        onKeyDown={(e) => {
          if (checkPersianCharacters(e.key)) {
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
          </span>
        }
        inputProps={{
          className: "!text-sm !text-left placeholder:text-right",
          dir: "ltr",
        }}
        InputProps={{
          className: "text-left placeholder:text-right",
          endAdornment: (
            <InputAdornment
              sx={{ borderRight: "1px solid red" }}
              position="start"
            >
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1667 6.09995C12.6267 3.67995 10.3734 2.28662 8.00004 2.28662C6.81337 2.28662 5.66004 2.63329 4.60671 3.27995C3.55337 3.93329 2.60671 4.88662 1.83337 6.09995C1.16671 7.14662 1.16671 8.84662 1.83337 9.89329C3.37337 12.32 5.62671 13.7066 8.00004 13.7066C9.18671 13.7066 10.34 13.36 11.3934 12.7133C12.4467 12.06 13.3934 11.1066 14.1667 9.89329C14.8334 8.85329 14.8334 7.14662 14.1667 6.09995ZM8.00004 10.6933C6.50671 10.6933 5.30671 9.48662 5.30671 7.99995C5.30671 6.51329 6.50671 5.30662 8.00004 5.30662C9.49337 5.30662 10.6934 6.51329 10.6934 7.99995C10.6934 9.48662 9.49337 10.6933 8.00004 10.6933Z"
                      fill="#F2F2F2"
                    />
                    <path
                      d="M7.99998 6.09338C6.95331 6.09338 6.09998 6.94672 6.09998 8.00005C6.09998 9.04672 6.95331 9.90005 7.99998 9.90005C9.04664 9.90005 9.90664 9.04672 9.90664 8.00005C9.90664 6.95338 9.04664 6.09338 7.99998 6.09338Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1667 6.09995C12.6267 3.67995 10.3734 2.28662 8.00004 2.28662C6.81337 2.28662 5.66004 2.63329 4.60671 3.27995C3.55337 3.93329 2.60671 4.88662 1.83337 6.09995C1.16671 7.14662 1.16671 8.84662 1.83337 9.89329C3.37337 12.32 5.62671 13.7066 8.00004 13.7066C9.18671 13.7066 10.34 13.36 11.3934 12.7133C12.4467 12.06 13.3934 11.1066 14.1667 9.89329C14.8334 8.85329 14.8334 7.14662 14.1667 6.09995ZM8.00004 10.6933C6.50671 10.6933 5.30671 9.48662 5.30671 7.99995C5.30671 6.51329 6.50671 5.30662 8.00004 5.30662C9.49337 5.30662 10.6934 6.51329 10.6934 7.99995C10.6934 9.48662 9.49337 10.6933 8.00004 10.6933Z"
                      fill="#F2F2F2"
                    />
                    <path
                      d="M7.99998 6.09338C6.95331 6.09338 6.09998 6.94672 6.09998 8.00005C6.09998 9.04672 6.95331 9.90005 7.99998 9.90005C9.04664 9.90005 9.90664 9.04672 9.90664 8.00005C9.90664 6.95338 9.04664 6.09338 7.99998 6.09338Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ className: "!text-sm" }}
        {...props}
      />
    );
  },
);
