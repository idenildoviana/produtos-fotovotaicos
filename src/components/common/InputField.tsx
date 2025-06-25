"use client";

import React from 'react';

interface InputFieldProps {
  label: string; 
  id: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  placeholder?: string; 
  type?: string; 
  error?: string; 
}

export default function InputField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text', 
  error,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        className={`shadow appearance-none border-2 border-blue-300 rounded-lg w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : ''
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
}