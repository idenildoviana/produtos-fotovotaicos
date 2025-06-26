"use client";

import { Product } from '@/types/product'; 

interface FormCadastroAsCardProps {
  product: Product; 
  onRemoveProduct: (id: string) => void; 
}

export default function FormCadastro({ product, onRemoveProduct }: FormCadastroAsCardProps) {
  const shouldHidePowerCapacity = product.category === 'Material Elétrico' || product.category === 'Estrutura';

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
          {!shouldHidePowerCapacity && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Potência/Capacidade:</span> {product.powerCapacity}
            </p>
          )}
        </div>
        <button
          onClick={() => onRemoveProduct(product.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold mt-4 ml-4 -mr-2 py-1 px-3 rounded text-sm transition-colors duration-200"
        >
          Remover
        </button>
      </div>
    </div>
  );
}