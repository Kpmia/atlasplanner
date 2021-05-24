import { Card } from "@material-ui/core";
import React from "react"
import FadeIn from "react-fade-in";
import { ToastContainer } from "react-toastify";
import { Button, CardBody, Col, Row } from "reactstrap";
import { db } from "../firebase";
import { EventService } from "../networking/events/EventService";
import { OrgService } from "../networking/organizations/OrgService";
import { AddEventModal } from "./components/AddEventModal";


class AllEventsPage extends React.Component {
    constructor() {
        super();
        this.orgId = ""
        this.org = []
        this.state={
            events: [],
            isLoading: true,
            pageNotFound: false,
        }
    }

    getOrganization = async(orgId) => {
        await OrgService.getOrganization(orgId).then((org) => {
            if (org != null && org) {
                this.org = org;
            } else {
                this.pageNotFound();
            }
        })
    };

    getEvents = async(orgId) => {
        await EventService.getAllEvents(orgId).then((events) => {
            if (events != null && events) {
                this.setState({ events : events })
            } 
        })
        this.isLoading();
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

    async componentDidMount() {
        this.orgId = this.props.match.params.orgId
        this.getOrganization(this.props.match.params.orgId).then(() => {
            this.getEvents(this.props.match.params.orgId);
        });
    }
    
    render() {
        if (this.state.pageNotFound) {
            return "Page not found.."
        }

        if (this.state.isLoading) {
            return "Loading..."
        }

        return (
            <div className="eventBody">
                <div className="eventHeader">
                    <div className="container" >
                        <img style={{marginTop: 20}} src={require('../../assets/icon.svg')} />

                        <p style={{marginTop: 23}} className="userProfile float-right"> user settings</p>
                    </div>
                </div>
                    <div className="eventWhiteHeader">
                        <div className="container" style={{marginTop: 50}}>
                            <span> <span className="eventWhiteHeaderTitle">my events</span>
                            <Button className="float-right createEventBtn "> <AddEventModal updateEvents={this.getEvents} orgId={this.props.match.params.orgId}> + Create </AddEventModal> </Button>

                            </span>
                        </div>
    
                    </div>

                    sdffd
                  

                  <div className="eventPageBody container">
                      <Row>
                    {
                        this.state.events.map((event) => {
                            return (
                                <Col style={{marginBottom: 30}} sm={4}>
                                    <FadeIn delay="400">
                                    <Card style={{cursor: 'pointer'}}  className="eventProjectCard">
                                        <div onClick={() => window.location.href = '/events/info/' + this.orgId + '/' + event["name"]} className="eventProjectGradCard"></div>
                                        <CardBody onClick={() => window.location.href = '/events/info/' + this.orgId + '/' + event["name"]}>
                                            <p className="eventProjectTitle"> {event["name"]} </p>
                                        </CardBody>
                                        <div style={{padding: 5}}>

                                        <Button style={{marginRight: 10, marginBottom: 20}} onClick={() => window.location.href = '/c/' + this.orgId + '/' + event["name"]} className="float-right getLink"> Link </Button>
                                        </div>
                                    </Card>
                                    </FadeIn>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>

                <ToastContainer />

            </div>

        )
    }
}

export default AllEventsPage;