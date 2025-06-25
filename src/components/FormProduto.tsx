"use client";

import { useState } from 'react';
import InputField from '@/components/common/InputField';
import SelectField from './common/SelectField';

interface FormErrors {
  productName?: string;
  category?: string;
  manufacturer?: string;
  powerCapacity?: string;
}

interface FormProdutoProps {
  onAddProduct: (product: {
    name: string;
    category: string;
    manufacturer: string;
    powerCapacity: string;
  }) => void;
  categories: string[];
}

export default function FormProduto({ onAddProduct, categories }: FormProdutoProps) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState(categories[0] || '');
  const [manufacturer, setManufacturer] = useState('');
  const [powerCapacity, setPowerCapacity] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!productName.trim()) newErrors.productName = 'Nome do produto é obrigatório.';
    if (!category.trim()) newErrors.category = 'Categoria é obrigatória.';
    if (!manufacturer.trim()) newErrors.manufacturer = 'Fabricante é obrigatório.';
    if (!powerCapacity.trim()) newErrors.powerCapacity = 'Potência/Capacidade é obrigatória.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const newProduct = {
        name: productName,
        category,
        manufacturer,
        powerCapacity,
      };
      onAddProduct(newProduct);

      setProductName('');
      setCategory(categories[0] || '');
      setManufacturer('');
      setPowerCapacity('');
      setErrors({});
    }
  };

  return (
    <div className="bg-white text-[#0F3B5F] p-6 md:mr-10 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl text-[#0F3B5F] font-bold mb-4">Cadastrar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nome do Produto"
          id="productName"
          value={productName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
          placeholder="Ex: Painel Solar 550W"
          error={errors.productName}
        />

        <SelectField
          label="Categoria"
          id="category"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          options={categories}
          error={errors.category}
        />

        <InputField
          label="Distribuidor"
          id="manufacturer"
          value={manufacturer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManufacturer(e.target.value)}
          placeholder="Ex: JNG/ADIAS"
          error={errors.manufacturer}
        />

        <InputField
          label="Potência/Capacidade"
          id="powerCapacity"
          value={powerCapacity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPowerCapacity(e.target.value)}
          placeholder="Ex: 550W, 5KWp"
          error={errors.powerCapacity}
        />

        <div className=" items-center justify-center text-center mt-6"> 
          <button
            type="submit"
            className="  bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cadastrar Produto
          </button>
        </div>
      </form>
    </div>
  );
}