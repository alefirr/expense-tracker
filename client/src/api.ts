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
  }).then(res => res.data);

const addData = async (entity: Entity, data: any) =>
  await request('post', entity, undefined, data);

const updateData = async (entity: Entity, id: string, data: any) =>
  await request('put', entity, id, data);

const getData = (entity: Entity, id?: string) => request('get', entity, id);

const deleteData = (entity: Entity, id: string) =>
  request('delete', entity, id);

export { addData, updateData, getData, deleteData };
