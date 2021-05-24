import React from "react"
import AvailableTimes from 'react-available-times';
import { Slide, toast, ToastContainer } from "react-toastify";
import { Button, Col, Row } from "reactstrap";
import { Form, Input, TextArea } from "semantic-ui-react";
import { db } from "../firebase";
import 'react-toastify/dist/ReactToastify.css';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import { SessionService } from "../networking/sessions/SessionService";

class MentorForm extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.eventId = ""
        this.uid= ""
        this.state={
            name: "",
            link: "",
            section: "",
            description: "",
            timeSlots: [],
        }
    }

    submitMentor = async() => {

        if (this.state.name == "") {
            return toast.dark('Please enter your name',{ transition : Slide  })
        }
        if (this.state.timeSlots) {
            if (this.state.timeSlots.length == 0) {
                return toast.dark('Please enter your timeslots',{ transition : Slide  })
            }
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
            "descriptions": this.state.description,
            "timeslots": restructureDates
        }

        SessionService.createSession(this.props.match.params.orgId, this.props.match.params.eventId, session).then((session) => {
            if (session) {
                toast.dark('Updated sessions!',{ transition : Slide  })
                toast.dark('Now redirecting you back to all sessions', { transition : Slide  })

                setTimeout(() => {
                    window.open("/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)
                    }, 3500)
                }
            })
        };
    
      render() {
                   
        return (
            <div className="eventBody">
                    <div className="eventHeader">
                        <div className="container">
                            <img style={{marginTop: 20}} src={require('../../assets/icon.svg')} />
                        </div>
                </div>  

            <div style={{paddingTop: 80}} className="eventPageBody container">

                <br></br>
          
            <p className="eventWhiteHeaderTitle" style={{marginBottom: 5, marginTop: 25}}>{this.props.match.params.eventId}</p>
            <p className="eventWhiteHeaderTitle" style={{marginBottom: 5, fontSize: 16}}>{this.props.match.params.orgId}</p>

            <Row style={{marginLeft: 2}}>
            <Input style={{marginRight: 30}} placeholder="Section (Optional)" onChange={(text) => this.setState({ section : text.target.value }) }  />
              <Input style={{marginRight: 30}} placeholder="Full Name" onChange={(text) => this.setState({ name : text.target.value }) }  />
              <Input placeholder="Link (Optional)" style={{marginRight: 30}}  onChange={(text) => this.setState({ link : text.target.value })}  />
            
              </Row>
              <br></br>
              <Form>
                <TextArea  placeholder="Description" onChange={(text) => this.setState({ description : text.target.value })} placeholder='Tell us more' />
            </Form>
            <br></br>

                    <AvailableTimes
                    weekStartsOn="monday"
                    onClick={(date) => console.log(date)}
                    calendars={[
                        {
                        id: 'work',
                        title: 'Work',
                        foregroundColor: '#ff00ff',
                        backgroundColor: '#f0f0f0',
                        selected: true,
                        },
                    ]}
                    onChange={(selections) => this.setState({ timeSlots : selections })}         
                    height={600}
                    recurring={false}
                    availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                    availableHourRange={{ start: 0, end: 24 }}
                    />
                    <br></br>
                    <Button className="createEventBtn float-right" onClick={this.submitMentor}> Submit </Button>

            </div>
            <ToastContainer />
          </div>
        );
      }
}

export default MentorForm;