import { useContext } from 'react';
import { StoresContext } from '../stores';

export const useCounterStore = () => {
  const { counterStore } = useContext(StoresContext);

  return counterStore;
};
