import { Slide } from "@material-ui/core";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Icon, Input, TextArea, Form } from "semantic-ui-react";
import CalendarScheduler from "../../../../mentors/components/calendars/edit-session/CalendarScheduler";
import { DeleteSessionModal } from "../../../../mentors/components/modals/DeleteSessionModal";
import { SessionService } from "../../../../networking/sessions/SessionService";
import { DeleteProfileModal } from "../../components/modals/DeleteProfileModal";
import { PreviewModal } from "../../components/modals/PreviewModal";

export class EditSession extends React.Component {
    orgId = this.props.orgId
    eventId = this.props.eventId
    sessionId = this.props.sessionId
    state={
        sessionInfo: this.props.sessionInfo,
        copiedSessionInfo: JSON.parse(JSON.stringify(this.props.sessionInfo)),
        timeslots: [],
        isLoading: true,
        pageFound: false
    }

    setTimeslots = (timeslots) => {
        var copiedSession = this.state.copiedSessionInfo
        copiedSession["timeslots"] = timeslots;
        this.setState({ copiedSession : copiedSession }); 
    }

    handleSelect = (key, value) => {
        var copiedSession = this.state.copiedSessionInfo
        copiedSession[key] = value;
        this.setState({ copiedSession : copiedSession }); 
    };

    updateUserInfo = async() => {
        const session = { "session": this.state.copiedSessionInfo }

        await SessionService.updateSession(this.state.sessionInfo["_orgId"], this.state.sessionInfo["_eventId"], this.state.sessionInfo["_id"],session).then((session) => {
            this.setState({ sessionInfo : this.state.copiedSessionInfo })
            toast.dark('Successfully updated the session')
        })
    };

    componentDidMount() {

    }

    componentDidUpdate() {
        if (this.props.sessionInfo != this.state.sessionInfo) {
            this.setState({ sessionInfo : this.props.sessionInfo })
            this.setState({ copiedSessionInfo : JSON.parse(JSON.stringify(this.props.sessionInfo)) })
        };
    }

    render() {

        return (
            <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                    <CardBody style={{padding: '3.25em'}}>
                    <div>

                    <a className="formStep"> {this.state.copiedSessionInfo["name"]} </a>
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
                    value={this.state.copiedSessionInfo["name"]}
                    required
                    onChange={(text) => this.handleSelect("name", text.target.value)}                    
                    placeholder={this.state.sessionInfo["name"]}
                />
                   <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    value={this.state.copiedSessionInfo["link"]}
                    label='Location'
                    onChange={(text) => this.handleSelect("link", text.target.value)}                    
                    placeholder='Link'
                />
                 <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Section'
                    value={this.state.copiedSessionInfo["section"]}
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
                            value={this.state.copiedSessionInfo["category"]}
                            onChange={(text) => this.handleSelect("category", text.target.value)}                    
                            placeholder='Category'
                        />
                    </Form>
                    <br></br>
                    <Form>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        value={this.state.copiedSessionInfo["descriptions"]}
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
                                    value={this.state.copiedSessionInfo["box_a"]}
                                    label='Linkedin Profile Link'
                                    onChange={(text) => this.handleSelect("box_a", text.target.value) }                    
                                    placeholder='Link'
                                    />
                            </Form>
                            <Form>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input} 
                                    value={this.state.copiedSessionInfo["box_b"]}
                                    label='Industries/Markets'
                                    onChange={(text) => this.handleSelect("box_b", text.target.value) }                    
                                    placeholder='Markets you may specialize in'
                                    />
                            </Form>
                            <Form>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input} 
                                    value={this.state.copiedSessionInfo["box_c"]}
                                    label='Skills to assist founders'
                                    onChange={(text) => this.handleSelect("box_c", text.target.value) }                    
                                    placeholder='Skills'
                                    />
                            </Form>
                            </Row>
                    </Col>
                        <Col>
                            <div id="times">
                                <CalendarScheduler setTimeslots={this.setTimeslots} events={this.state.copiedSessionInfo} />
                            </div>
                            <br></br>
                            <Button style={{marginLeft: '10px'}} className="float-right nextBtn delete-session-btn" onClick={() => this.updateUserInfo()}> Save </Button>
                            <DeleteProfileModal sessionInfo={this.state.sessionInfo} />
                            <PreviewModal sessionInfo={this.state.copiedSessionInfo} />
                        </Col>
                    </Row>

                    </div>
                    </CardBody>
                    </Card>
            </div>
        )
    }
}

export default EditSession;