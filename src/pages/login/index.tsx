import { Button, Typography } from "@mui/material";
import { ILoginFormData } from "./interface";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from "../../utils/regex";
import { PhoneNumberInput } from "../../components/login/PhoneNumberInput";
import { PasswordInput } from "../../components/login/PasswordInput";
import { useLogin } from "../../hooks/auth/useLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const { control, handleSubmit } = useForm<ILoginFormData>({
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = () => {
    login("Aysooda", "hakuuaruaew");
    navigate("/chatroom");
  };
  return (
    <div className="flex h-full flex-col">
      <div className="mt-4 flex flex-col gap-y-2">
        <Typography className="!font-bold  text-primary-main md:text-center md:!text-3xl ">
          LOGIN
        </Typography>
        <Typography className="md:!hidden" variant="body2">
          please Complete the information
        </Typography>
      </div>

      <form
        className="mt-6 flex h-full flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: PHONE_NUMBER_REGEX,
              message: "phone number is incurrent",
            },
            maxLength: 11,
          }}
          render={({ field }) => {
            return (
              <PhoneNumberInput
                autoFocus
                label="phone number"
                placeholder="example:09128325515"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            pattern: {
              value: PASSWORD_REGEX,
              message: "password is incurrent",
            },
            required: true,
          }}
          render={({ field }) => {
            return (
              <PasswordInput
                label="password"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            );
          }}
        />

        <div className="mt-auto flex flex-col gap-y-5 pb-12 md:mt-10 md:justify-between md:gap-y-28 md:pb-0 xl:h-full">
          <Button
            variant="contained"
            type="submit"
            className="!bg-primary-main"
            size="large"
            onClick={onSubmit}
            onKeyDown={(e) => (e.key === "Enter" ? onSubmit : "")}
          >
            login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
