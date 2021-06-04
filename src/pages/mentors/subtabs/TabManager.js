import React from "react";
import { CreateSession } from "./CreateSession";
import { DeleteSession } from "./DeleteSession";
import { EditSession } from "./EditSession";

export const TabManager = {

    getTabComponent: (name, orgId, eventId, sessions, getSessions) => {
        switch (name) {
            case "create-session":
                return <CreateSession orgId={orgId} eventId={eventId} sessions={sessions} />
            case "delete-session":
                return <DeleteSession  orgId={orgId} eventId={eventId} getSessions={getSessions} sessions={sessions} />
            case "edit-session":
                return <EditSession  orgId={orgId} eventId={eventId} sessions={sessions} />
            default:
                return
        }
    }

}