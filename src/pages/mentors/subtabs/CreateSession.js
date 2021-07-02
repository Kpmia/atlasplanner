import React, { Component } from "react"
import { Button, CardBody, Col,  Row } from "reactstrap";
import { Form, Icon, Input, Label, TextArea } from "semantic-ui-react";
import 'react-toastify/dist/ReactToastify.css';
import { Card } from "@material-ui/core";
import FadeIn from 'react-fade-in'
import { CreateSessionReCaptcha } from "../components/recaptcha/SubmitSession";
import CalendarScheduler from "../components/calendars/create-session/CalendarScheduler";

export class CreateSession extends Component {
    state={
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        sessionBody: {
            name: "",
            link: "",
            section: "",
            descriptions: "",
            category: "",
            key: "",
        },
        eventInfo: this.props.eventInfo,
        sessionId: "",
        timeSlots: [],
        step: 1,
        loading: false,
    }

    handleChange = (key, value) => {
        var copySessionBody = this.state.sessionBody
        copySessionBody[key] = value;
        this.setState({ sessionBody : copySessionBody })
    };

    goToNextStep = () => {
        this.setState({ step : this.state.step + 1 })
    };

    goBackStep = () => {
        this.setState({ step : this.state.step - 1 })
    };

    setTimeslots = (timeslots) => {
        this.setState({ timeSlots : timeslots })
    };

    showConfirmPage = (sessionId) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        this.setState({ sessionId : sessionId })
        this.goToNextStep()
    }

    resetInfo = () => {
        this.setState({ step  : 1 })
        this.setState({ timeSlots : [] })
        this.setState({ sessionBody : {
                name: "",
                link: "",
                sessionId: "",
                section: "",
                description: "",
                category: "",
                key: "",
            }
        })
    }

    render() {
                   
        return (
            <div>
            <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                <CardBody style={{padding: '3.25em'}}>
               
                    <div style={{borderBottom: '1px solid rgb(29 27 27 / 17%) '}}>
                        <p className="formStep" style={{marginBottom: 10}}> Add your availability </p>
                    </div>
                
                    <br></br>

           

                    {
                        this.state.step == 1 ? 
                        <div>
                            <Row>
                                <Col>
                              <Form id="basicDetails">
                                    <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        value={this.state.sessionBody["name"]}
                                        label='A'
                                        className="formLabel"                                       
                                        required
                                        onChange={(text) => this.handleChange("name", text.target.value) }                    
                                        placeholder='A'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        value={this.state.sessionBody["link"]}
                                        label='B'
                                        onChange={(text) => this.handleChange("link", text.target.value) }                    
                                        placeholder='B'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        value={this.state.sessionBody["section"]}
                                        label='C'
                                        onChange={(text) => this.handleChange("section", text.target.value) }                    
                                        placeholder='C'
                                    />
                            
                                    </Form.Group>
                                </Form>
                                <br></br>
                                <Form>
                                <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                
                                        value={this.state.sessionBody["category"]}
                                        label='D'
                                        onChange={(text) => this.handleChange("category", text.target.value) }                    
                                        placeholder='D'
                                    />
                                    <br></br>
                                </Form>
                                <Form>
                                    <Form.Field
                                        id='form-textarea-control-opinion'
                                        control={TextArea}
                                        value={this.state.sessionBody["descriptions"]}
                                        onChange={(text) => this.handleChange("descriptions", text.target.value) }                    
                                        label='E'
                                        placeholder='E'
                                        />
                                    </Form>
                                    </Col>

                                    <br></br>
                                    <Col>
                                        <CalendarScheduler
                                            setTimeslots={this.setTimeslots}
                                        />
                                
                                    </Col>
                            </Row>
                            <br></br>

                            <CreateSessionReCaptcha
                                orgId={this.state.orgId}
                                eventId={this.state.eventId}
                                timeslots={this.state.timeSlots}
                                sessionData={this.state.sessionBody}
                                showConfirmPage={this.showConfirmPage}
                            />
                        </div>
                        :
                        this.state.step == 2?
                          
                        <div>
                            <FadeIn>
                                    <p className="finalMessageSession"> You can find your session live on <span style={{textDecoration: 'underline', cursor: 'pointer', fontWeight: 600}} onClick={() => window.open(window.location.origin + '/c/' + this.state.orgId + '/' + this.props.eventId)}> {window.location.origin + '/c/' + this.state.orgId + '/' + this.state.eventId} </span>.</p>
                                    <p className="finalMessageSession">  Other options? <span onClick={() => window.location.href = '/editsession/' + this.state.orgId + '/' + this.state.eventId + '?tab-name=edit-session&user=' + this.state.sessionId} style={{textDecoration: 'underline', fontWeight: 400, cursor: 'pointer'}}> Edit</span> your session or <span onClick={this.resetInfo} style={{textDecoration: 'underline', fontWeight: 400, cursor: 'pointer'}}> create</span> another one.</p>
                            </FadeIn>
                        </div>
                        :
                       
                        null
                    }
                    <br></br>

                 
          
                        <br></br>
                        <br></br>
                    </CardBody>
                </Card>
            </div>
        );
      }
    }
