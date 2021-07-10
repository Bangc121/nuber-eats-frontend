import React from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../components/form-error";

interface ILoginForm {
  email?: string;
  password?: string;
}

export const Login = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>();
  const onSubmit = () => {
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-5 pb-7 rounded-lg text-center">
        <h3 className="font-bold text-3xl text-gray-800">Log In</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 my-5 px-5"
        >
          <input
            {...register("email", {
              required: "Email is required",
            })}
            required
            name="email"
            type="email"
            placeholder="Email"
            className="input mb-3"
          />
          {errors.email?.message && (
            <FormError errorMessage={errors.email?.message}/>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: 10,
            })}
            required
            name="password"
            type="password"
            placeholder="Password"
            className="input"
          />
          {errors.password?.message && (
            <FormError errorMessage={errors.password?.message}/>
          )}
          {errors.password?.type === "minLength" && (
            <FormError errorMessage={"Password must be more than 10 chars."}/>
          )}
          <button className="btn mt-3">Log In</button>
        </form>
      </div>
    </div>
  );
};
