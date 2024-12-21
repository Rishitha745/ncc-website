import React from "react";

const FormField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  error,
}) => {
  const InputTag = type === "textarea" ? "textarea" : "input";

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <InputTag
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } bg-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
