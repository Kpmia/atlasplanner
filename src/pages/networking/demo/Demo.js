import React from "react";
import { EventService } from "../events/EventService";
import { SessionService } from "../sessions/SessionService";


const eventData = {
    "name": 'cs-13xx-office-hours'
}


const sessionData =  {
    "session": [{
           "_orgId": "",
           "_eventId": eventData['name'],
           "name": "John Smith",
           "descriptions": "Located in building Buzz room 103. Best at helping recitation worksheet questions.",
           "link": "https://zoom.web/john-smith",
           "section": "B1",
           "timeslots": [
               {
                   "day": 0,
                   "start": "09:00:00 GMT-0400 (Eastern Daylight Time)",
                   "end": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                   "filled": {}
               },
               {
                   "day": 1,
                   "start": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                   "end": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                   "filled": {}
               },
               {
                   "day": 2,
                   "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                   "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                   "filled": {}
               }]
        }, {
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Anna Locke",
            "descriptions": "Only use zoom and bluejeans. Contact me for regrading questions - regrade can only be done for recent assignments from the last two weeks.",
            "link": "https://zoom.web/anna-locke",
            "section": "B1",
            "timeslots": [
                {
                    "day": 0,
                    "start": "03:00:00 GMT-0400 (Eastern Daylight Time)",
                    "end": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                    "filled": {}
                },
                {
                    "day": 1,
                    "start": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                    "end": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                    "filled": {}
                },
                {
                    "day": 2,
                    "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                    "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                    "filled": {}
                }]
            }, {
                "_orgId": "",
                "_eventId": eventData['name'],
                "name": "Jonathan Jones",
                "descriptions": "Head TA. Can answer urgent, immediate questions, if needed. Take TA applications for next year run.",
                "link": "https://zoom.web/jonathan-jones",
                "section": "B1",
                "timeslots": [
                    {
                        "day": 0,
                        "start": "03:00:00 GMT-0400 (Eastern Daylight Time)",
                        "end": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                        "filled": {}
                    },
                    {
                        "day": 3,
                        "start": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                        "end": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                        "filled": {}
                    },
                    {
                        "day": 4,
                        "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                        "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                        "filled": {}
                    }]
                }, {
                    "_orgId": "",
                    "_eventId": eventData['name'],
                    "name": "Alexa Allison",
                    "descriptions": "Recent post-grad student that has TAd for this course. I can answer any of the book questions needed since we have answers for those.",
                    "link": "https://zoom.web/alexa-allison",
                    "section": "B1",
                    "timeslots": [
                        {
                            "day": 0,
                            "start": "03:00:00 GMT-0400 (Eastern Daylight Time)",
                            "end": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                            "filled": {}
                        },
                        {
                            "day": 1,
                            "start": "10:00:00 GMT-0400 (Eastern Daylight Time)",
                            "end": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                            "filled": {}
                        },
                        {
                            "day": 2,
                            "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                            "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                            "filled": {}
                        },
                        {
                            "day": 3,
                            "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                            "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                            "filled": {}
                        },  {
                            "day": 4,
                            "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                            "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                            "filled": {}
                        }, {
                            "day": 5,
                            "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                            "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                            "filled": {}
                        }, {
                            "day": 6,
                            "start": "11:00:00 GMT-0400 (Eastern Daylight Time)",
                            "end": "12:00:00 GMT-0400 (Eastern Daylight Time)",
                            "filled": {}
                        }
                    
                    ]
                }
    ]}

export const Demo = {

    createDemoData: async(orgId) => {
        await EventService.createEvent(orgId, eventData).then((event) => {
            if (event) {
                sessionData['session'].map((session, id) => {
                    sessionData['session'][id]['_orgId'] = orgId
                    console.log(session)
                    SessionService.createSession(orgId, eventData['name'], session)
                })
            }
        })
    }

}