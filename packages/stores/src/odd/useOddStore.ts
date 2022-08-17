import { useContext } from 'react';
import { StoresContext } from '../stores';

export const useOddStore = () => {
  const { oddStore } = useContext(StoresContext);

  return oddStore;
};
