import axios from 'axios';

const demoApi = axios.create({baseURL: 'localhost:8080/api/rest/v1/'});

export default demoApi;
export {demoApi};