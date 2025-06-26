"use client";

import { useState } from 'react';

import InputField from '@/components/common/InputField';
import SelectField from '@/components/common/SelectField';

interface FormErrors {
  productName?: string;
  category?: string;
  manufacturer?: string;
  powerCapacity?: string;
}

interface FormProdutoProps {
  onProductAdded: (product: {
    name: string;
    category: string;
    manufacturer: string;
    powerCapacity: string;
  }) => void;
  categories: string[];
}

export default function FormProduto({ onProductAdded, categories }: FormProdutoProps) {
  const [isFormContentVisible, setIsFormContentVisible] = useState(false);

  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState(categories[0] || '');
  const [manufacturer, setManufacturer] = useState('');
  const [powerCapacity, setPowerCapacity] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const shouldHidePowerCapacity = category === 'Material Elétrico' || category === 'Estrutura';

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!productName.trim()) newErrors.productName = 'Nome do produto é obrigatório.';
    if (!category.trim()) newErrors.category = 'Categoria é obrigatória.';
    if (!manufacturer.trim()) newErrors.manufacturer = 'Fabricante é obrigatório.';

    if (!shouldHidePowerCapacity && !powerCapacity.trim()) {
      newErrors.powerCapacity = 'Potência/Capacidade é obrigatória.';
    }
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
        powerCapacity: shouldHidePowerCapacity ? '' : powerCapacity,
      };
      onProductAdded(newProduct);

      setProductName('');
      setCategory(categories[0] || '');
      setManufacturer('');
      setPowerCapacity('');
      setErrors({});
      setIsFormContentVisible(false); 
    }
  };

  const handleCancel = () => {
    setProductName('');
    setCategory(categories[0] || '');
    setManufacturer('');
    setPowerCapacity('');
    setErrors({});
    setIsFormContentVisible(false); 
  };

  return (
    <div className="bg-white text-[#0F3B5F] p-6 md:mr-10 rounded-lg shadow-md mb-8 min-h-[300px] flex flex-col">
      <h2 className="text-2xl text-[#0F3B5F] font-bold mb-4">Cadastrar Novo Produto</h2>

      {!isFormContentVisible ? (
        <div className="flex-grow flex justify-center items-center"> 
          <button
            onClick={() => setIsFormContentVisible(true)}
            className="bg-[#106CB8] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Novo Produto
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
          <div> 
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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setCategory(e.target.value);
                if (errors.powerCapacity && (e.target.value === 'Material Elétrico' || e.target.value === 'Estrutura')) {
                  setErrors(prevErrors => {
                    const newErrors = { ...prevErrors };
                    delete newErrors.powerCapacity;
                    return newErrors;
                  });
                }
              }}
              options={categories}
              error={errors.category}
            />

            <InputField
              label="Fabricante"
              id="manufacturer"
              value={manufacturer}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManufacturer(e.target.value)}
              placeholder="Ex: Canadian Solar"
              error={errors.manufacturer}
            />

            {!shouldHidePowerCapacity && (
              <InputField
                label="Potência/Capacidade"
                id="powerCapacity"
                value={powerCapacity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPowerCapacity(e.target.value)}
                placeholder="Ex: 550W, 5kW"
                error={errors.powerCapacity}
              />
            )}
          </div> 

          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Cadastrar Produto
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-4"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}