
import React from "react";
import { db } from "../../firebase";
import { EventService } from "../events/EventService";
import { OrganizationManager } from "./OrgManager";

export const OrgService = {

    getAllOrganizations: async(orgId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                OrganizationManager.getAllOrganizations(userToken).then((exp) => {
                    if (exp) {
                        resolve(exp["data"]["organizations"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot grab organizations.')
            return null;
        }
    },

    createOrganization: async(orgId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                OrganizationManager.createOrganization(userToken, orgId).then((exp) => {
                    if (exp != null) {
                            resolve(exp["data"]["organization"]);
                    } else {
                        resolve(null);
                    }
                }, reject);
            })
        } catch (err) {
            console.log('Cannot create organization.')
            console.log(err)
            return null;
        }
    },

    getOrganization: async(orgId) => {
        const userToken = await EventService.getUserToken()
        try {
            return new Promise((resolve, reject) => {
                OrganizationManager.getOrganization(userToken, orgId).then((exp) => {
                    if (exp != null) {
                        resolve(exp["data"]["organizations"]);
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
