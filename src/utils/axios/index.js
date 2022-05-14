import axios from 'axios';
import { BASE_URL, BASE_URL_mockapi } from '../../const';

export const axiosGet = (path) =>
  axios.get(`${BASE_URL}${path}`).then(({ data }) => data);

export const axiosGetMockapi = (path) =>
  axios.get(`${BASE_URL_mockapi}${path}`).then(({ data }) => data);

export const axiosDelId = (path, id) => axios.delete(`${path}/${id}`);

export const axiosPost = (path, item) =>
  axios.post(path, item).then(({ data }) => data.id);
