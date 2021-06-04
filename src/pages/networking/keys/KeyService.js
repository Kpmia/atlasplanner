import React from "react";
import { EventService } from "../events/EventService";
import { KeyManager } from "./KeyManager";

export const KeyService = {

    createKey: async(orgId, eventId, key) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                KeyManager.createKey(userToken, orgId, eventId, key).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            resolve(exp["data"]["key"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot create keys.')
            return null;
        }
    },

    updateKey: async(orgId, eventId, key) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                KeyManager.updateKey(userToken, orgId, eventId, key).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            resolve(exp["data"]["key"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot update keys.')
            return null;
        }
    },

    getKey: async(orgId, eventId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                KeyManager.getKey(userToken, orgId, eventId).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            resolve(exp["data"]["key"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot get keys.')
            return null;
        }
    },

}
