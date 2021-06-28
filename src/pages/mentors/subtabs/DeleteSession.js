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
                    this.getSessions(orgId, eventId)
                    this.setState({ checked : [] })
                } else {
                    toast.dark('Something went wrong. Please check your key.',  { transition : Slide  })
                }
            }).then(() => {
             
            })   
        })
        toast.dark('Successfuly deleted sessions')
        toast.dark('Changes can be seen on live page')
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
            <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                <CardBody style={{padding: '3.25em'}}>
                <div style={{border: '1px solid rgb(29, 27, 27) ', padding: 20, borderRadius: 10}}>
                    <p className="formStep" style={{marginBottom: 10}}> Delete Sessions </p>
                        <p className="formStepDesc"> Delete session by clicking on the checkbox of each card & clicking on the button. </p>
                    </div>                    
                    <br></br>
                    <br></br>
                    <Button disabled={this.state.checked.length == 0 ? true : false} style={{background: 'black', float: 'right', border: '1px solid black'}} onClick={() => this.deleteSession(this.state.orgId, this.state.eventId, this.state.checked)}> Delete Session </Button>

                <br></br>
                <br></br>
                <div style={{color: 'black'}}  className="float-right"> {this.state.checked.length} selected </div>
                <br></br>
                <br></br>
            
                <Row id="sessions_body">

            {
            this.state.sessions.map((mentor) => {
                return (
                    <Col style={{marginBottom: 30}} sm={4}>
                        <FadeIn delay="400">
                            <Card style={{cursor: 'pointer'}}  className="formCard">
                            
                                <CardBody>
                                <Checkbox id={mentor["_id"]} onChange={(e, data) => this.handleInputChange(e, data, mentor["_id"])} /> 

                                <p style={{marginBottom: 0}} className="eventProjectTitle"> {mentor["name"]} </p>
                                <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {mentor["link"]} </p>                               
                                <p > {mentor["descriptions"]} </p>
                                </CardBody>
                            </Card>
                        </FadeIn>
                    </Col>
                )
                    })
                }
                        </Row>
            </CardBody>
            </Card>


        </div>
        )
    }
}