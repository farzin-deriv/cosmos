import { makeAutoObservable } from 'mobx';

export class ThemeStore {
  isDark = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggle(): void {
    this.isDark = !this.isDark;
  }
}
