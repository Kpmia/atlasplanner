import { atlasAPI } from "../endpoints";


export const DisplayManager = {

  createEventDisplay: async (userToken, orgId, eventId, displayBody) => {
    const config = {
        headers: {
            "Authorization": userToken,
        },
    };
    try {
      return await atlasAPI.post(
        `/display/${orgId}/${eventId}`,
        displayBody,
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  getEventDisplay: async (orgId, eventId) => {
    const config = {};
    try {
      return await atlasAPI.get(
        `/display/${orgId}/${eventId}`,
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

}