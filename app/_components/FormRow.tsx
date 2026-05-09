"use client"

interface FormRowProps {
  labelName: string;
  inputType: string;
  placeholder?: string;
  error?: string;
  [key: string]: any; 
}

export default function FormRow({ labelName, inputType, placeholder,error,...registerProps }:FormRowProps ) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={`${labelName}-${inputType}`} className="font-semibold text-gray-700">
        {labelName}
      </label>
      <input
        {...registerProps}
        id={`${labelName}-${inputType}`}
        type={inputType || "text"}
        placeholder={placeholder}
        className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
