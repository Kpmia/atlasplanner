import Axios from "axios";
import { atlasAPI } from "../endpoints";

export const SessionManager = {

  getAllSessions: async (userToken, orgId, eventId) => {
    const config = {};
    try {
      return await atlasAPI.get(
        '/sessions/' + orgId  + '/' + eventId,
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  getSession: async (orgId, eventId, sessionId) => {
    const config = {};
    try {
      return await atlasAPI.get(
        '/sessions/' + orgId  + '/' + eventId + '/' + sessionId,
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  createSession: async (userToken, orgId, eventId, session) => {
    const config = {};
    try {
      return await atlasAPI.post(
        '/sessions/' + orgId + '/' + eventId,
        session,
        config
      )
    } catch (error) {
        return null;
    }
  },

  deleteSession: async (userToken, orgId, eventId, sessionId, key) => {
    const config = {
      headers: {
        data: key
      }
    };
    try {
      return await atlasAPI.delete(
        '/sessions/' + orgId + '/' + eventId + '/' + sessionId,
        config
      )
    } catch (error) {
        return null;
    }
  },

  updateSession: async (userToken, orgId, eventId, sessionId, session) => {
    const config = {};
    try {
      return await atlasAPI.put(
        '/sessions/' + orgId + '/' + eventId + '/' + sessionId,
        session,
        config
      )
    } catch (error) {
        return null;
    }
  },
}
