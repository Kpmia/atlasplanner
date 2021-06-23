import React from "react";
import moment from "moment"

export const LiveSiteUtils = {

    /**
     * This helper method allows the user to add or remove
     * weeks from today's date. This allows users to go back and forth weeks depending
     * on the number of weeks that they want to pass by.
     * @param {Int32Array} weekCount - integer of how many weeks should pass
     * Returns a string of the current week 
     */
    getCurrWeek(weekCount) {
        var firstday = moment().add(weekCount, 'weeks').startOf('week').toDate()
        var lastday   = moment().add(weekCount, 'weeks').endOf('week').toDate();
    
        const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
        ];

        return monthNames[firstday.getMonth()] + " " + firstday.getDate() + ", " + firstday.getFullYear() +  " - " + monthNames[lastday.getMonth()] + " " + lastday.getDate() + ", " + firstday.getFullYear()  
    },

    /**
     * This helper method gets the start and end day of the week of the given date.
     * Example - pass in date June 19th, 2021 - start date will be June 13th and end date will be June 19th
     * @param {string} date - string of a date
     * Returns a string of the current week of the given date (e.g. - June 13th, 2021 - June 19th, 2021)
     */
    getStartEndCurrWeek(date) {
        var firstday = moment(date).startOf('week').toDate()
        var lastday   = moment(date).endOf('week').toDate();
    
        const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
        ];
    
        return monthNames[firstday.getMonth()] + " " + firstday.getDate() + ", " + firstday.getFullYear() +  " - " + monthNames[lastday.getMonth()] + " " + lastday.getDate() + ", " + firstday.getFullYear()  
    },

    /**
     * This is a helper method of getting the session data for the week passed in.
     * Week is in the format `June 13th, 2021 - June 19th, 2021.` This method will find the week
     * in the object array sessions.
     * @param {object} sessions 
     * @param {string} week 
     * Returns the data object for the week passed in
     */
    getWeekData(sessions, week) {
        var copyMentorData = JSON.parse(JSON.stringify(sessions))
    
        copyMentorData.map((mentor) => {
            mentor["timeslots"] = []
        })
    
        sessions.map((mentor, idx) => {
            if (mentor["timeslots"][week] != undefined) {
                copyMentorData[idx]["timeslots"] = mentor["timeslots"][week]
            } 
        })    
        
        return copyMentorData;
    },

    splitSpacesToDashes(name) {
        var str = name.replace(/\s+/g, '-').toLowerCase();
        return str;
    },

    splitDashestoSpaces(name) {
        var str = name.replace('-', ' ').split(' ')
        return str[0];
    }

}