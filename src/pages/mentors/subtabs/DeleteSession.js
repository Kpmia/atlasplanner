import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Slide, toast } from "react-toastify";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Checkbox, Input } from 'semantic-ui-react'
import { SessionService } from "../../networking/sessions/SessionService";
import 'react-toastify/dist/ReactToastify.css';

export class DeleteSession extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        sessions: this.props.sessions,
        checked: [],
        key: ""
    }

    getSessions = this.props.getSessions

    deleteSession = async(orgId, eventId, sessions) => {
        if (sessions.length == 0) {
            return toast.dark('Please choose at least one session',  { transition : Slide  })
        }

        sessions.map(async(sessionId) => {
            await SessionService.deleteSession(orgId, eventId, sessionId, this.state.key).then((session) => {
                if (session) {
                    toast.dark('Successfuly deleted sessions')
                    toast.dark('Changes can be seen on live page')
                    this.getSessions(orgId, eventId)
                    this.setState({ checked : [] })
                } else {
                    toast.dark('Something went wrong. Please check your key.',  { transition : Slide  })
                }
            })    
        })
    };

     handleInputChange = (e, data, mentorId) => {
            
        var copiedArr = this.state.checked
        const value = data.type === "checkbox" ? data.checked : data.value;

        if (value) {
            if (!copiedArr.includes(mentorId)) {
                copiedArr.push(mentorId)
            }
        } else {
            var num = copiedArr.indexOf(mentorId)
            copiedArr.splice(num, 1);
        }
        this.setState({ checked : copiedArr })
    };

    componentDidUpdate() {
        if (this.props.sessions != this.state.sessions) {
            this.setState({ sessions : this.props.sessions })
        }
    }

    render() {

        return (
            <div>


                <Input
                    id="key"
                    action={{
                        color: 'pink',
                        position: 'left',
                        labelPosition: 'left',
                        icon: 'key',
                        background: 'black',
                        content: 'Key',
                    }}
                    actionPosition='left'
                    style={{width: '100px'}}
                    placeholder="Leave empty if the coordinator did not set key" 
                    onChange={(text) => this.setState({ key : text.target.value }) }  />
                    <br></br>
                    <br></br>
                    <Button style={{background: 'black', border: '1px solid black'}} onClick={() => this.deleteSession(this.state.orgId, this.state.eventId, this.state.checked)}> Delete Session </Button>

                <br></br>
                <br></br>
                <div style={{color: 'white'}}  className="float-right"> {this.state.checked.length} selected </div>
                <br></br>
                <br></br>
                <Row id="sessions_body">

            {
            this.state.sessions.map((mentor) => {
                return (
                    <Col style={{marginBottom: 30}} sm={4}>
                        <FadeIn delay="400">
                            <Card style={{cursor: 'pointer'}}  className="eventProjectCard">
                            
                                <CardBody>
                                <Checkbox id={mentor["_id"]} onChange={(e, data) => this.handleInputChange(e, data, mentor["_id"])} /> 

                                <p style={{marginBottom: 0}} className="eventProjectTitle"> {mentor["name"]} </p>
                                <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {mentor["link"]} </p>
                                <a class={"ui pink image label"}>
                                {mentor['category']}
                                    <div class="detail">{mentor['timeslots'].length} Total Slots</div>
                                    </a>
                                <p > {mentor["descriptions"]} </p>
                                </CardBody>
                            </Card>
                        </FadeIn>
                    </Col>
                )
                    })
                }
                        </Row>


        </div>
        )
    }
}