"use client";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import SubmitButton from "./SubmitButton";
import { signUpAction } from "../_services/actions";
import {
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface registerFormInputs {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const { register, handleSubmit, formState, getValues } =
    useForm<registerFormInputs>();
  const { errors, isSubmitting } = formState;

  async function onSubmitFn(formData: any) {
    const toastId = toast.loading("Creating your account...");
    try {
      const res = await signUpAction(formData);

      if (res?.status === "success") {
        toast.success("Your new account successfully!", {
          id: toastId,
        });
        setTimeout(() => {
          router.push("/fields");
        }, 1500);
      } else {
        toast.error(res?.message || "Failed to signup", {
          id: toastId,
        });
      }
    } catch (err) {
      console.log("Error: ", err);
      toast.error("Something went wrong. Please try again later.", {
        id: toastId,
      });
    }
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
          icon={<HiOutlinePhone className="text-gray-500" size={18} />}
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
