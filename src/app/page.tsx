// src/app/page.tsx

"use client";

import useLocalStorage from '@/hooks/useLocalStorage';
import { PRODUCT_CATEGORIES } from '@/utils/constants';
import { Product } from '@/types/product';

// Importe os novos componentes
import Header from '@/components/Header'; // Você precisará criar este (próximo passo ou simples h1)
import ProductForm from '@/components/FormProduto';
import ProductList from '@/components/ListaProdutos';

export default function Home() {
  const [products, setProducts] = useLocalStorage<Product[]>('photovoltaic_products', []);

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    // Adiciona um ID único para o produto (ex: usando timestamp ou UUID)
    const productWithId: Product = { ...newProduct, id: Date.now().toString() };
    setProducts((prevProducts) => [...prevProducts, productWithId]);
  };

  const handleRemoveProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl"> {/* Ajustado max-w para melhor centralização */}
      {/* Componente Header */}
      <Header />

      {/* Formulário de Cadastro de Produto */}
      <ProductForm onAddProduct={handleAddProduct} categories={PRODUCT_CATEGORIES} />

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Produtos Cadastrados</h2>

      {/* Lista de Produtos */}
      <ProductList
        products={products}
        onRemoveProduct={handleRemoveProduct}
        categories={PRODUCT_CATEGORIES}
      />

      <p className="mt-8 text-center text-gray-500">
        Desenvolvido para Teste Técnico - Desenvolvedor Frontend Júnior
      </p>
    </div>
  );
}