import { makeAutoObservable } from 'mobx';
import CounterStore from './counterStore';

export default class OddStore {
  isOdd = false;
  counterStore: CounterStore;

  constructor(counterStore: CounterStore) {
    makeAutoObservable(this);
    this.counterStore = counterStore;
  }

  isCountOdd(): boolean {
    this.isOdd = this.counterStore.count % 2 !== 0;
    return this.isOdd;
  }
}
