import Axios from "axios";
import { atlasAPI } from "../endpoints";

export const OrganizationManager = {

  getAllOrganizations: async (userToken) => {
    const config = {
      headers: {
        "Authorization": userToken,
      },
    };
    try {
      return await atlasAPI.get(
        '/organizations',
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  getOrganization: async (userToken, orgId) => {
    const config = {
      headers: {
        "Authorization": userToken,
      },
    };
    try {
      return await atlasAPI.get(
        '/organizations/' + orgId,
        config
      )
    } catch (error) {
        return null;
    }
  },

  createOrganization: async (userToken, org) => {
    const config = {
      headers: {
        "Authorization": userToken,
      },
    };
    try {
      return await atlasAPI.post(
        '/organizations',
        org,
        config
      )
    } catch (error) {
      console.log(error);
      return null;
    }
  },

}
