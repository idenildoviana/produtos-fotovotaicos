// src/components/common/InputField.tsx

"use client";

import React from 'react';

// Definir a interface para as props do InputField
interface InputFieldProps {
  label: string; // O texto do rótulo
  id: string; // O ID para o input e htmlFor da label
  value: string; // O valor atual do input (controlado pelo estado do pai)
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função de callback para a mudança de valor
  placeholder?: string; // Placeholder opcional para o input
  type?: string; // Tipo do input (default é 'text')
  error?: string; // Mensagem de erro a ser exibida (opcional)
}

export default function InputField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text', // Define 'text' como padrão se não for fornecido
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
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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