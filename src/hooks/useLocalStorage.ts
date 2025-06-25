// src/hooks/useLocalStorage.ts

import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : initialValue; 
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}

export default useLocalStorage;