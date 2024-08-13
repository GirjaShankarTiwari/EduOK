import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://developer.piradius.online/PiZeroApi_Beta/ver1',
  timeout: 10000,
});

apiClient.interceptors.response.use(
  function (response) {
    //  console.log({response: Object.keys(response)});
    return response;
  },
  function (error) {
    console.log({error});
    console.log({error_res: Object.keys(error)});
    console.log({code: error?.code, message: error?.message});
    return error;
  },
);

export default apiClient;
