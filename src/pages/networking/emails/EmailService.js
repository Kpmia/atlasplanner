import React from "react";
import { EventService } from "../events/EventService";
import { EmailManager } from "./EmailManager";

export const EmailService = {

    sendConfirmEmail: async(emailBody) => {
        try {
            return new Promise((resolve, reject) => {
                EmailManager.confirmEmail(emailBody).then((exp) => {
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
            console.log('Cannot send confirmation email.')
            return null;
        }
    },

    sendReserveEmail: async(emailInfo) => {
        try {
            return new Promise((resolve, reject) => {
                EmailManager.reserveEmail(emailInfo).then((exp) => {
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
            console.log('Cannot send confirmation email.')
            return null;
        }
    }

}
