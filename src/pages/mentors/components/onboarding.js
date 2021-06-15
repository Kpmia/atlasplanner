import React from "react";
import introJs from 'intro.js'

export const onboarding = {

    startNewUser: (orgId, eventId) => {
        if (localStorage.getItem(orgId + "-" + eventId + '-new-user') == undefined) {
            introJs().setOptions({
                overlayOpacity: .5,
                exitOnOverlayClick: false,
                exitOnEsc: false,
                steps: [{
                    title: "Welcome 👋",
                  intro: orgId + " has invited you to this document to add, edit, or delete sessions for this event."  
                }, {
                    title: "About this Tool",
                  intro: "Google Docs + Calendly = meet Atlas. Atlas is an event planning tool for spatial spaces where users can collaboratively edit/add calendars for an event & view them on the event's public link."  
                }]
              }).start();
            localStorage.setItem(orgId + "-" + eventId + '-new-user', true)
        }
    }

}