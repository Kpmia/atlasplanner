import React, { Component } from "react"
import { LiveSiteUtils } from "../utils/LiveSiteUtil"
import { Card, CardBody, Col, Row } from "reactstrap";
import FadeIn from "react-fade-in";
import { ToastContainer } from "react-toastify";
import { ReserveMentor } from "../components/ReserveMentor";
import moment from "moment"


export class Mentors extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        mentors: this.props.mentors,
        currentMentor: []
    }

    currWeek = LiveSiteUtils.getCurrWeek() 

    selectMentor = (mentorId) => {
        this.setState({ currentMentor : {"id": mentorId, "data": this.state.mentors[mentorId] }})
    };

    componentDidUpdate() {
        if (this.props.mentors != this.state.mentors) {
            this.setState({ mentors : this.props.mentors })
            this.setState({ currentMentor : {"id": this.state.currentMentor["id"], "data": this.props.mentors[this.state.currentMentor['id']] }})
        }
    }

    render() {
        var weekDayData = {
            'sunday': [], "monday": [], "tuesday": [], "wednesday": [], "thursday": [], "friday": [], 'saturday': [], 
        }

        console.log()
        
        return (
            <div>
              
              <p className="eventSubTabs"> {this.currWeek} </p>

            {
    this.state.currentMentor.length != 0 ?
    <div id="calendar_body">
    <Card >
        <CardBody>
        <strong> {this.state.currentMentor["data"]["name"] + `'s Schedule`} </strong> 
        <p style={{textDecoration: 'underline'}}> {this.state.currentMentor["data"]["link"]} </p> 
        <Row>
        {
            Object.keys(weekDayData).map((day, idx) => {
               const times = []
                
               this.state.currentMentor["data"]["timeslots"].map((time, id) => { 
                   time = {"id": id, ...time}
                   if (time["day"] == idx) { 
                       return times.push(time) 
                    }
                })

                return (
                    <Col style={{marginTop: 10}} sm={3}>
                    <Card className="eventProjectCard">
                        <CardBody>
                   
                        <p className="dayOfWeek"> {day} </p>
                        <br></br>
                        <p> {
                                times.sort(function compare(a, b) {
                                    return new Date('1970/01/01 ' + a["start"]) - new Date('1970/01/01 ' + b["start"]);
                                  }).map((time) => {
                                    if (time) {
                                        if (time["filled"] != 0) {
                                            if (Object.keys(time["filled"]).includes(this.currWeek)) {
                                                return (
                                                    <div className="unavailableTime" style={{background: '#3430F6', textAlign: 'center', marginBottom: 5}}>
                                                       <ReserveMentor updateCurrMentor={this.selectMentor} updateMentor={this.props.updateMentor} timeslot={time} currWeek={this.currWeek} mentor={this.state.currentMentor} orgId={this.state.orgId} eventId={this.state.eventId}> <span> {moment(time["start"], 'HH:mm'). format('h:mm A')} - {moment(time["end"], 'HH:mm'). format('h:mm A')}</span> </ReserveMentor>
                                                    </div>
                                                )
                                            }
                                        }

                                        return (
                                            <div className="availableTime"   style={{background: 'none', marginBottom: 5, textAlign: 'center', border: '1px solid black'}}>
                                               <ReserveMentor updateCurrMentor={this.selectMentor} updateMentor={this.props.updateMentor} timeslot={time} currWeek={this.currWeek} mentor={this.state.currentMentor} orgId={this.state.orgId} eventId={this.state.eventId}> <span style={{color: 'black'}}> {moment(time["start"], 'HH:mm'). format('h:mm A')} - {moment(time["end"], 'HH:mm'). format('h:mm A')}</span> </ReserveMentor>
                                            </div>
                                        )
                                    }
                                })
                            } </p>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        }
        </Row>

        </CardBody>
        </Card>
        <br></br>
    </div>
    :
    null
}

            <Row id="sessions_body">
                {
                    this.state.mentors != "None"?

                        Object.keys(this.state.mentors).map((mentor) => {
                            console.log(this.state.mentors[mentor]['name'])
                            return (
                            <Col style={{marginBottom: 30}} sm={4}>
                                
                                <FadeIn delay="400">
                                <Card id={this.state.mentors[mentor]['name']} onClick={() => this.selectMentor(mentor)} style={{cursor: 'pointer'}}  className="eventProjectCard">
                                <div className="eventProjectGradCard"></div>
                                <CardBody>
                                <p style={{marginBottom: 0}} className="eventProjectTitle"> {this.state.mentors[mentor]["name"]} </p>
                                <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {this.state.mentors[mentor]["link"]} </p>
                                <p > {this.state.mentors[mentor]["descriptions"]} </p>
                                </CardBody>
                                </Card>
                                </FadeIn>
                            </Col>
                            )
                        })

            : null }
            </Row>


            </div>
        )
    }
}
