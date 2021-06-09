import React, { Component } from "react"
import AvailableTimes from 'react-available-times';
import { Slide, toast, ToastContainer } from "react-toastify";
import { Button, CardBody, Col,  Row } from "reactstrap";
import { Form, Input, Label, TextArea } from "semantic-ui-react";
import 'react-toastify/dist/ReactToastify.css';
import { SessionService } from "../../networking/sessions/SessionService";
import { Card } from "@material-ui/core";
import FadeIn from "react-fade-in";

export class CreateSession extends Component {
    state={
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        eventInfo: this.props.eventInfo,
        name: "",
        link: "",
        submitted: false,
        section: "",
        description: "",
        category: "",
        loading: false,
        key: "",
        timeSlots: [],
    }

submitMentor = async() => {
    if (this.state.name == "") {
        return toast.dark('Please enter your name',{ transition : Slide  })
    }

    const restructureDates = []

    this.state.timeSlots.map((timeslot) => {
        restructureDates.push({
            "day": timeslot["start"].getDay(),
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
            toast.dark('Successfully updated sessions',{ transition : Slide  })
            toast.dark('Changes have been made to the live site', { transition : Slide  })
            this.setState({ submitted : true })

            // setTimeout(() => {
            //     window.open("/c/" + this.state.orgId + "/" + this.state.eventId)
            //     }, 3500)
            } else {
                toast.dark('Key is incorrect.',{ transition : Slide  })
            }
        })
    };


    render() {

        console.log(this.state.eventI)

                   
        return (
            <div>
            <Card style={{borderRadius: '20px', border: 'none', overflow: 'scroll', boxShadow: 'none'}}>
                <CardBody style={{padding: '4.25em'}}>
                    <div style={{border: '1px solid gray', padding: 10, borderRadius: 10}}>
                    <p style={{color: 'GrayText', marginBottom: 0}}>  Added instructions </p>
                        <p> {this.state.eventInfo['instruction'].length != 0 ? this.state.eventInfo['instruction'] : "Coordinator did not add notes."} </p>
                    </div>
                    <br></br>
                    <br></br>
            <Form id="basicDetails">
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Full Name'
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
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Category (Batch number)'
                    onChange={(text) => this.setState({ category : text.target.value }) }                    
                    placeholder='Category'
                />
             
                </Form.Group>
            </Form>
              <Form>
              <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    onChange={(text) => this.setState({ description : text.target.value })}
                    label='Anything more about this session?'
                    placeholder='Description'
                    />
              </Form>
              <br></br>

            <br></br>

            <div id="times">
                    <AvailableTimes
                    id="times"
                    weekStartsOn="sunday"
                    calendars={[
                    ]}
                    onChange={(selections) =>  this.setState({ timeSlots : selections })}         
                    height={600}
                    recurring={false}
                    availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                    availableHourRange={{ start: 0, end: 24 }}
                    />
                    </div>
                    <br></br>

                    <Input  
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
                    />
                    <br></br>
                    <br></br>
                    <Button className="createEventBtn" onClick={this.submitMentor}> Submit </Button>
                    <br></br>
                    <br></br>
                    {
                        this.state.submitted ? 
                            <FadeIn>
                            <p> Thanks for submitting! Your changes are now live on <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => window.open(window.location.origin + '/c/' + this.state.orgId + '/' + this.props.eventId)}> {window.location.origin + '/c/' + this.state.orgId + '/' + this.state.eventId}! </span></p>
                            </FadeIn>
                            : null
                    }
                    </CardBody>
            </Card>
            </div>
        );
      }
    }
