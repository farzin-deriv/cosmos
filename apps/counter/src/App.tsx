import { Button } from '@cosmos/components';
import { observer, useStore } from '@cosmos/stores';
import React, { ReactElement } from 'react';

const App = (): ReactElement => {
  return <ObserverContent />;
};

const Content = (): ReactElement => {
  const { counterStore, themeStore, oddStore } = useStore();

  return (
    <div style={{ padding: 20, backgroundColor: 'tomato' }}>
      <h1>Counter App</h1>
      <h2>{counterStore.count}</h2>
      <Button title="increase" onClick={() => counterStore.increase()} />
      <Button title="decrease" onClick={() => counterStore.decrease()} />
      <h2>is odd: {oddStore.isOdd ? 'yes' : 'no'}</h2>
      <Button title="check if count is odd" onClick={() => oddStore.isCountOdd()} />
      <h2>theme: {themeStore.isDark ? 'dark' : 'light'}</h2>
      <Button title="toggle theme" onClick={() => themeStore.toggle()} />
    </div>
  );
};

const ObserverContent = observer(Content);

export default App;
