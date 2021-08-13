import FullCalendar from "@fullcalendar/react";
import React, { useEffect, useState } from "react";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Col, Row } from "reactstrap";
import moment from "moment"
import { DeleteBooking } from "./modals/DeleteBooking";
import { Icon } from "semantic-ui-react";


const organizeSessionInfo = (sessionInfo) => {
    const events = []    
    sessionInfo.timeslots.map((time) => {
        var status = ""
        if (Object.keys(time.filled).length != 0) {
            status = "filled"
        }

        events.push({
            title: status,
            background: status == 'filled'? "red" : "green",
            extraInfo: time["_id"],
            extendedProps: { 
                name: sessionInfo["name"],
                link: sessionInfo["link"],
                start_time: time["actual_start"],
                end_time: time["actual_end"],
                filled: time["filled"],
                _id: time["_id"]
            },
            start: time["actual_start"],
            end: time["actual_end"]
        })
    })
    return events;
};


export const CalendarBookings = ({ sessionInfo, ...restProps}) => {
    const [dates, organizeInfo] = useState(organizeSessionInfo(sessionInfo));
    const [chosenSession, chooseSession] = useState([]);
    const [chosenSessionId, chooseSessionId] = useState("");

    useEffect(() => {

        if (sessionInfo != dates) {
            organizeInfo(organizeSessionInfo(sessionInfo))
            chooseSession(chosenSession)
            sessionInfo.timeslots.map((time) => {
                if (time._id == chosenSessionId) {
                    var time_id = { 
                        name: sessionInfo.name,
                        link: sessionInfo.link,
                        start_time: time.actual_start,
                        end_time: time.actual_end,
                        filled: time.filled,
                        _id: time._id
                    }
                    chooseSession(time_id)
                }
            })
        }
    }, [sessionInfo])


    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    
    return (
        <div>
            
            <Row>
                <Col>
                {
                    chosenSession.filled ? 
                        chosenSession.filled.length != 0?
                            <div style={{maxHeight: '600px', overflowY: 'scroll'}}>
                                
                               <span style={{fontSize: '20px', fontWeight: 'bold'}}> {monthNames[new Date(chosenSession.start_time).getMonth()].toString()} {new Date(chosenSession.start_time).getDate().toString()}  </span>
                               <br></br>
                               <span> {moment(chosenSession.start_time).format("hh:mma")}-{moment(chosenSession.end_time).format("hh:mma")} </span>
                                <p className="float-right attendee-count"> Attendees ({Object.keys(chosenSession.filled).length} total) </p>

                                <hr />

                                {
                                    Object.keys(chosenSession.filled).map((attendee) => {
                                        return (
                                            <div>
                                                <h1 style={{marginBottom: '10px'}}> {chosenSession.filled[attendee].name} <span style={{fontSize: '14px', cursor: 'pointer'}}> <DeleteBooking booking={{"email": chosenSession.filled[attendee].email}} bookingName={chosenSession.filled[attendee].name} timestamp={`${monthNames[new Date(chosenSession.start_time).getMonth()].toString()} ${new Date(chosenSession.start_time).getDate().toString()}, ${new Date(chosenSession.end_time).getFullYear().toString()} at ${moment(chosenSession.start_time).format("hh:mma")}-${moment(chosenSession.end_time).format("hh:mma")}`} orgId={sessionInfo._orgId} session={sessionInfo} eventId={sessionInfo._eventId} bookingId={attendee} sessionId={sessionInfo._id}  /> </span></h1>
                                                <p> <Icon style={{fontSize: '12px'}} name="mail" /> {chosenSession.filled[attendee].email} </p>
                                                <br></br>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            :
                            <Row style={{justifyContent: 'center'}}>
                            <p className="not-selected-booking"> You have not yet selected a reservation to inspect at. Click any of the red-filled 
                             bookings in the calendar on the right to view details.</p>
                         </Row>
                    :

                    <Row style={{justifyContent: 'center'}}>
                       <p className="not-selected-booking"> You have not yet selected a reservation to inspect at. Click any of the red-filled 
                        bookings in the calendar on the right to view details.</p>
                    </Row>
                }
                
                
                </Col>

                <Col>
                <FullCalendar
                    defaultAllDay={false}
                    allDaySlot={false}
                    eventClick={(event) => { chooseSession(event.event._def.extendedProps); chooseSessionId(event.event._def.extendedProps._id) }}
                    contentHeight={500}
                    buttonText={{
                            today: 'Today',
                            month: 'Month',
                            week: 'Week',
                            day: 'Day',
                            list: 'List',
                            daygrid: 'Grid',
                        }}
                        expandRows
                    plugins={ [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
                    initialView={ 'timeGridWeek' }
                    events={dates}
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listWeek'
                    }}
                    eventDidMount={ function (info) {
                            if (info.event.extendedProps.background) {
                                info.el.style.backgroundColor = 'black'
                                info.el.style.cursor = 'pointer'
                                info.el.style.background = info.event.extendedProps.background;
                                info.el.style.backgroundSize = '500%';
                            }
                        }}
                    /> 
                </Col>
            </Row>
        </div>
    )
}






