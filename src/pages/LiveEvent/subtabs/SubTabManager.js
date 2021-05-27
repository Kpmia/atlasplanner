import React from "react"
import { Mentors } from "./Mentors"
import { TodaySession } from "./TodaySession"


export const TabManager = {

    getTabComp: (name, orgId, eventId, mentors,  updateMentors) => {
        switch (name) {

            case "mentors":
                return <Mentors orgId={orgId} eventId={eventId} mentors={mentors} updateMentor={updateMentors} />

            case "today-session":
                return <TodaySession orgId={orgId} eventId={eventId} mentors={mentors} />
        }
    },

    getTabNames: () =>{
        return [{
            'name': 'all sessions',
            'route': 'mentors'
        },{
            'name': 'today session',
            'route': 'today-session'
        }]
    }

}