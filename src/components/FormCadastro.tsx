
"use client";

import { Product } from '@/types/product';

interface FormCadastroProps {
  product: Product; 
  onRemoveProduct: (id: string) => void;
}

export default function FormCadastro({ product, onRemoveProduct }: FormCadastroProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-2 border border-blue-300">
      <div className="sm:flex justify-between p-4 items-center">
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
          className="bg-red-500 mt-4 sm:mt-0 sm:ml-5 sm:-mr-4 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm transition-colors duration-200 " 
        >
          Remover
        </button>
      </div>
    </div>
  );
}