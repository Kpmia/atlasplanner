import React from "react"
import { Mentors } from "./Mentors"
import { TodaySession } from "./TodaySession"


export const TabManager = {

    getTabComp: (name, orgId, eventId, mentors,  updateMentors, copiedMentorData, currWeek) => {
        console.log(copiedMentorData)
        switch (name) {

            case "mentors":
                return <Mentors orgId={orgId} eventId={eventId} currWeek={currWeek} mentors={copiedMentorData} originalMentors={mentors}  updateMentor={updateMentors} />

            case "today-session":
                return <TodaySession orgId={orgId} eventId={eventId} currWeek={currWeek} mentors={copiedMentorData} />
        }
    },

    getTabNames: () =>{
        return [{
            'name': 'All Sessions',
            'route': 'mentors'
        },{
            'name': `Today's Session`,
            'route': 'today-session'
        }]
    }

}