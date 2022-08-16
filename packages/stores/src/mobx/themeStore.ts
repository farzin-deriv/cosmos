import { makeAutoObservable } from 'mobx';

export default class ThemeStore {
  isDark = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggle(): void {
    this.isDark = !this.isDark;
  }
}
