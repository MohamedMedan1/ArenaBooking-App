"use client";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import SubmitButton from "./SubmitButton";
import { signUpAction } from "../_services/actions";
import { HiOutlineUser,HiOutlinePhone ,HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";

interface registerFormInputs {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterForm() {
  const { register, handleSubmit, formState, getValues } =
    useForm<registerFormInputs>();
  const { errors, isSubmitting } = formState;

  async function onSubmitFn(data: any) {
    const result = await signUpAction(data);
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFn)} className="flex flex-col gap-7">
      <div className="grid md:grid-cols-2 gap-7">
        <FormRow
          icon={<HiOutlineUser className="text-gray-500" size={18} />}
          {...register("name", {
            required: "This field is required",
          })}
          error={errors?.name?.message}
          inputType="text"
          labelName="Full Name"
          placeholder="Your name"
        />
        <FormRow
          icon={<HiOutlinePhone  className="text-gray-500" size={18} />}
          {...register("phone", {
            required: "This field is required",
            minLength: {
              value: 11,
              message: "Phone number must be 11 characters",
            },
            maxLength: {
              value: 11,
              message: "Phone number must be 11 characters",
            },
            pattern: {
              value: /^0(10|11|12|15)[0-9]{8}$/,
              message: "Invalid Egyptian phone number",
            },
          })}
          error={errors?.phone?.message}
          inputType="phone"
          labelName="Phone Number"
          placeholder="Enter your phone number"
        />
        <FormRow
          icon={<HiOutlineEnvelope className="text-gray-500" size={18} />}
          {...register("email", { required: "This field is required" })}
          error={errors?.email?.message}
          inputType="email"
          labelName="Email"
          placeholder="your@email.com"
        />
        <FormRow
          icon={<HiOutlineLockClosed className="text-gray-500" size={18} />}
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
        <FormRow
          icon={<HiOutlineLockClosed className="text-gray-500" size={18} />}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) => {
              if (value !== getValues("password")) {
                return "passwordConfirm doesn't match password";
              }
              return true;
            },
          })}
          error={errors?.passwordConfirm?.message}
          inputType="password"
          labelName="Password Confirm"
          placeholder="Confirm your password"
        />
      </div>
      <SubmitButton title="Sign Up" isLoading={isSubmitting} />
    </form>
  );
}
