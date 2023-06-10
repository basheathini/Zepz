import instance from '../axios_instance';

export const getUsers = async () => {
  return await instance
    .get('/users', {
      params: {
        pagesize: 20,
        order: 'desc',
        sort: 'reputation',
        site: 'stackoverflow',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};
