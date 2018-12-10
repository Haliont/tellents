import axios from 'axios';
import cookie from 'js-cookie';

export default (function http() {
  const headers = JSON.parse(cookie.get('authHeaders'));

  const instance = axios.create({
    baseURL: 'https://floating-atoll-63112.herokuapp.com/api',
    headers,
  });

  // instance.interceptors.response.use(null, (error) => {
  //   if (error.response.status === 401) {
  //     store.dispatch(signOut());
  //   }
  //   return Promise.reject(error);
  // });

  return instance;
}());
