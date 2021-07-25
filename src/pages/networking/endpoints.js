import axios from 'axios'

export const atlasAPI = axios.create({ baseURL: 'http://localhost:8080' });

export const emailAPI = axios.create({ baseURL: 'https://atlasplanner-email-dot-atlasplanner.ue.r.appspot.com' });
