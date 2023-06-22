import instance from '../axios_instance';

export const getUsers = async (pagesize: number) => {
  return await instance
    .get('/users', {
      params: {
        pagesize: pagesize,
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
