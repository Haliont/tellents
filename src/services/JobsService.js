// import cookie from 'js-cookie';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/',
});

// const buildHeaders = () => JSON.parse(cookie.get('authHeaders') || '{}');

const JobsService = {
  async getSkills(page = 1, query = {}) {
    const response = await axiosInstance({
      method: 'GET',
      url: '/user',
      params: {
        page,
        q: query,
      },
      // headers: buildHeaders(),
    });

    return response;
  },
};


export default JobsService;
