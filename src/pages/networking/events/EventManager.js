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

  eventExists: async (orgId, eventId) => {
    const config = {}
    try {
      return await atlasAPI.get(
        `/event-exists/${orgId}/${eventId}`,
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
      return await atlasAPI.get(
        '/events/' + orgId + '/' + eventId,
        config
      ).catch (function (err) {
          console.log("No event")
          return null;
      })
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

  updateEvent: async (userToken, orgId, eventId, event) => {
    const config = {
      headers: {
        "Authorization": userToken,
      },
    };
    try {
      return await atlasAPI.put(
        '/events/' + orgId +'/' + eventId,
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
          "Authorization": userToken,
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
