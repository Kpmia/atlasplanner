import React, { Component } from "react";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";
import { Form, Icon, Input, TextArea } from "semantic-ui-react";
import history from "../../history";
import AvailableTimes from "react-available-times";
import moment from "moment"
import { SessionService } from "../../networking/sessions/SessionService";
import uuid from "react-uuid";
import { Slide, toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import { ShareSessionModal } from "../components/modals/ShareSessionModal";

export class EditSession extends Component {
    state = {
        sessions: this.props.sessions,
        chosenSession: [],
        copiedSession: [],
        chosenTimeslots: [],
        userExists: true,
        isLoading: true
    }

    orgId = this.props.orgId
    eventId = this.props.eventId
    getSessions = this.props.getSessions

    addQuery = (key, value) => {
        let pathname = window.location.pathname; 
        let searchParams = new URLSearchParams(window.location.search); 
        searchParams.set(key, value);
        history.push({
                pathname: pathname,
                search: searchParams.toString()
        });
    };

    validateUser = async(sessionId) => {
        return this.state.sessions.some((session) => {
            if (session["_id"] == sessionId) {
                return true;
            }
        })
    };
      
    chooseSession = (session) => {
        this.addQuery("user", session["_id"]);
        this.setState({ chosenSession : session })
        this.setState({ copiedSession : JSON.parse(JSON.stringify(session))})
        this.setState({ chosenTimeslots : JSON.parse(JSON.stringify(session["timeslots"])) })
        this.isLoading()
    };

    goBack = () => {
        this.setState({ chosenSession : [] })
        this.setState({ copiedSession : [] })
        this.setState({ chosenTimeslots : [] })
        this.addQuery("user", "")
    };

    handleSelect = (key, value) => {
        var session = this.state.copiedSession
        session[key] = value
        this.setState({ copiedSession :  session })
    };

    getCurrWeek(date) {
        var firstday = moment(date).startOf('week').toDate()
        var lastday   = moment(date).endOf('week').toDate();
    
        const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
        ];
    
        return monthNames[firstday.getMonth()] + " " + firstday.getDate() + ", " + firstday.getFullYear() +  " - " + monthNames[lastday.getMonth()] + " " + lastday.getDate() + ", " + firstday.getFullYear()  
    }

    editTimeslot = (times) => {
        var restructureDates = {}

        times.map((timeslot, idx) => {
            var currWeek = this.getCurrWeek(timeslot["start"])
            if (restructureDates[currWeek] == undefined) {
                restructureDates[currWeek] = []
            }
            var times = {
                "day": timeslot["start"].getDay(),
                "_id": timeslot["id"],
                "actual_start": timeslot["start"],
                "actual_end": timeslot["end"],
                "start": new Date(timeslot["start"]),
                "end": new Date(timeslot["end"]),
                "filled": timeslot["filled"]
            }

            restructureDates[currWeek].push(times)
        })

        this.setState({ chosenTimeslots : restructureDates })
    }

    isLoading() {
        setTimeout(() => {
            this.setState({ isLoading : false })
        }, 1500)
    }

    updateUserInfo = () => {

        var adjustTimeslots = {}


            Object.keys(this.state.copiedSession["timeslots"]).map((session) => {

                this.state.copiedSession["timeslots"][session].map((sessionTime, id) => {

                    Object.keys(this.state.chosenTimeslots).map((week) => {

                        this.state.chosenTimeslots[week].map((time, idx) => {
                            if (id <= idx) {
                                if (adjustTimeslots[week] == undefined) {
                                    adjustTimeslots[week] = []
                                }
                                adjustTimeslots[week][idx] = JSON.parse(JSON.stringify(time))
                                console.log(sessionTime["actual_start"], time["actual_start"])
                                if (JSON.parse(JSON.stringify(sessionTime["actual_start"])) == JSON.parse(JSON.stringify(time["actual_start"]))) {
                                    adjustTimeslots[week][idx]["_id"] = sessionTime["_id"]
                                    console.log(sessionTime["filled"])
                                    adjustTimeslots[week][idx]["filled"] = sessionTime["filled"]
                                }
                                adjustTimeslots[week][idx]["start"] = new Date(JSON.parse(JSON.stringify(time["actual_start"]))).toTimeString()
                                adjustTimeslots[week][idx]["end"] = new Date(JSON.parse(JSON.stringify(time["actual_end"]))).toTimeString()
                            }
                        })
                    })
                })
            })

            Object.keys(adjustTimeslots).map((times) => {
                adjustTimeslots[times].map((time) => {
                    if (time["filled"] == undefined) {
                        time["filled"] = {}
                    }
                    if (!time["_id"]) {
                        time["_id"] = uuid().toString()
                    }
                })
            })

            var sessionData = this.state.copiedSession

            sessionData["timeslots"] = adjustTimeslots
        
            const session = {
                "session": sessionData
            }

            SessionService.updateSession(this.state.copiedSession["_orgId"], this.state.copiedSession["_eventId"], this.state.copiedSession["_id"], session).then((session) => {
                toast.dark('Successfully updated the session', { position: "top-center", transition: Slide })
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
                this.goBack()
        })

    };

    componentDidMount() {

        const urlParams = new URLSearchParams(window.location.search);
        this.validateUser(urlParams.get('user')).then((user) => {
            if (user) {
                this.state.sessions.map((session) => {
                    if (urlParams.get('user') == session["_id"]) {
                        this.chooseSession(session)
                    }
                })
            } else {
                this.setState({ userExists : false })
                this.isLoading()
            }
        })
    }

    componentDidUpdate() {
        if (this.props.sessions != this.state.sessions) {
            this.setState({ sessions : this.props.sessions })
            const urlParams = new URLSearchParams(window.location.search);
        this.validateUser(urlParams.get('user')).then((user) => {
            if (user) {
                this.state.sessions.map((session) => {
                    if (urlParams.get('user') == session["_id"]) {
                        this.chooseSession(session)
                    }
                })
            } else {
                this.setState({ userExists : false })
                this.isLoading()
            }
        })
        }
    }

    render() {

        if (this.state.isLoading) {
            return <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Row style={{justifyContent: 'center'}}>
                <CircularProgress color="secondary" />
                </Row>
            </div>
        }

        const reformatTimeslots = []

        if (this.state.chosenTimeslots) {
            Object.keys(this.state.chosenTimeslots).map((time) => {
                this.state.chosenTimeslots[time].map((slot, idx) => {
                    var startObj = new Date(slot["actual_start"])
                    var endObj = new Date(slot["actual_end"])
                    slot["start"] = startObj
                    slot["end"] = endObj
                    reformatTimeslots.push(slot)
                })
            })
        }

        return (
            <div>
                <row>
                </row>

                {
                    this.state.chosenSession.length != 0 ?
                    <Card className="formCard">
                    <CardBody style={{padding: '3.25em'}}>
                        <Button style={{width: '300px'}} className="backBtn" onClick={this.goBack}> <Icon name="caret left" /> Back</Button>
                    <div>
                    <br></br>
                    <br></br>

                    <a className="formStep"> {this.state.chosenSession["name"]} </a>
                    <br></br>
                    <br></br>

                          <Form id="basicDetails">
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Full Name'
                    value={this.state.copiedSession["name"]}
                    required
                    onChange={(text) => this.handleSelect("name", text.target.value)}                    
                    placeholder={this.state.copiedSession["name"]}
                />
                   <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    value={this.state.copiedSession["link"]}
                    label='External Links or Location'
                    onChange={(text) => this.handleSelect("link", text.target.value)}                    
                    placeholder='Link'
                />
                 <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Section'
                    value={this.state.copiedSession["section"]}
                    onChange={(text) => this.handleSelect("section", text.target.value)}                    
                    placeholder='Section'
                />
              
             
                    </Form.Group>
                    </Form>
                    <Form>
                            <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Category (Batch number)'
                            value={this.state.copiedSession["category"]}
                            onChange={(text) => this.handleSelect("category", text.target.value)}                    
                            placeholder='Category'
                        />
                    </Form>
                    <br></br>
                    <Form>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        value={this.state.copiedSession["descriptions"]}
                        onChange={(text) => this.handleSelect("descriptions", text.target.value)}                    
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
                                calendars={[]}
                                weekStartsOn={'sunday'}
                                onChange={(selections) => this.editTimeslot(selections)}         
                                height={600}
                                initialSelections={reformatTimeslots}
                                recurring={false}
                                availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                                availableHourRange={{ start: 0, end: 24 }}
                            />
                        </div>
                        <br></br>
                        <Button className="float-right nextBtn" onClick={() => this.updateUserInfo()}> Submit </Button>
                    </div>
                    </CardBody>
                    </Card>
                  
                    : 
                    <div>
                          <Card className="formCard">
                <CardBody style={{padding: '3.25em'}}>
                <div style={{border: '1px solid black', padding: 20, borderRadius: 10}}>
                    <p className="formStep" style={{marginBottom: 10}}> Edit Sessions </p>
                        <p style={{color: 'black', fontSize: 14, fontFamily: 'Inter', lineHeight: '146%'}}> Edit sessions by clicking on any card & editing the times or information. </p>
                    </div>
                    <br></br>

                         <Row id="sessions_body">
                        {
                            this.state.sessions.map((mentor) => {
                                return (
                                    <Col style={{marginBottom: 30}} sm={4}>
                                        <Card style={{cursor: 'pointer'}}  className="formCard">
                                        <ShareSessionModal orgId={this.orgId} eventId = {this.eventId} userId={mentor["_id"]} />
                                            <CardBody onClick={() => this.chooseSession(mentor)}>
                                            <p style={{marginBottom: 0}} className="editSessionCardTitle"> {mentor["name"]} </p>
                                            <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {mentor["link"]} </p>
                                            <a style={{background: 'black', backgroundColor: 'black', border: 'black', color: 'white', borderRadius: '2px'}} class={"ui image label"}>
                                            {mentor['category']}
                                                <div style={{background: 'black', backgroundColor: 'black', color: 'white'}} class="detail">{mentor['timeslots'].length} Total Slots</div>
                                                </a>
                                            <p style={{fontWeight: 'bold', marginTop: 5}}> {mentor["section"]} </p>
                                            <p > {mentor["descriptions"]} </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                                })
                            }
                            </Row>
                        </CardBody>
                        </Card>


                    </div>

                        
                }
            </div>

        )
    }
}