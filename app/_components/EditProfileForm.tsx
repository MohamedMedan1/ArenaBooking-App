"use client";
import FormRow from "./FormRow";
import { HiOutlineUser, HiOutlineEnvelope, HiPhone } from "react-icons/hi2";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";

interface editprofileFormInputs {
  name: string;
  phone: string;
  email: string;
}

export default function EditProfileForm() {
  const { register, formState } = useForm<editprofileFormInputs>();
  const { errors } = formState;

  return (
    <form className="space-y-7">
      <div className="space-y-5">
        <FormRow
          {...register("name", {
            required: "This field is required",
          })}
          error={errors.name?.message}
          inputType="text"
          labelName="Name"
          icon={<HiOutlineUser size={20} className="text-secondary" />}
          placeholder="Enter your fullname"
        />
        <FormRow
          {...register("email", {
            required: "This field is required",
          })}
          error={errors.email?.message}
          inputType="email"
          labelName="Email"
          icon={<HiOutlineEnvelope size={20} className="text-secondary" />}
          placeholder="Enter your email address"
        />
        <FormRow
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
          error={errors.phone?.message}
          inputType="phone"
          labelName="Phone Number"
          icon={<HiPhone size={18} className="text-secondary" />}
          placeholder="Enter your phone number"
        />
      </div>
      <SubmitButton title="Save Changes" isLoading={false} />
    </form>
  );
}
