import React from "react";
import { BookingManager } from "./BookingManager";

export const BookingService = {

    deleteBooking: async(orgId, eventId, sessionId, bookingId) => {
        try {
            return new Promise((resolve, reject) => {
                BookingManager.deleteBooking(orgId, eventId, sessionId, bookingId).then((exp) => {
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
            console.log('Cannot delete booking.')
            return null;
        }
    },

}