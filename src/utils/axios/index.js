import axios from 'axios';
import { BASE_URL, BASE_URL_mockapi } from '../../const';

export const axiosGet = (path, params = null) =>
  axios.get(`${BASE_URL}${path}`, params).then(({ data }) => data);

export const axiosGetMockapi = (path) =>
  axios.get(`${BASE_URL_mockapi}${path}`).then(({ data }) => data);

export const axiosDelId = (path, id) => axios.delete(`${path}/${id}`);
export const axiosDel = (path, id) => axios.delete(`${path}/${id}`);

export const axiosPost = (path, item, params = null) =>
  axios
    .post(`${BASE_URL}${path}`, item, params)
    .then(({ data }) => data.resultCode);
