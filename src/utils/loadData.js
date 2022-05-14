import { axiosGet } from './axios';

export const loadData = async (setLoading, setData, url, params = {}) => {
  setLoading(true);
  try {
    await axiosGet(url, params).then((data) => setData(data));
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
