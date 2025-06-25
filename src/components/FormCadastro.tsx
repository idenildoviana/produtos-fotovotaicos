// src/components/ProductCard.tsx

"use client";

import { Product } from '@/types/product';

// Definir a interface para as props do ProductCard
interface FormCadastroProps {
  product: Product; // Recebe um objeto Product completo
  onRemoveProduct: (id: string) => void; // Função para remover o produto, recebe o ID
}

export default function FormCadastro({ product, onRemoveProduct }: FormCadastroProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Categoria:</span> {product.category}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Fabricante:</span> {product.manufacturer}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Potência/Capacidade:</span> {product.powerCapacity}
          </p>
        </div>
        <button
          onClick={() => onRemoveProduct(product.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors duration-200"
        >
          Remover
        </button>
      </div>
    </div>
  );
}