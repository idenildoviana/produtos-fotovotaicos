"use client";

import useLocalStorage from '@/hooks/useLocalStorage';
import { PRODUCT_CATEGORIES } from '@/utils/constants';
import { Product } from '@/types/product';

import Header from '@/components/Header';
import FormProduto from '@/components/FormProduto';
import ListaProdutos from '@/components/ListaProdutos';
import Footer from '@/components/Footer';

export default function Home() {
  const [products, setProducts] = useLocalStorage<Product[]>('photovoltaic_products', []);

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const productWithId: Product = { ...newProduct, id: Date.now().toString() };
    setProducts((prevProducts) => [...prevProducts, productWithId]);
  };

  const handleRemoveProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="">
      <Header />


      <div className="grid container mx-auto p-4 max-w-5xl mt-10 grid-cols-1 md:grid-cols-2 gap-8">
        <FormProduto
          onProductAdded={handleAddProduct}
          categories={PRODUCT_CATEGORIES}
        />

        <ListaProdutos
          products={products}
          onRemoveProduct={handleRemoveProduct}
          categories={PRODUCT_CATEGORIES}
        />
      </div>

  
  <Footer/>
    </div>
  );
}