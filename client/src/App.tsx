import React, { useEffect } from 'react';
import { AppContext, getData } from './api';
import { MainPage } from './components';
import { ENTITIES } from './constants';

const App = () => {
  const [context, setContext] = React.useState({ mapById: {} });

  useEffect(() => {
    ENTITIES.forEach(entity => {
      getData(entity).then(data => {
        setContext(prev => {
          const entityById = data.reduce(
            (acc: any, item: any) => ({
              ...acc,
              [item._id]: item,
            }),
            {}
          );

          return {
            ...prev,
            [entity]: data,
            mapById: {
              ...prev.mapById,
              [entity]: entityById,
            },
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
