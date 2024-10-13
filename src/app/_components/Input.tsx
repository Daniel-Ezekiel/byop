import React from "react";

type inputTypes = {
  type?: string;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
};

function Input({
  type,
  id,
  label,
  name,
  placeholder,
  required = false,
}: inputTypes) {
  return (
    <div className='grid gap-1'>
      <label htmlFor={id} className='text-sm text-gray-300 sm:text-base'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='rounded-sm p-2 bg-transparent border border-gray-700 text-gray-300 placeholder:text-sm'
        required={required}
      />
    </div>
  );
}

export default Input;
