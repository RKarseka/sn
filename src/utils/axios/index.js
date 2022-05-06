import axios from 'axios';
import { BASE_URL } from '../../const';

export const axiosGet = (path) =>
  axios.get(`${BASE_URL}${path}`).then(({ data }) => data);

export const axiosDelId = (path, id) => axios.delete(`${path}/${id}`);

export const axiosPost = (path, item) =>
  axios.post(path, item).then(({ data }) => data.id);
