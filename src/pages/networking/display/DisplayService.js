import React from "react";
import { EventService } from "../events/EventService";
import { DisplayManager } from "./DisplayManager";

export const DisplayService = {

    createEventDisplay: async(orgId, eventId, displayBody) => {
        let userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                DisplayManager.createEventDisplay(userToken, orgId, eventId, displayBody).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            console.log(exp)
                            resolve(exp["data"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot add event display.')
            return null;
        }
    },

    getEventDisplay: async(orgId, eventId) => {
        try {
            return new Promise((resolve, reject) => {
                DisplayManager.getEventDisplay(orgId, eventId).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            console.log(exp)
                            resolve(exp["data"]["event_display"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot get event display.')
            return null;
        }
    },

}