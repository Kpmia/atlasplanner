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
import FadeIn from "react-fade-in";
import { FilledBanner } from "../components/banners/FilledBanner";

export class TodaySession extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        sessions: this.props.mentors,
        chosenSession: [],
        selectEvent: [],
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
    
    componentDidUpdate() {
        if (this.props.mentors != this.state.sessions) {
            this.setState({ sessions : this.props.mentors })
        }
    }

    render() {

        var events = [];

        console.log(this.state.sessions)

        this.state.sessions.map((session, id) => {
            console.log(session)
            session["timeslots"].map((time) => {
                console.log(time)
                events.push({
                    title: session["name"],
                    background: this.state.assignedColor[id],
                    extraInfo: session["_id"],
                    extendedProps: { 
                        name: session["name"],
                        descriptions: session["descriptions"],
                        link: session["link"],
                        section: session["section"],
                        start_time: time["actual_start"],
                        end_time: time["actual_end"],
                        filled: time["filled"],
                        _id: time["_id"]
                    },
                    start: time["actual_start"],
                    end: time["actual_end"]
                })
            })
        })

        return (
            <div style={{ zIndex: 100, position: 'relative'}}>
                <CalendarBanner />
                <Row>
                    <Col sm={4}>
                <Card className="formCard">
                    <CardBody>
                        {
                            this.state.chosenSession["filled"] ?
                                <FilledBanner filled={this.state.chosenSession["filled"]} />
                            : null
                        }
                        <FadeIn delay="300">
                            <Card style={{cursor: 'pointer'}}  className="eventProjectCard">
                            <div style={{marginTop: 0}}  className="eventProjectGradCard"></div>
                                <CardBody>
                            <p style={{marginBottom: 0}} className="eventProjectTitle"> {this.state.chosenSession["name"]} </p>
                            <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {this.state.chosenSession["link"]} </p>
                            <a class={"ui image label"}> {this.state.chosenSession['category']} </a>
                            <p style={{fontWeight: 'bold', marginTop: 5}}> {this.state.chosenSession["section"]} </p>
                            <p> {this.state.chosenSession["descriptions"]} </p>
                            </CardBody>
                                </Card>
                            </FadeIn>
                    </CardBody>
                </Card>
                </Col>

                <Col>
                    <Card style={{ position: 'relative', zIndex: 9}} className="formCard">
                    <CardBody>                       
                        <FullCalendar
                                defaultAllDay={false}
                                allDaySlot={false}
                                eventClick={(event) => this.setState({ chosenSession : event.event._def.extendedProps })}
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
                                initialView={ 'timeGridWeek' }
                                events={events}
                                headerToolbar={{
                                    left: 'prev,next today',
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
                            </CardBody>
                    </Card>
                    </Col>

               
                </Row>
                    <br></br>     
            </div>
        )
    }
}