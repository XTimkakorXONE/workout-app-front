import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";
import React from "react";

export const useAuthPage = () => {
  const [type, setType] = React.useState("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const { mutate, isLoading } = useMutation(
    ["auth"],
    ({ email, password }) => AuthService.main(email, password, type),
    {
      onSuccess: (data) => {
        setIsAuth(true);
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return useMemo(
    () => ({
      setType,
      register,
      handleSubmit,
      errors,
      isLoading,
      onSubmit,
    }),
    [errors, isLoading]
  );
};
