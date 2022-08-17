import { makeAutoObservable } from 'mobx';
import { CounterStore } from '../counter';

export class OddStore {
  counterStore: CounterStore;

  constructor(counterStore: CounterStore) {
    makeAutoObservable(this);
    this.counterStore = counterStore;
  }

  get isOdd(): boolean {
    return this.counterStore.count % 2 !== 0;
  }
}
