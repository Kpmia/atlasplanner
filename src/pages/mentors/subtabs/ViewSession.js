import React, { Component } from "react"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Card } from "@material-ui/core";
import { CardBody, Col, Row } from "reactstrap";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { SessionUtils } from "../utils/SessionUtils";
import { CalendarBanner } from "../../LiveEvent/components/banners/CalendarBanner";

export class ViewSession extends Component {
    state = {
        sessions: this.props.sessions,
        chosenSession: [],
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

        console.log(this.state.chosenSession)

        this.state.sessions.map((session, id) => {
            Object.keys(session["timeslots"]).map((slot) => {
                session["timeslots"][slot].map((time) => {
                    events.push({
                        title: session["name"],
                        background: this.state.assignedColor[id],
                        extraInfo: session["_id"],
                        extendedProps: { 
                            session : {
                                name: session["name"],
                                descriptions: session["descriptions"],
                                link: session["link"],
                                section: session["section"],
                                filled: time["filled"]
                            }
                        },
                        editable: true,
                        start: time["actual_start"],
                        end: time["actual_end"]
                    })
                })
            })
        })

        console.log(this.state.chosenSession)

        return (
            <div style={{outline: '#ffffff21 solid 40px'}}>

                <CalendarBanner />
                <Row>
                    <Col sm={5}>
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

            <Card className="formCard">
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
        </div>
        )
    }
}