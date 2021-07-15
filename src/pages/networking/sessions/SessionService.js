
import React from "react";
import { db } from "../../firebase";
import { EventService } from "../events/EventService";
import { SessionManager } from "./SessionManager";

export const SessionService = {

    getAllSessions: async(orgId, eventId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                SessionManager.getAllSessions(userToken, orgId, eventId).then((exp) => {
                    if (exp != null && exp) {
                        resolve(exp["data"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot grab sessions.')
            return null;
        }
    },

    getSession: async(orgId, eventId, sessionId) => {
        try {
            return new Promise((resolve, reject) => {
                SessionManager.getSession(orgId, eventId, sessionId).then((exp) => {
                    if (exp != null && exp) {
                        resolve(exp["data"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot grab a session')
            return null;
        }
    },

    createSession: async(orgId, eventId, session) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                SessionManager.createSession(userToken, orgId, eventId, session).then((exp) => {
                    console.log(exp)
                    if (exp != null && exp) {
                        resolve(exp["data"]["sessions"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot create sessions.')
            console.log(err)
            return null;
        }
    },

    deleteSession: async(orgId, eventId, sessionId, key) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                SessionManager.deleteSession(userToken, orgId, eventId, sessionId, key).then((exp) => {
                    if (exp != null && exp) {
                        resolve(exp["data"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot create sessions.')
            console.log(err)
            return null;
        }
    },

    updateSession: async(orgId, eventId, sessionId, session) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                SessionManager.updateSession(userToken, orgId, eventId, sessionId, session).then((exp) => {
                    if (exp != null && exp) {
                        resolve(exp["data"]["sessions"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot create sessions.')
            console.log(err)
            return null;
        }
    },
}
