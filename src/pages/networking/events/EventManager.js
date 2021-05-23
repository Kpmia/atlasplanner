import Axios from "axios";
import { atlasAPI } from "../endpoints";

export const EventManager = {

  getAllEvents: async (userToken, orgId) => {
    const config = {
      headers: {
        "Authorization": userToken,
      },
    };
    try {
      return await atlasAPI.get(
        '/events/' + orgId,
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  getEvent: async (userToken, orgId, eventId) => {
    const config = {
      headers: {
        "Authorization": userToken,
      },
    };
    try {
      return await atlasAPI.get(
        '/events/' + orgId + '/' + eventId,
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  createEvent: async (userToken, orgId, event) => {
    const config = {
      headers: {
        "Authorization": userToken,
      },
    };
    try {
      return await atlasAPI.post(
        '/events/' + orgId,
        event,
        config
      )
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  deleteEvent: async (userToken, orgId, eventId) => {
    try {
      const config = {
        headers: {
          "Authorization": "Bearer " + userToken,
        },
      };
      return await atlasAPI.delete(
        '/events/' + orgId + '/' + eventId,
        config
    )
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
