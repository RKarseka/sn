import axios from 'axios';
import { BASE_URL } from '../const';
import { axiosDel, axiosDelId, axiosGet, axiosPost } from './axios';

export const loadData = async (setLoading, setData, url, params = {}) => {
  setLoading(true);
  try {
    await axiosGet(url, params).then((data) => setData(data));
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const handeleAPIRequest = async (
  type,
  setLoading,
  handelResponse,
  path,
  item
) => {
  const option = {
    withCredentials: true,
  };
  const key = {
    headers: { 'API-KEY': '2e948e01-3fcf-4d73-8215-215eb8c32a95' },
  };

  setLoading(true);

  try {
    switch (type) {
      case 'del':
        await axios
          .delete(BASE_URL + path, { ...option, ...key })
          .then(({ data }) => handelResponse(data.resultCode));
        break;
      case 'post':
        await axios
          .post(BASE_URL + path, item, { ...option, ...key })
          .then(({ data }) => handelResponse(data.resultCode));
        break;
      default:
        console.log('incorrect request type');
        break;
    }
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
};
