import { createContext, useContext } from 'react';
import CounterStore from './counterStore';
import OddStore from './oddStore';
import ThemeStore from './themeStore';

export type TStore = {
  counterStore: CounterStore;
  oddStore: OddStore;
  themeStore: ThemeStore;
};

const counterStore = new CounterStore();
const oddStore = new OddStore(counterStore);
const themeStore = new ThemeStore();

export const store: TStore = {
  counterStore,
  oddStore,
  themeStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
