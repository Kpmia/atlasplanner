import React, { Component } from "react"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Card } from "@material-ui/core";
import { CardBody } from "reactstrap";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { SessionUtils } from "../utils/SessionUtils";

export class ViewSession extends Component {
    state = {
        sessions: this.props.sessions,
        assignedColor: ""
    }

    colorCodeEvents = (events) => {
        var recordColors = []
        this.state.sessions.map((session, id) => {
            var colorIdx = id % SessionUtils.getGradColors().length
            recordColors.push(SessionUtils.getGradColors()[colorIdx]);
        })
        this.setState({ assignedColor : recordColors });
    }

    componentDidMount() {
        this.colorCodeEvents(this.state.sessions)
    }

    componentDidUpdate() {
        if (this.state.sessions != this.props.sessions) {
            this.setState({ sessions : this.props.sessions})
            this.colorCodeEvents(this.state.sessions)
        }
    }

    render() {

        var events = [];

        this.state.sessions.map((session, id) => {
            Object.keys(session["timeslots"]).map((slot) => {
                session["timeslots"][slot].map((time) => {
                    events.push({
                        title: session["name"],
                        background: this.state.assignedColor[id],
                        extraInfo: session["_id"],
                        extendedProps: {
                            department: 'BioChemistry',
                            filled: time["filled"],
                            sessionId: time["_id"]
                          },
                        editable: true,
                        start: time["actual_start"],
                        end: time["actual_end"]
                    })
                })
            })
        })

        return (
            <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                <CardBody>

                 <FullCalendar
                 defaultAllDay={false}
                 allDaySlot={false}
                 eventClick={(event) => console.log(event.event)}
                 contentHeight={700}
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
                   initialView={ 'dayGridMonth' }
                   events={events}
                   headerToolbar={{
                     left: 'prev,next today',
                     center: 'title',
                     right: 'dayGridMonth,timeGridWeek,listWeek'
                   }}
                   eventDidMount={ function (info) {
                        if (info.event.extendedProps.background) {
                            info.el.style.backgroundColor = 'black'
                            info.el.style.background = info.event.extendedProps.background;
                            info.el.style.backgroundSize = '500%';
                        }
                    }}
                   /> 
                </CardBody>
            </Card>
        )
    }
}