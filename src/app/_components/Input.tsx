import React from "react";

type inputTypes = {
  type?: string;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

function Input({
  type,
  id,
  label,
  name,
  placeholder,
  required = false,
  className = "col-span-full",
}: inputTypes) {
  return (
    <div className={`${className} grid gap-1`}>
      <label htmlFor={id} className='text-sm text-gray-300 sm:text-base'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='w-full rounded-sm p-2 bg-transparent border border-gray-700 text-gray-300 placeholder:text-sm'
        required={required}
      />
    </div>
  );
}

export default Input;
