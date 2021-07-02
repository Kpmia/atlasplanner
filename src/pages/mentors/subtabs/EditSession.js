import React, { Component } from "react";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";
import { Form, Icon, Input, TextArea } from "semantic-ui-react";
import history from "../../history";
import { SessionService } from "../../networking/sessions/SessionService";
import { Slide, toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import { ShareSessionModal } from "../components/modals/ShareSessionModal";
import CalendarScheduler from "../components/calendars/edit-session/CalendarScheduler";

export class EditSession extends Component {
    state = {
        sessions: this.props.sessions,
        chosenSession: [],
        copiedSession: [],
        timeslots: [],
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


    isLoading() {
        setTimeout(() => {
            this.setState({ isLoading : false })
        }, 1500)
    }

    

    updateUserInfo = () => {
        
        var sessionData = this.state.copiedSession
        sessionData["timeslots"] = this.state.timeslots
    
        const session = {
            "session": sessionData
        }

        console.log(sessionData)

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

    setTimeslots = (timeslots) => {
        this.setState({ timeslots : timeslots })
    };

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

        return (
            <div>
                <row>
                </row>

                {
                    this.state.chosenSession.length != 0 ?
                    
                    <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                    <CardBody style={{padding: '3.25em'}}>
                        <Button style={{width: '300px'}} className="backBtn" onClick={this.goBack}> <Icon name="caret left" /> Back</Button>
                    <div>
                    <br></br>
                    <br></br>

                    <a className="formStep"> {this.state.chosenSession["name"]} </a>
                    <br></br>
                    <br></br>

                    <Row>
                        <Col>

                          <Form id="basicDetails">
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='A'
                    value={this.state.copiedSession["name"]}
                    required
                    onChange={(text) => this.handleSelect("name", text.target.value)}                    
                    placeholder={"A"}
                />
                   <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    value={this.state.copiedSession["link"]}
                    label='B'
                    onChange={(text) => this.handleSelect("link", text.target.value)}                    
                    placeholder={"B"}
                />
                 <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='C'
                    value={this.state.copiedSession["section"]}
                    onChange={(text) => this.handleSelect("section", text.target.value)}                    
                    placeholder={"C"}
                />
              
             
                    </Form.Group>
                    </Form>
                    <Form>
                            <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='D'
                            value={this.state.copiedSession["category"]}
                            onChange={(text) => this.handleSelect("category", text.target.value)}                    
                            placeholder='D'
                        />
                    </Form>
                    <br></br>
                    <Form>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        value={this.state.copiedSession["descriptions"]}
                        onChange={(text) => this.handleSelect("descriptions", text.target.value)}                    
                        label='E'
                        placeholder='E'
                        />
                    </Form>
                    </Col>
                        <Col>
                            <div id="times">
                                <CalendarScheduler setTimeslots={this.setTimeslots} events={this.state.chosenSession} />
                            </div>
                            <br></br>
                            <Button className="float-right nextBtn" onClick={() => this.updateUserInfo()}> Submit </Button>
                        </Col>
                    </Row>

                    </div>
                    </CardBody>
                    </Card>
                  
                    : 
                    <div>
                          <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                <CardBody style={{padding: '3.25em'}}>
                <div>
                    <p className="formStep" style={{marginBottom: 10}}> Edit Sessions </p>
                        <p className="formStepDesc"> Edit sessions by clicking on any card & editing the times or information. </p>
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