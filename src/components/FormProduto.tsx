// src/components/products/ProductForm.tsx

"use client";

import { useState } from 'react';

// Importe os novos componentes de formulário
import InputField from '@/components/common/InputField';
// import SelectField from '@/components/common/SelectField';
import SelectField from './common/SelectField';

// Definir uma interface para o estado de erros
interface FormErrors {
  productName?: string;
  category?: string;
  manufacturer?: string;
  powerCapacity?: string;
}

// Definir a interface para as props do componente ProductForm
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

      // Limpa o formulário após o cadastro
      setProductName('');
      setCategory(categories[0] || '');
      setManufacturer('');
      setPowerCapacity('');
      setErrors({});
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        {/* Usando o InputField reutilizável */}
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

        {/* Usando o InputField reutilizável */}
        <InputField
          label="Fabricante"
          id="manufacturer"
          value={manufacturer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManufacturer(e.target.value)}
          placeholder="Ex: Canadian Solar"
          error={errors.manufacturer}
        />

        {/* Usando o InputField reutilizável */}
        <InputField
          label="Potência/Capacidade"
          id="powerCapacity"
          value={powerCapacity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPowerCapacity(e.target.value)}
          placeholder="Ex: 550W, 5kW"
          error={errors.powerCapacity}
        />

        <div className="flex items-center justify-between mt-6"> {/* Ajuste de margem top */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cadastrar Produto
          </button>
        </div>
      </form>
    </div>
  );
}