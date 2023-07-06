import React, { useState } from "react";
import InputComponent from "../../components/form/textField/inputComponent";
import { motion } from "framer-motion";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "title min 4 char"),
});

const LoginFormContent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, isLoading } = useLogin();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:w-[500px] sm:h-[400px] md:h-[500px] flex-col justify-center items-center p-10 gap-5">
          <h1 className="text-[15px] font-bold">Log in</h1>
          <div className="w-full">
            <InputComponent
              label="Email"
              name="email"
              error={errors?.email}
              register={register}
            />
          </div>
          <div className="w-full relative">
            <InputComponent
              label="Password"
              type={!showPassword ? "password" : "text"}
              name="password"
              error={errors?.password}
              register={register}
            />
            {!showPassword ? (
              <div
                onClick={() => setShowPassword(true)}
                className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
              >
                <RemoveRedEyeIcon />
              </div>
            ) : (
              <div
                onClick={() => setShowPassword(false)}
                className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
              >
                <VisibilityOffIcon />
              </div>
            )}
          </div>
          <div className="flex justify-end w-full">
            <Link to="todo">Forgot Password?</Link>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-gradient-to-r from-[#eebd89] to-[#d13abd] py-3 px-5 w-full text-white shadow-lg rounded-md"
          >
            Login
          </button>
          {error && <div>{error}</div>}
        </div>
      </form>
    </>
  );
};

export default LoginFormContent;
