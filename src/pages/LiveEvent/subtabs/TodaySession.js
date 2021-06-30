import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Card } from "@material-ui/core";
import { CardBody, Col, Row } from "reactstrap";
import interactionPlugin from '@fullcalendar/interaction';
import { SessionUtils } from "../../mentors/utils/SessionUtils";
import { CalendarBanner } from "../components/banners/CalendarBanner";

export class TodaySession extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        sessions: this.props.mentors,
        chosenSession: [],
        assignedColor: [],
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

    render() {

        var events = [];

        this.state.sessions.map((session, id) => {
            Object.keys(session["timeslots"]).map((slot) => {
                session["timeslots"][slot].map((time) => {
                    events.push({
                        title: session["name"],
                        background: this.state.assignedColor[id],
                        extraInfo: session["_id"],
                        extendedProps: { session },
                        start: time["actual_start"],
                        end: time["actual_end"]
                    })
                })
            })
        })

        return (
            <div style={{marginTop: '-60px', zIndex: 100, position: 'relative'}}>
                <CalendarBanner />
                <Row>
                    <Col sm={4}>
                <Card className="formCard">
                    <CardBody>
                        <p> Session Details </p>
                            <p style={{marginBottom: 0}} className="eventProjectTitle"> {this.state.chosenSession["name"]} </p>
                            <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {this.state.chosenSession["link"]} </p>
                            <a class={"ui image label"}> {this.state.chosenSession['category']} </a>
                            <p style={{fontWeight: 'bold', marginTop: 5}}> {this.state.chosenSession["section"]} </p>
                            <p> {this.state.chosenSession["descriptions"]} </p>
                    </CardBody>
                </Card>
                </Col>

                <Col>
                    <Card style={{ position: 'relative', zIndex: 9}} className="formCard">
                    <CardBody>                       
                        <FullCalendar
                                defaultAllDay={false}
                                allDaySlot={false}
                                eventClick={(event) => this.setState({ chosenSession : event.event._def.extendedProps.session })}
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
                    </Col>

               
                </Row>
                    <br></br>     
            </div>
        )
    }
}