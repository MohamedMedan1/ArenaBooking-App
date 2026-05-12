"use client";
import FormRow from "./FormRow";
import { HiOutlineUser, HiOutlineEnvelope, HiPhone } from "react-icons/hi2";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
import { updateMeAction } from "../_services/actions";
import toast from "react-hot-toast";

interface editprofileFormInputs {
  name: string;
  phone: string;
  email: string;
}

export default function EditProfileForm({ curData }: { curData: any }) {
  const { register, handleSubmit, formState } = useForm<editprofileFormInputs>({
    defaultValues: curData,
  });
  const { errors, isSubmitting } = formState;

  async function onSubmitFn(formData: any) {
    const toastId = toast.loading("Updating your information...");

    try {
      const res = await updateMeAction(formData);

      if (res?.status === "success") {
        toast.success("Your Personal Information was updated successfully!", {
          id: toastId,
        });
      } else {
        toast.error(res?.message || "Failed to update profile", {
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
      <SubmitButton title="Save Changes" isLoading={isSubmitting} />
    </form>
  );
}
