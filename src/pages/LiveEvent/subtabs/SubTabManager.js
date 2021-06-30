import React from "react"
import { Mentors } from "./Mentors"
import { TodaySession } from "./TodaySession"

export const TabManager = {

    getTabComp: (name, orgId, eventId, mentors,  updateMentors, copiedMentorData, currWeek) => {
        switch (name) {

            case "mentors":
                return <Mentors orgId={orgId} eventId={eventId} currWeek={currWeek} mentors={copiedMentorData} originalMentors={mentors}  updateMentor={updateMentors} />

            case "view-calendar":
                return <TodaySession orgId={orgId} eventId={eventId} currWeek={currWeek} mentors={mentors} />
        }
    },

    getCurrSubtab() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('tab-name') != "" && urlParams.get('tab-name') != null) {
            return urlParams.get('tab-name');
        } else {
            return "mentors"
        }
    },

    getTabNames: () =>{
        return [{
            'name': 'All Sessions',
            'route': 'mentors',
            'icon': 'clone outline',
        },{
            'name': `View Calendar`,
            'route': 'view-calendar',
            'icon': 'calendar alternate outline',
        }]
    }

}