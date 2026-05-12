"use client";
import { useRouter } from "next/navigation";
import FormRow from "./FormRow";
import { HiLockClosed } from "react-icons/hi2";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { changePasswordAction } from "../_services/actions";

interface editprofileFormInputs {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export default function ChangePasswordForm() {
  const { register, formState, handleSubmit, getValues } =
    useForm<editprofileFormInputs>();
  const { errors, isSubmitting } = formState;
  const router = useRouter();

  async function onSubmitFn(formData: any) {
    const toastId = toast.loading("Updating your Password...");

    try {
      const res = await changePasswordAction(formData);

      if (res?.status === "success") {
        toast.success("Your Password was updated successfully!", {
          id: toastId,
        });
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      } else {
        toast.error(res?.message || "Failed to change password", {
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
    <form className="space-y-7" onSubmit={handleSubmit(onSubmitFn)}>
      <div className="space-y-5">
        <FormRow
          {...register("currentPassword", {
            required: "This field is required",
          })}
          error={errors.currentPassword?.message}
          inputType="password"
          labelName="Current Password"
          icon={<HiLockClosed size={18} className="text-gray-700" />}
          placeholder="Enter your current password"
        />
        <FormRow
          {...register("newPassword", {
            required: "This field is required",
          })}
          error={errors.newPassword?.message}
          inputType="password"
          labelName="New Password"
          icon={<HiLockClosed size={18} className="text-gray-700" />}
          placeholder="Enter your new password"
        />
        <FormRow
          {...register("newPasswordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("newPassword") ||
              "New Password must be equal to newPasswordConfirm",
          })}
          error={errors.newPasswordConfirm?.message}
          inputType="password"
          labelName="Confirm New Password"
          icon={<HiLockClosed size={18} className="text-gray-700" />}
          placeholder="Confirm your new password"
        />
      </div>
      <SubmitButton title="Update Password" isLoading={isSubmitting} />
    </form>
  );
}
