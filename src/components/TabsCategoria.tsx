// src/components/products/CategoryTabs.tsx

"use client";

import React from 'react';

interface TabsCategoriaProps {
  categories: string[]; // Lista de todas as categorias disponíveis
  activeCategory: string; // A categoria atualmente selecionada
  onSelectCategory: (category: string) => void; // Função para mudar a categoria ativa
}

export default function TabsCategoria({ categories, activeCategory, onSelectCategory }: TabsCategoriaProps) {
  return (
    <div className="flex flex-wrap border-b border-gray-200 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)} // Chama a função do pai para mudar a categoria
          className={`py-2 px-4 text-sm font-medium focus:outline-none transition-colors duration-200
            ${activeCategory === cat
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-600 hover:text-blue-500 hover:border-gray-300'
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}