import { makeAutoObservable } from 'mobx';

export default class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}
