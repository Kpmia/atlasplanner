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
            case "delete-session":
                return <DeleteSession  orgId={orgId} eventId={eventId} getSessions={getSessions} sessions={sessions} />
            case "edit-session":
                return <EditSession  orgId={orgId} eventId={eventId} getSessions={getSessions} sessions={sessions} />
            case "view-session":
                return <ViewSession  orgId={orgId} eventId={eventId} sessions={sessions} />
            default:
                return
        }
    },

    getTabNames() {
        return [{
            "name": "Create",
            "route": "create-session",
            "icon": "calendar plus outline icon"
        }, {
            "name": "Delete",
            "route": "delete-session",
            "icon": "cut"
        }, {
            "name": "Edit",
            "route": "edit-session",
            "icon": "pencil alternate"
        }, {
            "name": "View Sessions",
            "route": "view-session",
            "icon": "calendar"
        },]
    }

}