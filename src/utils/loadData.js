import { axiosGet } from './axios';

export const loadData = async (setLoading, setData, url) => {
  setLoading(true);
  try {
    await axiosGet(url).then((data) => setData(data));
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
