import React from "react";
import FadeIn from "react-fade-in";
import { ReactFormBuilder, ReactFormGenerator } from "react-form-builder2";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Icon } from "semantic-ui-react";
import { db } from "../firebase";
import { EventService } from "../networking/events/EventService";

class EventPage extends React.Component {
    constructor() {
        super();
        this.orgId = ""
        this.uid = ""
        this.eventId = ""
        this.currWeek = ""
        this.state={
            eventData: [],
            pageNotFound: false,
            isLoading: true,
        }
    }

    getEventData = async(orgId, eventId) => {
        await EventService.getEvent(orgId, eventId).then((event) => {
            console.log(event)
            if (event != null && event) {
                this.setState({ eventData : event });
            } else {
                this.pageNotFound();
            }
            this.isLoading();
        })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    componentDidMount() {
        this.getEventData(this.props.match.params.orgId, this.props.match.params.eventId);
    };

    render() {
        if (this.state.pageNotFound) {
            return "Page not found"
        }

       if (this.state.isLoading) {
           return "Loading page"
       }

      
        return (
            <div className="eventBody">
            <div className="eventHeader">
                <div className="container">
                    <img style={{marginTop: 20}} src={require('../../assets/icon.svg')} />

                    <p style={{marginTop: 23}} className="userProfile float-right"> user settings</p>
                </div>
            </div>            
            <div className="eventWhiteHeader">
                        <div style={{marginTop: 10}} className="container">
                        <Button style={{marginBottom: 0}} className="backBtn" onClick={() => window.location.href = '/events/' + this.props.match.params.orgId + '/all'}> <Icon name="long arrow alternate left" /> Back </Button>

                            <span> <p style={{marginBottom: 8}} className="eventWhiteHeaderTitle text-center">{this.props.match.params.eventId}</p>
                            </span>

                            <Row style={{justifyContent: 'center'}}>
                            <p onClick={() => window.open("/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)} className="liveLinkHeader text-center">{window.location.origin.toString() + "/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId}</p>
                            </Row>
                    </div>
                    
                </div>

            <div className="eventPageBody container">

                <p className="eventSubTabs"> all sessions </p>
                {
                    this.state.eventData["mentors"] != "None"?
                    <Row>
                    {
                        Object.keys(this.state.eventData["mentors"]).map((mentor) => {
                            return (
                                <Col style={{marginBottom: 30}} sm={4}>
                                <FadeIn delay="400">
                                    <Card style={{cursor: 'pointer'}}  className="eventProjectCard">
                                        <div className="eventProjectGradCard"></div>
                                        <CardBody>
                                        <p style={{marginBottom: 0}} className="eventProjectTitle"> {this.state.eventData["mentors"][mentor]["name"]} </p>
                                        <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {this.state.eventData["mentors"][mentor]["link"]} </p>
                                        <p > {this.state.eventData["mentors"][mentor]["descriptions"]} </p>
                                    </CardBody>
                                    </Card>
                                </FadeIn>
                            </Col>
                            )    
                        })
                    }
                </Row>
                : null }

                </div>

            </div>
        )
    }
}

export default EventPage;