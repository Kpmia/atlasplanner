import React from "react";
import { EventService } from "../events/EventService";
import { KeyService } from "../keys/KeyService";
import { SessionService } from "../sessions/SessionService";


const eventData = {
    "name": 'mentors',
    'description': 'Please be sure to reserve a time with a mentor by clicking on a card and reserving a seat. Only one person per time slot of a mentor.',
}

const coachEvent = {
    "name": 'coaches',
    'description': 'Please be sure to reserve a time with a coach by clicking on a card and reserving a seat. Only one person per time slot of a coach.',
}


const coachData = {
    "session": [{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Joy Harris",
        'category': 'Batch 1',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Aaron Hackett",
        'category': 'Batch 1',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    },  {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "James Stubbs",
        'category': 'Batch 2',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    },  {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Robert Dermont",
        'category': 'Batch 2',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    } , {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Nakia Melecio",
        'category': 'Batch 3',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Ray Vito",
        'category': 'Batch 3',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Michael Buchanan",
        'category': 'Batch 4',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Melissa Heffner",
        'category': 'Batch 4',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Seth Radman",
        'category': 'Batch 5',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Sara Henderson",
        'category': 'Batch 5',
        "descriptions": "Minibatch 5 Floor",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Greg Mihalik",
        'category': 'Batch 6',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    } , {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Yancy Riddle",
        'category': 'Batch 6',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    } ,{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Steve Chininis",
        'category': 'Batch 7',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Stephanie Smith",
        'category': 'Batch 7',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": []
    },{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Rhea Perkins",
        'category': 'Batch 8',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Hope Anusiem",
        'category': 'Batch 8',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Karthik Ramachandran",
        'category': 'Batch 9',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": []
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Siva (Raghupathy Sivakumar)",
        'category': 'Batch 9',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": []
    },{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Suresh Sharma",
        'category': 'Batch 9',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": []
    } ,{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Harold Solomon",
        'category': 'Batch 9',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": []
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Jonathan Goldman",
        'category': 'Batch 9',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": []
    },{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Evan Goldberg",
        'category': 'GCMI',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    }, {
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Chris Martin",
        'category': 'Resources',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    },{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Rahul Saxena",
        'category': 'Resources',
        "descriptions": "",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": [{
            day: 2,
            start: "13:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "13:30:00 GMT-0400 (Eastern Daylight Time)"
        },{
            day: 2,
            start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "15:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:00:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:00:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "16:30:00 GMT-0400 (Eastern Daylight Time)"
        }, {
            day: 2,
            start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
            filled: {},
            end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
        }]
    },{
        "_orgId": "",
        "_eventId": eventData['name'],
        "name": "Keith McGreggor",
        'category': 'Resources',
        "descriptions": "Email me to arrange",
        "link": "https://create-x.event.gatherly.io/",
        "section": "",
        "timeslots": []
    }
]
}


const sessionData =  {
    "session": [{
           "_orgId": "",
           "_eventId": eventData['name'],
           "name": "Robert Elliott",
           'category': '',
           "descriptions": "Senior Client Partner @ Globant. Linkedin: www.linkedin.com/in/elliottrobert",
           "link": "https://create-x.event.gatherly.io/",
           "section": "Mentor",
           "timeslots": []
        },{
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Thomas Taggart",
            'category': 'Government',
            "descriptions": "Working @ Passport Shipping. Linkedin: www.linkedin.com/in/trtaggart/ ",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": []
        },{
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Ben Alexander",
            'category': 'Engineering, Product and Design',
            "descriptions": "VP Product @ PMG. Linkedin: www.linkedin.com/in/ben-alexander-atl",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": [{
                day: 2,
                start: "13:30:00 GMT-0400 (Eastern Daylight Time)",
                filled: {},
                end: "14:00:00 GMT-0400 (Eastern Daylight Time)"
            }, {
                day: 2,
                start: "14:00:00 GMT-0400 (Eastern Daylight Time)",
                filled: {},
                end: "14:30:00 GMT-0400 (Eastern Daylight Time)"
            }]
        },{
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Don Oates",
            'category': 'Apparel and Cosmetics',
            "descriptions": "Worked @ Humanry / Vestio Advisors / Southern Tide / Seraph Group. Current chief strategy officer of a business services start-up, previous consultant to start-ups and growth-stage companies, prior cofounder of Southern Tide, and before that, worked in venture capital. ",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": []
        },{
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Jon Harmer",
            'category': '',
            "descriptions": "Currently Product Manager @ Google Cloud. Linkedin: www.linkedin.com/in/jonharmer",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": []
        },{
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "ankush singla",
            'category': 'Security',
            "descriptions": "Product / Machine Learning @ DefenseStorm. Linkedin: www.linkedin.com/in/singlaankush",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": []
        },{
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Darshen Patel",
            'category': 'Supply Chain and Logistics',
            "descriptions": "Product Manager @ STORD. ",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": []
        },{
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Doug Allvine",
            'category': '',
            "descriptions": "Assistant Athletic Director for Innovation @ Georgia Tech.",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": [{
                day: 2,
                start: "14:30:00 GMT-0400 (Eastern Daylight Time)",
                filled: {},
                end: "15:00:00 GMT-0400 (Eastern Daylight Time)"
            }]
        }, {
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Thiago Brum",
            'category': 'Engineering, Product and Design',
            "descriptions": "Principal Product Manager @ ADP. Linkedin: www.linkedin.com/in/thiagocb",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": [{
                day: 2,
                start: "16:30:00 GMT-0400 (Eastern Daylight Time)",
                filled: {},
                end: "17:00:00 GMT-0400 (Eastern Daylight Time)"
            }]
        }, {
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "April Williams",
            'category': '',
            "descriptions": "Director of Business Innovation @ IHG. Linkedin: www.linkedin.com/in/april-williams-atl.",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": [{
                day: 2,
                start: "15:00:00 GMT-0400 (Eastern Daylight Time)",
                filled: {},
                end: "15:30:00 GMT-0400 (Eastern Daylight Time)"
            }]
        },  {
            "_orgId": "",
            "_eventId": eventData['name'],
            "name": "Sohail Jooma",
            'category': 'Engineering, Product and Design',
            "descriptions": "Product Manager @ OneTrust. Linkedin: www.linkedin.com/in/sohailjooma.",
            "link": "https://create-x.event.gatherly.io/",
            "section": "Mentor",
            "timeslots": []
        }, 
    ]}

export const Demo = {

    createDemoData: async(orgId) => {
        await EventService.createEvent(orgId, eventData).then((event) => {
            if (event) {
                KeyService.createKey(orgId, eventData['name'], {key: ""}).then((key) => {
                    sessionData['session'].map((session, id) => {
                        sessionData['session'][id]['_orgId'] = orgId
                        sessionData['session'][id]['key'] = ""
                        SessionService.createSession(orgId, eventData['name'], session)
                    })
                })
            }
        }).then(() => {
            Demo.createSecondEvent(orgId)
        })
    },

    createSecondEvent: async(orgId) => {
        await EventService.createEvent(orgId, coachEvent).then((event) => {
            if (event) {
                KeyService.createKey(orgId, coachEvent['name'], {key: ""}).then((key) => {
                    coachData['session'].map((session, id) => {
                        coachData['session'][id]['_orgId'] = orgId
                        coachData['session'][id]['key'] = ""
                        SessionService.createSession(orgId, coachEvent['name'], session)
                    })
                })
            }
        })
    }

}