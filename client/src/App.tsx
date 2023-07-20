import React, { useEffect } from 'react';
import { AppContext, getData } from './api';
import { MainPage } from './components';
import { ENTITIES } from './constants';
import './App.css';

const App = () => {
  const updateAllData = () => {
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
  };

  const [context, setContext] = React.useState({ mapById: {}, updateAllData });

  useEffect(() => {
    updateAllData();
  }, []);

  return (
    <AppContext.Provider value={context}>
      <MainPage />
    </AppContext.Provider>
  );
};

export default App;
