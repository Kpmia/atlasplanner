import { Card } from "@material-ui/core";
import React from "react"
import FadeIn from "react-fade-in";
import { ToastContainer } from "react-toastify";
import { Button, CardBody, Col, Row } from "reactstrap";
import { UserBanner } from "../../globalcomp/UserDropDown";
import { LoadingPage } from "../LoadingPage";
import { EventService } from "../networking/events/EventService";
import { OrgService } from "../networking/organizations/OrgService";
import { PageNotFound } from "../PageNotFound";
import { AddEventModal } from "./components/modals/AddEventModal";
import 'intro.js/introjs.css'
import introJs from 'intro.js'
import ExitDemoModal from "../../globalcomp/ExitDemoModal";
import { OptionsDropdown } from './components/dropdown/OptionsDropdown'

class AllEventsPage extends React.Component {
    constructor() {
        super();
        this.orgId = ""
        this.org = []
        this.state={
            events: [],
            isLoading: true,
            pageNotFound: false,
            exitTutorial: false
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
            this.isLoading();
        })
    };

    getOrgId = async(orgId) => {
        if (orgId) {
            this.props.match.params.orgId = orgId
            this.props.history.push('/events/all/' + orgId)
            this.orgId = orgId
        }
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

  componentDidMount() {
        this.orgId = this.props.match.params.orgId
        this.getOrgId(this.props.orgId).then(() => {
            this.getOrganization(this.props.match.params.orgId).then(() => {
                this.getEvents(this.props.match.params.orgId);
            });
        })
    }
    
    render() {
        if (this.state.pageNotFound) {
            return <PageNotFound />
        }

        if (this.state.isLoading) {
            return <LoadingPage />
        }

        return (
            <div className="eventBody">
                <div className="eventHeader">
                    <div className="container" >
                        <img style={{marginTop: 20}} src={require('../../assets/icon.svg')} />

                        <p style={{marginTop: 23}} className="userProfile float-right"> <UserBanner /></p>
                    </div>
                </div>
                    <div style={{paddingBottom: 30}} className="eventWhiteHeader">
                        <div className="container" style={{marginTop: 50}}>
                            <span> <span className="eventWhiteHeaderTitle">All Events</span>
                            <Button id="create_event" className="float-right createEventBtn "> <AddEventModal updateEvents={this.getEvents} orgId={this.props.match.params.orgId}> + Create </AddEventModal> </Button>

                            </span>
                            <br></br>

                        </div>    
                    </div>                  

                  <div  className="eventPageBody container">
                      <Row id="eventbody">
                    {
                        this.state.events.map((event) => {
                            if (event["name"] == "cs-13xx-office-hours") {
                                return (
                                    <Col style={{marginBottom: 30}} sm={4}>
                                    <FadeIn delay="400">
                                    <Card id="demo_project" style={{cursor: 'pointer'}}  className="eventProjectCard">
                                    <OptionsDropdown updateEvents={this.getEvents} orgId={this.props.match.params.orgId} eventId={event["name"]} />

                                        <div style={{background: event['color']}} className="eventProjectGradCard"></div>
                                        <CardBody onClick={() => window.location.href = '/event/' + this.orgId + '/' + event["name"]}>
                                            <p className="eventProjectTitle"> {event["name"]} </p>
                                            <p className="eventDescription"> {event["description"]} </p>
                                        </CardBody>
                                        <div style={{padding: 5}}>

                                        <Button id="live_link" style={{marginRight: 10, marginBottom: 20}} onClick={() => window.location.href = '/c/' + this.orgId + '/' + event["name"]} className="float-right getLink"> View public link </Button>
                                        </div>
                                    </Card>
                                    </FadeIn>
                                </Col>
                                )
                            }
                            return (
                                <Col style={{marginBottom: 30}} sm={4}>
                                    <FadeIn delay="400">
                                    <Card  className="eventProjectCard">
                                    <OptionsDropdown updateEvents={this.getEvents} orgId={this.props.match.params.orgId} eventId={event["name"]} />

                                    <div style={{background: event['color']}}  className="eventProjectGradCard"></div>
                                        <CardBody onClick={() => window.location.href = '/event/' + this.orgId + '/' + event["name"]} style={{cursor: 'pointer'}}>
                                            <p className="eventProjectTitle"> {event["name"]} </p>
                                            <p className="eventDescription"> {event["description"]} </p>

                                        </CardBody>
                                        <div style={{padding: 5}}>

                                        <Button id="live_link" style={{marginRight: 10, marginBottom: 20}} onClick={() => window.location.href = '/c/' + this.orgId + '/' + event["name"]} className="float-right getLink"> View public link </Button>
                                        </div>
                                    </Card>
                                    </FadeIn>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>
    
                <ExitDemoModal opened={this.state.exitTutorial} />

                <ToastContainer />

            </div>

        )
    }
}

export default AllEventsPage;