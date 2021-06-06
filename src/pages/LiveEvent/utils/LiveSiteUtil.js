import React from "react";
import moment from "moment"

export const LiveSiteUtils = {

    getCurrWeek(weekCount) {
        var firstday = moment().add(weekCount, 'weeks').startOf('week').toDate()
        var lastday   = moment().add(weekCount, 'weeks').endOf('week').toDate();
    
        const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
        ];

        return monthNames[firstday.getMonth()] + " " + firstday.getDate() + ", " + firstday.getFullYear() +  " - " + monthNames[lastday.getMonth()] + " " + lastday.getDate() + ", " + firstday.getFullYear()  
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