// src/components/common/SelectField.tsx

"use client";

import React from 'react';

// Definir a interface para as props do SelectField
interface SelectFieldProps {
  label: string; // O texto do rótulo
  id: string; // O ID para o select e htmlFor da label
  value: string; // O valor selecionado atual
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Função de callback para a mudança de valor
  options: string[]; // Array de strings com as opções do dropdown
  error?: string; // Mensagem de erro a ser exibida (opcional)
}

export default function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  error,
}: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}:
      </label>
      <div className="relative">
        <select
          id={id}
          className={`block appearance-none w-full bg-white border px-3 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${
            error ? 'border-red-500' : ''
          }`}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Ícone da seta do dropdown (Tailwind CSS) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15 9.707V7.293l-4.293 4.293-4.293-4.293z" />
          </svg>
        </div>
      </div>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
}