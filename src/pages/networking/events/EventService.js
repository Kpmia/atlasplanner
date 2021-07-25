
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

    eventExists: async(orgId, eventId) => {
        try {
            return new Promise((resolve, reject) => {
                EventManager.eventExists(orgId, eventId).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            resolve(exp["data"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot event exists -')
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
        return new Promise((resolve, reject) => {
            return EventManager.getEvent(userToken, orgId, eventId).then((exp) => {
                if (exp != null && exp) {
                    resolve(exp["data"]["events"][0]);
                } else {
                    resolve(null);
                }
            });
        }).catch(function(error) {
            console.log('Cannot grab events.')
            return null;
        })
    },

    updateEvent: async(orgId, eventId, event) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                EventManager.updateEvent(userToken, orgId, eventId, event).then((exp) => {
                    if (exp != null && exp) {
                        if (exp) {
                            resolve(exp["data"]["event"]);
                        } else {
                            resolve(null);
                        }
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot update event.')
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
