import React from "react";
import { CreateSession } from "./CreateSession";
import { DeleteSession } from "./DeleteSession";
import { EditSession } from "./EditSession";
import { ViewSession } from "./ViewSession";

export const TabManager = {

    getTabComponent: (name, orgId, eventId, sessions, getSessions, eventInfo) => {
        switch (name) {
            case "create-session":
                return <CreateSession eventInfo={eventInfo} orgId={orgId} eventId={eventId} sessions={sessions} />
            case "edit-session":
                return <EditSession orgId={orgId} eventId={eventId} getSessions={getSessions} sessions={sessions} />
            case "view-session":
                return <ViewSession  orgId={orgId} eventId={eventId} sessions={sessions} />
            default:
                return
        }
    },

    getTabNames() {
        return [{
            "name": "Add Availability",
            "route": "create-session",
            "icon": "plus square outline"
        }, {
            "name": "Edit Availability",
            "route": "edit-session",
            "icon": "pencil alternate"
        }, {
            "name": "View All Mentor Availabilites",
            "route": "view-session",
            "icon": "calendar"
        }]
    }

}