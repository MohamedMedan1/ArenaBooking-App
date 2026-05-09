"use client";

import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import {loginAction} from "../_services/actions";
import SubmitButton from "./SubmitButton";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit, formState} = useForm<LoginFormInputs>();
  const {errors} = formState;

  async function onSubmitFn(data: any) {
    const result = await loginAction(data);
    console.log(result);
  }

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmitFn)}>
      <div className="space-y-5">
        <FormRow
          {...register("email", { required: "This field is required" })}
          error={errors?.email?.message}
          inputType="email"
          labelName="Email"
          placeholder="your@email.com"
        />
        <FormRow
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 16,
              message: "Password can be at most 16 characters",
            },
          })}
          error={errors?.password?.message}
          inputType="password"
          labelName="Password"
          placeholder="Enter password"
        />

        <p className="text-end font-semibold text-chart-2">Forgot Password?</p>
      </div>
      <SubmitButton title="SignIn"/>
    </form>
  );
}
