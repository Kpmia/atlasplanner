import axios from 'axios'

export const atlasAPI = axios.create({ baseURL: 'https://atlasplanner.ue.r.appspot.com' });
