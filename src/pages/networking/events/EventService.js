
import React from "react";
import { db } from "../../firebase";
import { EventManager } from "./EventManager";

export const EventService = {

    getAllEvents: async(orgId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                EventManager.getAllEvents(userToken, orgId).then((exp) => {

                    console.log(exp)
                    console.log(exp["data"]["details"])
                    if (exp) {
                        resolve(exp["data"]["details"]);
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
