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
        className="font-bold text-xs uppercase tracking-widest text-slate-300"
      >
        {labelName}
      </label>
      <div className="relative group">
        <span className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 group-focus-within:text-primary transition-colors">{icon}</span>
        <input
          {...registerProps}
          id={`${labelName}-${inputType}`}
          type={isVisible?"text":inputType}
          placeholder={placeholder}
          className="w-full bg-secondary-dark/50 border border-border-alpha font-medium text-foreground rounded-xl px-12 py-4 placeholder:text-sm placeholder:text-slate-500 placeholder:font-medium focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
        />
        {isPasswordType && (
          <span className="absolute top-1/2 -translate-y-1/2 right-4">
            {visibleIcon}
          </span>
        )}
      </div>
      {error && <span className="text-red-500 text-xs font-bold mt-1">{error}</span>}
    </div>
  );
}
