import axios from 'axios'


export const atlasAPI = axios.create({ baseURL: 'https://atlasplanner.ue.r.appspot.com' });

export const emailAPI = axios.create({ baseURL: 'https://atlasplanner-email-dot-atlasplanner.ue.r.appspot.com' });

export const csvAPI = axios.create({ baseURL: 'https://bulk-uploads-dot-atlasplanner.ue.r.appspot.com' });

