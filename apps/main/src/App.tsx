import Counter from '@cosmos/counter/src/App';
import { observer, useStore } from '@cosmos/stores';
import React, { ReactElement } from 'react';

const App = (): ReactElement => {
  return <ObserverContent />;
};

const Content = (): ReactElement => {
  const { themeStore } = useStore();

  return (
    <div style={{ padding: 20, backgroundColor: 'lime' }}>
      <h1>Main App</h1>
      <h2>theme: {themeStore.isDark ? 'dark' : 'light'}</h2>
      <Counter />
    </div>
  );
};

const ObserverContent = observer(Content);

export default App;
