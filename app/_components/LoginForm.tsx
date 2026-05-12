"use client";

import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { loginAction } from "../_services/actions";
import { HiOutlineEnvelope ,HiOutlineLockClosed  } from "react-icons/hi2";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState} = useForm<LoginFormInputs>();
  const {errors,isSubmitting} = formState;

  async function onSubmitFn(formData: any) {
    const toastId = toast.loading("Verifying your credentials...");

    try {
      const res = await loginAction(formData);

      if (res?.status === "success") {
        toast.success("Your login successfully!", {
          id: toastId,
        });
        setTimeout(() => {
          router.push("/fields");
        }, 1500);
      } else {
        toast.error(res?.message || "Failed to login", {
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
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmitFn)}>
      <div className="space-y-5">
        <FormRow
          icon={<HiOutlineEnvelope  className="text-secondary" size={18}/>}
          {...register("email", { required: "This field is required" })}
          error={errors?.email?.message}
          inputType="email"
          labelName="Email"
          placeholder="your@email.com"
        />
        <FormRow
          icon={<HiOutlineLockClosed  className="text-secondary" size={18}/>}
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

        <p className="text-end font-semibold text-brand-green">Forgot Password?</p>
      </div>
      <SubmitButton title="SignIn" isLoading={isSubmitting}/>
    </form>
  );
}
