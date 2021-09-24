import React from "react";
import { BulkProfile } from "../subtabs/bulk-profile/BulkProfile";
import { SingleProfile } from "./SingleProfile";


export function TabManager(name, orgId, eventId, eventInfo) {
    switch (name) {
        case "single-profile":
            return <SingleProfile 
                        orgId={orgId}
                        eventId={eventId}
                        eventInfo={eventInfo}
                    />

        case "multi-profile":
            return <BulkProfile
                        orgId={orgId}
                        eventId={eventId}
                        eventInfo={eventInfo}
                    />
    }
}

export const tabNames = [{
    "name": "Single Profile",
    "route": "single-profile"
}, {
    "name": "Bulk Upload",
    "route": "multi-profile"
}]