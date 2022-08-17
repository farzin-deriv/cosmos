import { useContext } from 'react';
import { StoresContext } from '../stores';

export const useThemeStore = () => {
  const { themeStore } = useContext(StoresContext);

  return themeStore;
};
