import { createContext, useContext } from 'react';
import { CounterStore } from './counter';
import { OddStore } from './odd';
import { ThemeStore } from './theme';

type TStore = {
  counterStore: CounterStore;
  oddStore: OddStore;
  themeStore: ThemeStore;
};

const counterStore = new CounterStore();
const oddStore = new OddStore(counterStore);
const themeStore = new ThemeStore();

const store: TStore = {
  counterStore,
  oddStore,
  themeStore,
};

export const StoresContext = createContext(store);

export const useStore = () => useContext(StoresContext);
