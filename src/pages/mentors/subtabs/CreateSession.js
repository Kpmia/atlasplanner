import React, { Component } from "react"
import AvailableTimes from 'react-available-times';
import { Slide, toast, ToastContainer } from "react-toastify";
import { Button, CardBody, Col,  Row } from "reactstrap";
import { Form, Icon, Input, Label, TextArea } from "semantic-ui-react";
import 'react-toastify/dist/ReactToastify.css';
import { Card, Step, StepLabel, Stepper } from "@material-ui/core";
import FadeIn from 'react-fade-in'
import { CreateSessionReCaptcha } from "../components/recaptcha/SubmitSession";
import { SessionUtils } from "../utils/SessionUtils";

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

    validateUserInfo() {
        if (this.state.step == 1) {
            if (this.state.name == "") {
                toast.dark('Please enter your name',{ transition : Slide  })
                return false;
            }
        }
        if (this.state.step == 2) {
            if (this.state.timeSlots.length == 0) {
                toast.dark('Please enter a timeslot',{ transition : Slide  })
                return false;
            } 
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            });
        }
        return true;
    };

    handleChange = (key, value) => {
        var copySessionBody = this.state.sessionBody
        copySessionBody[key] = value;
        this.setState({ sessionBody : copySessionBody })
    };

    goToNextStep = () => {
        if (this.validateUserInfo()) {
            this.setState({ step : this.state.step + 1 })
        };
    };

    goBackStep = () => {
        this.setState({ step : this.state.step - 1 })
    };

    showConfirmPage = (sessionId) => {
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
               
                    <div style={{border: '1px solid black', padding: 20, borderRadius: 10}}>
                    <p className="formStep" style={{marginBottom: 10}}> Choose availability </p>
                    <Label color="black"> Instructions set by coordinator </Label>
                    <p style={{marginTop: 10}}> {this.state.eventInfo["instruction"]} </p>

                    </div>

                    <br></br>

                    <Stepper activeStep={this.state.step - 1}>
                        <Step key={"hey"}>
                            <StepLabel>{"Basic Info"}</StepLabel>
                        </Step>
                        <Step key={"hey"}>
                            <StepLabel>{"Schedule"}</StepLabel>
                        </Step>
                        <Step key={"hey"}>
                            <StepLabel>{"Complete"}</StepLabel>
                        </Step>
                    </Stepper>
                
                    <br></br>

           

                    {
                        this.state.step == 1 ? 
                        <div>
                              <Form id="basicDetails">
                                    <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        value={this.state.sessionBody["name"]}
                                        label='Full Name'
                                        className="formLabel"                                       

                                        required
                                        onChange={(text) => this.handleChange("name", text.target.value) }                    
                                        placeholder='Full Name'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        value={this.state.sessionBody["link"]}
                                        label='Meeting Link or Physical Location'
                                        onChange={(text) => this.handleChange("link", text.target.value) }                    
                                        placeholder='Link'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        value={this.state.sessionBody["section"]}
                                        label='Section'
                                        onChange={(text) => this.handleChange("section", text.target.value) }                    
                                        placeholder='Section'
                                    />
                            
                                    </Form.Group>
                                </Form>
                                <br></br>
                                <Form>
                                <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        value={this.state.sessionBody["category"]}
                                        label='Category (Batch number)'
                                        onChange={(text) => this.handleChange("category", text.target.value) }                    
                                        placeholder='Category'
                                    />
                                    <br></br>
                                </Form>
                                <Form>
                                    <Form.Field
                                        id='form-textarea-control-opinion'
                                        control={TextArea}
                                        value={this.state.sessionBody["descriptions"]}
                                        onChange={(text) => this.handleChange("descriptions", text.target.value) }                    
                                        label='Anything more about this session?'
                                        placeholder='Description'
                                        />
                                    </Form>
                                    <br></br>

                                <Button className="float-right nextBtn" onClick={this.goToNextStep}> Next <Icon name="right caret"/> </Button>
                        </div>
                        :
                        this.state.step == 2?
                            <div>
                                 <div id="times">
                                    <AvailableTimes
                                        id="times"
                                        weekStartsOn="sunday"
                                        weekStartsOn={'sunday'}
                                        onChange={(selections) => this.setState({ timeSlots : selections })}         
                                        height={600}
                                        recurring={false}
                                        availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                                        availableHourRange={{ start: 0, end: 24 }}
                                    />

                                </div>
                                <br></br>
                                    <CreateSessionReCaptcha
                                        orgId={this.state.orgId}
                                        eventId={this.state.eventId}
                                        timeslots={this.state.timeSlots}
                                        sessionData={this.state.sessionBody}
                                        showConfirmPage={this.showConfirmPage}
                                    />

                                <Button className="float-left backBtn" onClick={this.goBackStep}> <Icon name="left caret"/> Back  </Button>
                        
                        </div>
                        :
                        this.state.step == 3?
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
