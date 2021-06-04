
import React from "react";
import { db } from "../../firebase";
import { EventManager } from "./EventManager";

export const EventService = {

    getAllEvents: async(orgId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                EventManager.getAllEvents(userToken, orgId).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            resolve(exp["data"]["events"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot grab events.')
            return null;
        }
    },

    createEvent: async(orgId, name) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                EventManager.createEvent(userToken, orgId, name).then((exp) => {
                    if (exp != null && exp) {
                        resolve(exp["data"]["event"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot grab events.')
            return null;
        }
    },

    deleteEvent: async(orgId, eventId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                EventManager.deleteEvent(userToken, orgId, eventId).then((exp) => {
                    if (exp != null && exp) {
                        resolve(exp['data']['message']);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot grab events.')
            return null;
        }
    },

    getEvent: async(orgId, eventId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                EventManager.getEvent(userToken, orgId, eventId).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            resolve(exp["data"]["events"][0]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot grab events.')
            return null;
        }
    },

    async getUserToken() {
        return new Promise((resolve, reject) => {
            const unsubscribe = db.auth().onAuthStateChanged(async (user) => {
                unsubscribe();
                resolve(user);
            }, reject);
        }).then(async (resp) => {
            if (resp) {
                return (await resp.getIdTokenResult(true)).token;
            }
        });
    },
}
