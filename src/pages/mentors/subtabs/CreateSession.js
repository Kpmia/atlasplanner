import React, { Component } from "react"
import AvailableTimes from 'react-available-times';
import { Slide, toast, ToastContainer } from "react-toastify";
import { Button, CardBody, Col,  Row } from "reactstrap";
import { Form, Icon, Input, Label, TextArea } from "semantic-ui-react";
import 'react-toastify/dist/ReactToastify.css';
import { SessionService } from "../../networking/sessions/SessionService";
import { Card, Step, StepLabel, Stepper } from "@material-ui/core";
import moment from "moment"
import uuid from "react-uuid";
import FadeIn from 'react-fade-in'

export class CreateSession extends Component {
    state={
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        eventInfo: this.props.eventInfo,
        name: "",
        link: "",
        sessionId: "",
        step: 1,
        section: "",
        description: "",
        category: "",
        loading: false,
        key: "",
        timeSlots: [],
    }

getCurrWeek(date) {
    var firstday = moment(date).startOf('week').toDate()
    var lastday   = moment(date).endOf('week').toDate();

    const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[firstday.getMonth()] + " " + firstday.getDate() + ", " + firstday.getFullYear() +  " - " + monthNames[lastday.getMonth()] + " " + lastday.getDate() + ", " + firstday.getFullYear()  
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
        this.submitMentor();
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }
    return true;
};

goToNextStep = () => {
    if (this.validateUserInfo()) {
        this.setState({ step : this.state.step + 1 })
    };
};

goBackStep = () => {
    this.setState({ step : this.state.step - 1 })
};

getInstruction = () => {
    if (this.state.step == 1) {
        return {title: "Create session",
            message: "Fill out the form with your basic information. A name is required."}
    }
    if (this.state.step == 2) {
        return {"title": "Schedule",
                "message": "Select timeslots that you're available on. Drag the end of each timeslot downward or upward with your mouse. "}
    }
    if (this.state.step == 3) {
        return {"title": "Finished!",
        "message": ""}
    }
};

resetInfo = () => {
    this.setState({ step  : 1 })
    this.setState({ name : "" })
    this.setState({ link : "" })
    this.setState({ section : "" })
    this.setState({ category : "" })
    this.setState({ descriptions : "" })
}

submitMentor = async() => {

    const restructureDates = {}

    this.state.timeSlots.map((timeslot) => {
        var currWeek = this.getCurrWeek(timeslot["start"])
        if (restructureDates[currWeek] == undefined) {
            restructureDates[currWeek] = []
        }

        restructureDates[currWeek].push({
            "day": timeslot["start"].getDay(),
            "_id": uuid().toString(),
            "actual_start": timeslot["start"],
            "actual_end": timeslot["end"],
            "start": timeslot["start"].toTimeString(),
            "end": timeslot["end"].toTimeString(),
            "filled": {}
        })
    })

    const session = { 
        "section": this.state.section,
        "name": this.state.name,
        "link": this.state.link,
        "category": this.state.category.toLocaleLowerCase(),
        "descriptions": this.state.description,
        "timeslots": restructureDates,
        "key": this.state.key
    }

    

    SessionService.createSession(this.state.orgId, this.state.eventId, session).then((session) => {
        if (session) {
            this.setState({ sessionId : session["_id"] })
        } else {
                toast.dark('Key is incorrect.',{ transition : Slide  })
            }
        })
    };


    render() {

                   
        return (
            <div>

            
            <Card className="formCard">
                <CardBody style={{padding: '3.25em'}}>
               
                    <div style={{border: '1px solid black', padding: 20, borderRadius: 10}}>
                    <p className="formStep" style={{marginBottom: 10}}> {this.getInstruction()["title"]} </p>
                        <p style={{color: 'black', fontSize: 14, fontFamily: 'Inter', lineHeight: '146%'}}> {this.getInstruction()["message"]} </p>
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
                                        value={this.state.name}
                                        label='Full Name'
                                        className="formLabel"                                       

                                        required
                                        onChange={(text) => this.setState({ name : text.target.value }) }                    
                                        placeholder='Full Name'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='External Links or Location'
                                        onChange={(text) => this.setState({ link : text.target.value }) }                    
                                        placeholder='Link'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='Section'
                                        onChange={(text) => this.setState({ section : text.target.value }) }                    
                                        placeholder='Section'
                                    />
                            
                                    </Form.Group>
                                </Form>
                                <br></br>
                                <Form>
                                <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='Category (Batch number)'
                                        onChange={(text) => this.setState({ category : text.target.value }) }                    
                                        placeholder='Category'
                                    />
                                    <br></br>
                                </Form>
                                <Form>
                                    <Form.Field
                                        id='form-textarea-control-opinion'
                                        control={TextArea}
                                        onChange={(text) => this.setState({ description : text.target.value})}                    
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
                                        calendars={[
                                        
                                        ]}
                                        weekStartsOn={'sunday'}
                                        onChange={(selections) => this.setState({ timeSlots : selections })}         
                                        height={600}
                                        recurring={false}
                                        availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                                        availableHourRange={{ start: 0, end: 24 }}
                                    />


                                        {/* <Input  
                                            id="key"
                                            action={{
                                                color: 'pink',
                                                position: 'left',
                                                labelPosition: 'left',
                                                icon: 'key',
                                                content: 'Key',
                                            }}
                                            actionPosition='left'
                                            style={{width: '100%'}}
                                            placeholder="Leave empty if the coordinator did not set key" 
                                            onChange={(text) => this.setState({ key : text.target.value }) }  
                                        /> */}
                                </div>
                                <br></br>
                                <Button className="float-right nextBtn" onClick={this.goToNextStep}> Next <Icon name="right caret"/> </Button>
                                <Button className="float-left backBtn" onClick={this.goBackStep}> <Icon name="left caret"/> Back  </Button>
                        
                        </div>
                        :
                        this.state.step == 3?
                        <div>
                            <FadeIn>
                                    <p className="finalMessageSession"> You can find your session live on <span style={{textDecoration: 'underline', cursor: 'pointer', fontWeight: 600}} onClick={() => window.open(window.location.origin + '/c/' + this.state.orgId + '/' + this.props.eventId)}> {window.location.origin + '/c/' + this.state.orgId + '/' + this.state.eventId} </span></p>
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
