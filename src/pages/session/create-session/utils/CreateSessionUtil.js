import React from "react";
import { Map } from "@material-ui/icons"
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import InfoIcon from '@material-ui/icons/Info';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

export const CreateSessionUtil = {

    getRole() {
        return ["Alumni", "Mentor", "Coach", "Educator", "Student", "Speaker" ]
    },

    getIndustry() {
        return ["Management", "VC", "Product", "Design", "Retail", "Finance", "Software", "Misc." ]
    },

    getStepIcons() {
        return [
            {
                "icon": Map,
                "label": "location"
            },{
                "icon": EventAvailableIcon,
                "label": "calendar" 
            }, {
                "icon": InfoIcon,
                "label": "profile" 
            }, {
                "icon": TrackChangesIcon,
                "label": "finish"
            }
        ]
    }

}