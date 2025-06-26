"use client";

import useLocalStorage from '@/hooks/useLocalStorage';
import { PRODUCT_CATEGORIES } from '@/utils/constants';
import { Product } from '@/types/product';
import FormProduto from '@/components/FormProduto';
import ListaProdutos from '@/components/ListaProdutos';
import Footer from '@/components/footer';
import Header from '@/components/Header';


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
    <div> 
      <div>
        <Header />
        </div>

      <div className='container mx-auto md:flex justify-center  p-8 md:p-10'  >
      <FormProduto onAddProduct={handleAddProduct} categories={PRODUCT_CATEGORIES} />       
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