import { InputProps } from "@/app/_types";

function Input({
  type,
  id,
  label,
  name,
  placeholder,
  hasCheckbox = false,
  checkboxId,
  checkboxName,
  required = false,
  className = "col-span-full",
}: InputProps) {
  return (
    <div className={`${className} flex flex-col gap-1`}>
      <label htmlFor={id} className='text-sm text-gray-300 sm:text-base'>
        {label}
      </label>
      {type !== "textarea" ? (
        <>
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className='w-full rounded-sm p-2 bg-transparent border border-gray-700 text-gray-300 placeholder:text-sm'
            required={required}
          />
          {hasCheckbox && (
            <div className='flex gap-1'>
              <input id={checkboxId} type='checkbox' name={checkboxId} />
              <label htmlFor={checkboxId} className='text-sm'>
                {checkboxName}
              </label>
            </div>
          )}
        </>
      ) : (
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className='w-full rounded-sm p-2 bg-transparent border border-gray-700 text-gray-300 placeholder:text-sm'
          required={required}
        />
      )}
    </div>
  );
}

export default Input;
