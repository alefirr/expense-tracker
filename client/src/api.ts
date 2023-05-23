import axios from 'axios';
import { type Entity } from './types';

const URL = 'https://localhost:3002/api';

const request = async (
  method: string,
  entity: Entity,
  id?: string,
  data?: any
) =>
  axios({
    method,
    url: `${URL}/${entity}${id ? `/${id}` : ''}`,
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

export { addData, updateData, getData, deleteData };
