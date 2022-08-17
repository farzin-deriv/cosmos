import { Button } from '@cosmos/components';
import { observer, useCounterStore, useOddStore, useThemeStore } from '@cosmos/stores';
import React, { ReactElement } from 'react';

const App = (): ReactElement => {
  return <ObserverContent />;
};

const Content = (): ReactElement => {
  const counter = useCounterStore();
  const odd = useOddStore();
  const theme = useThemeStore();

  return (
    <div style={{ padding: 20, backgroundColor: 'tomato' }}>
      <h1>Counter App</h1>
      <h2>{counter.count}</h2>
      <Button title="increase" onClick={() => counter.increase()} />
      <Button title="decrease" onClick={() => counter.decrease()} />
      <h2>is odd: {odd.isOdd ? 'yes' : 'no'}</h2>
      <h2>theme: {theme.isDark ? 'dark' : 'light'}</h2>
      <Button title="toggle theme" onClick={() => theme.toggle()} />
    </div>
  );
};

const ObserverContent = observer(Content);

export default App;
