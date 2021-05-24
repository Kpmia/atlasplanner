
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
                        resolve(exp["data"]["sessions"]);
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

    createSession: async(orgId, eventId, session) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                SessionManager.createSession(userToken, orgId, eventId, session).then((exp) => {
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
