import React, { useEffect } from 'react';
import { AppContext, getData } from './api';
import { MainPage } from './components';
import { ENTITIES } from './types';

const App = () => {
  const [context, setContext] = React.useState({});

  useEffect(() => {
    ENTITIES.forEach(entity => {
      getData(entity).then(data => {
        setContext(prev => {
          if (entity !== 'record') {
            data = data.reduce(
              (acc: any, item: any) => ({
                ...acc,
                [item._id]: item,
              }),
              {}
            );
          }

          return {
            ...prev,
            [entity]: data,
          };
        });
      });
    });
  }, []);

  return (
    <AppContext.Provider value={context}>
      <MainPage />
    </AppContext.Provider>
  );
};

export default App;
