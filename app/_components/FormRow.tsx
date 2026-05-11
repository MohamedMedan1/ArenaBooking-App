"use client";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { ReactNode, useState } from "react";

interface FormRowProps {
  labelName: string;
  inputType: string;
  placeholder?: string;
  icon: ReactNode;
  error?: string;
  [key: string]: any;
}

export default function FormRow({
  labelName,
  inputType,
  placeholder,
  icon,
  error,
  ...registerProps
}: FormRowProps) {
  const [isVisible, setVisible] = useState<boolean>(false);

  const isPasswordType = inputType === "password";

  const visibleIcon = isVisible ? (
    <HiEyeSlash
      className="text-gray-500 cursor-pointer"
      onClick={() => setVisible((cur) => !cur)}
      size={15}
    />
  ) : (
    <HiEye
      className="text-gray-500 cursor-pointer"
      onClick={() => setVisible((cur) => !cur)}
      size={15}
    />
  );

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={`${labelName}-${inputType}`}
        className="font-semibold text-primary"
      >
        {labelName}
      </label>
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 left-3">{icon}</span>
        <input
          {...registerProps}
          id={`${labelName}-${inputType}`}
          type={isVisible?"text":inputType}
          placeholder={placeholder}
          className="w-full bg-background border-[0.5px] font-medium text-primary border-brand-border rounded-lg px-10 py-3 placeholder:text-sm placeholder:text-secondary placeholder:font-medium"
        />
        {isPasswordType && (
          <span className="absolute top-1/2 -translate-y-1/2 right-3">
            {visibleIcon}
          </span>
        )}
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
