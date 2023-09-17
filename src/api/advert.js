import axios from 'axios';

const advertsInstance = axios.create({
  baseURL: 'https://65017805736d26322f5bbb97.mockapi.io/api',
});
export const limit = 12;

export const getAllAdverts = async (page = 1) => {
  const { data } = await advertsInstance.get(
    `/adverts?limit=${limit}&page=${page}`
  );
  return data;
};
export const updateAdvert = async (id, updates) => {
  const { data } = await advertsInstance.put(`/adverts/${id}`, updates);

  return data;
};
