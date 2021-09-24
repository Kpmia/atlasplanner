import React from "react";
import { CreateSession } from "./CreateSession/CreateSession";
import { DeleteSession } from "./DeleteSession";
import { EditSession } from "./EditSession";
import { ViewSession } from "./ViewSession";

export const TabManager = {

    getTabComponent: (name, orgId, eventId, sessions, getSessions, eventInfo) => {
        console.log(name)
        switch (name) {
            case "add-profile":
                return <CreateSession eventInfo={eventInfo} orgId={orgId} eventId={eventId} sessions={sessions} />
            case "edit-profile":
                return <EditSession orgId={orgId} eventId={eventId} getSessions={getSessions} sessions={sessions} />
            case "view-profile":
                return <ViewSession  orgId={orgId} eventId={eventId} eventInfo={eventInfo}  sessions={sessions} />
            default:
                return
        }
    },

    getTabNames() {
        return [{
            "name": "Add Profile",
            "route": "add-profile",
            "icon": "plus square outline"
        }, {
            "name": "View & Edit Profiles",
            "route": "edit-profile",
            "icon": "pencil alternate"
        }, {
            "name": "View Calendar",
            "route": "view-profile",
            "icon": "calendar"
        }]
    }

}