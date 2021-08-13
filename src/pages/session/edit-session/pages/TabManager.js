import React from "react";
import EditSession from "./subtabs/EditSession";
import { ViewBookings } from "./subtabs/ViewBookings";


export function TabManager(name, sessionInfo) {
    switch(name) {
        case 'Edit Profile':
        case "edit-profile":
            return <EditSession orgId={sessionInfo._orgId} eventId={sessionInfo._eventId} sessionId={sessionInfo._id} sessionInfo={sessionInfo} />
        case 'All Bookings':
        case "all-bookings":
            return <ViewBookings orgId={sessionInfo._orgId} eventId={sessionInfo._eventId} sessionId={sessionInfo._id} sessionInfo={sessionInfo} />
    }
}

export const tabNames = [
    {
        "name": "Edit Profile",
        "route": "edit-profile"
    }, {
        "name": "All Bookings",
        "route": "all-bookings"
    }
]