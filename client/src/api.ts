import axios from 'axios';
import { type Entity } from './types';
import { createContext } from 'react';

const URL = 'http://localhost:3002/api';

const request = async (
  method: string,
  entity: Entity,
  id?: string,
  data?: any
) =>
  axios({
    method,
    url: `${URL}/${entity}/${id ?? ''}`,
    data,
  })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });

const addData = (entity: Entity, data: any) =>
  request('post', entity, undefined, data);

const updateData = (entity: Entity, id: string, data: any) =>
  request('put', entity, id, data);

const getData = (entity: Entity, id?: string) => request('get', entity, id);

const deleteData = (entity: Entity, id: string) =>
  request('delete', entity, id);

type AppContextType = Partial<Record<Entity, Array<Record<string, any>>>> & {
  mapById: Partial<Record<string, any>>;
};

const AppContext = createContext<AppContextType>({ mapById: {} });

export { addData, updateData, getData, deleteData, AppContext };
