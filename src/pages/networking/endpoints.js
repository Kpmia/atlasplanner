import axios from 'axios'

export const atlasAPI = axios.create({ baseURL: 'http://localhost:3001' });
