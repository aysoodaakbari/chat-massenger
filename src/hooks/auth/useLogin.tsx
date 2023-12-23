import { useState, useEffect } from "react";
import axios from "axios";

export enum SET_LOGIN_INFORMAYION {
  LOGIN_REQUIRED = "LOGIN_REQUIRED",
}

interface IError {
  type: SET_LOGIN_INFORMAYION;
  message: string;
}
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>();

  const login = async (phoneNumber: string, password: string) => {
    setLoading(true);
    setError({
      type: SET_LOGIN_INFORMAYION.LOGIN_REQUIRED,
      message: "bad request",
    });

    try {
      const response = await axios.post(`${window.location.href}/api/login`, {
        phoneNumber: phoneNumber,
        password: password,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    login,
  };
};

export default useLogin;
