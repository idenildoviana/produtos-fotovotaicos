"use client";

import { useState } from 'react';
import { Product } from '@/types/product';
import TabsCategoria from './TabsCategoria'; 
import ProductCard from './FormCadastro';

interface ListaProdutosProps {
  products: Product[];
  onRemoveProduct: (id: string) => void;
  categories: string[];
}

export default function ListaProdutos({ products, onRemoveProduct, categories }: ListaProdutosProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const allCategories = ['Todos', ...categories]; // Adiciona "Todos" para as tabs

  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
       <h2 className="text-2xl font-bold mb-4 text-gray-800">Produtos Cadastrados</h2>
      {products.length === 0 ? (
        <div>

        
        <p className="text-center text-gray-500 text-lg">Nenhum produto cadastrado ainda.</p>
        </div>
      ) : (
        <>
          <TabsCategoria
            categories={allCategories} 
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory} 
          />

          {filteredProducts.length === 0 ? (
            <div>
            <p className="text-center ml-10 text-gray-500 mt-8">Nenhum produto encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onRemoveProduct={onRemoveProduct}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}