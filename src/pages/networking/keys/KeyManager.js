import React from "react";
import { atlasAPI } from "../endpoints";

export const KeyManager = {

    createKey: async (userToken, orgId, eventId, key) => {
        const config = {
          headers: {
            "Authorization": userToken,
          },
        };

        try {
          return await atlasAPI.post(
            '/keys/' + orgId + '/' + eventId,
            key,
            config
          )
        } catch (error) {
          console.log(error);
          return null;
        }
      },

      updateKey: async (userToken, orgId, eventId, key) => {
        const config = {
          headers: {
            "Authorization": userToken,
          },
        };

        try {
          return await atlasAPI.put(
            '/keys/' + orgId + '/' + eventId,
            key,
            config
          )
        } catch (error) {
          console.log(error);
          return null;
        }
      },

      getKey: async (userToken, orgId, eventId) => {
        const config = {
          headers: {
            "Authorization": userToken,
          },
        };
        
        try {
          return await atlasAPI.get(
            '/keys/' + orgId + '/' + eventId,
            config
          )
        } catch (error) {
          console.log(error);
          return null;
        }
      },

}