"use client";
import FormRow from "./FormRow";
import { HiLockClosed } from "react-icons/hi2";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";

interface editprofileFormInputs {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export default function ChangePasswordForm() {
  const { register, formState } = useForm<editprofileFormInputs>();
  const { errors } = formState;

  return (
    <form className="space-y-7">
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
            validate: (value) => {
              return value
            }
          })}
          error={errors.newPasswordConfirm?.message}
          inputType="password"
          labelName="Confirm New Password"
          icon={<HiLockClosed size={18} className="text-gray-700" />}
          placeholder="Confirm your new password"
        />
      </div>
      <SubmitButton title="Update Password" isLoading={false} />
    </form>
  );
}
