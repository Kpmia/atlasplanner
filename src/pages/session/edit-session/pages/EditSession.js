import { Slide } from "@material-ui/core";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Icon, Input, TextArea, Form } from "semantic-ui-react";
import { LoadingPage } from "../../../LoadingPage";
import CalendarScheduler from "../../../mentors/components/calendars/edit-session/CalendarScheduler";
import { DeleteSessionModal } from "../../../mentors/components/modals/DeleteSessionModal";
import { SessionService } from "../../../networking/sessions/SessionService";
import { PageNotFound } from "../../../PageNotFound";

class EditSession extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.eventId = ""
        this.sessionId = ""
        this.state={
            sessionInfo: [],
            timeslots: [],
            isLoading: true,
            pageFound: false
        }
    }

    setTimeslots = (timeslots) => {
        var copiedSession = this.state.sessionInfo
        copiedSession["timeslots"] = timeslots;
        this.setState({ sessionInfo : copiedSession }); 
    }

    handleSelect = (key, value) => {
        var copiedSession = this.state.sessionInfo
        copiedSession[key] = value;
        this.setState({ sessionInfo : copiedSession });
    };

    updateUserInfo = () => {
        const session = { "session": this.state.sessionInfo }

        SessionService.updateSession(this.state.sessionInfo["_orgId"], this.state.sessionInfo["_eventId"], this.state.sessionInfo["_id"],session).then((session) => {
            toast.dark('Successfully updated the session', { position: "top-center", transition: Slide })
        })
    };

    checkSession = async(orgId, eventId, sessionId) => {
        await SessionService.sessionExists(orgId, eventId, sessionId).then((session) => {
            if (session) {
                this.setState({ sessionInfo : session })
            } else {
                this.setState({ pageFound : true })
            }
        });
    };

    isLoading = () => {
        this.setState({ isLoading : false })
    };

    componentDidMount() {
        this.orgId = this.props.match.params.orgId
        this.eventId = this.props.match.params.eventId
        this.sessionId = this.props.match.params.sessionId

        this.checkSession(this.orgId, this.eventId, this.sessionId).then(() => {
            this.isLoading();
        });
    }

    render() {
        console.log(this.state.sessionInfo)
        if (this.state.isLoading) {
            return <LoadingPage />
        }
        if (this.state.pageFound) {
            return <PageNotFound />
        }

        return (
            <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                    <CardBody style={{padding: '3.25em'}}>
                    <div>

                    <a className="formStep"> {this.state.sessionInfo["name"]} </a>
                    <br></br>
                    <br></br>

                    <Row>
                        <Col>

                          <Form id="basicDetails">
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Full Name'
                    value={this.state.sessionInfo["name"]}
                    required
                    onChange={(text) => this.handleSelect("name", text.target.value)}                    
                    placeholder={this.state.sessionInfo["name"]}
                />
                   <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    value={this.state.sessionInfo["link"]}
                    label='Location'
                    onChange={(text) => this.handleSelect("link", text.target.value)}                    
                    placeholder='Link'
                />
                 <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Section'
                    value={this.state.sessionInfo["section"]}
                    onChange={(text) => this.handleSelect("section", text.target.value)}                    
                    placeholder='Section'
                />
             
                    </Form.Group>
                    </Form>
                    <Form>
                            <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Category'
                            value={this.state.sessionInfo["category"]}
                            onChange={(text) => this.handleSelect("category", text.target.value)}                    
                            placeholder='Category'
                        />
                    </Form>
                    <br></br>
                    <Form>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        value={this.state.sessionInfo["descriptions"]}
                        onChange={(text) => this.handleSelect("descriptions", text.target.value)}                    
                        label='Anything more about this session?'
                        placeholder='Description'
                        />
                    </Form>

                    <hr />

                    <Row style={{justifyContent: 'space-evenly'}}>
                            <Form>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input} 
                                    value={this.state.sessionInfo["box_a"]}
                                    label='Linkedin Profile Link'
                                    onChange={(text) => this.handleSelect("box_a", text.target.value) }                    
                                    placeholder='Link'
                                    />
                            </Form>
                            <Form>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input} 
                                    value={this.state.sessionInfo["box_b"]}
                                    label='Industries/Markets'
                                    onChange={(text) => this.handleSelect("box_b", text.target.value) }                    
                                    placeholder='Markets you may specialize in'
                                    />
                            </Form>
                            <Form>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input} 
                                    value={this.state.sessionInfo["box_c"]}
                                    label='Skills to assist founders'
                                    onChange={(text) => this.handleSelect("box_c", text.target.value) }                    
                                    placeholder='Skills'
                                    />
                            </Form>
                            </Row>
                    </Col>
                        <Col>
                            <div id="times">
                                <CalendarScheduler setTimeslots={this.setTimeslots} events={this.state.sessionInfo} />
                            </div>
                            <br></br>
                            <Button style={{marginLeft: '10px'}} className="float-right nextBtn delete-session-btn" onClick={() => this.updateUserInfo()}>
                                <Icon name="save" /> Save </Button>
                            <DeleteSessionModal chooseSession={this.chooseSession} session={this.state.sessionInfo}> <Button className="float-right delete-session-btn"> <Icon name="trash"/> Delete </Button>  </DeleteSessionModal>
                        </Col>
                    </Row>

                    </div>
                    </CardBody>
                    </Card>

                    <ToastContainer />
            </div>
        )
    }
}

export default EditSession;