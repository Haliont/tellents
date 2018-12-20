import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://floating-atoll-63112.herokuapp.com/api/v1/',
});

const FindService = {
  async getJobs(params = {}) {
    const response = await axiosInstance({
      method: 'GET',
      url: '/jobs/search',
      params,
    });

    return response.data;
  },

  async getTalents(params = {}) {
    const response = await axiosInstance({
      method: 'GET',
      url: '/tellents/search',
      params,
    });

    return response.data;
  },
};


export default FindService;
