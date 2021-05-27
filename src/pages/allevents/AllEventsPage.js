import { Card } from "@material-ui/core";
import React from "react"
import FadeIn from "react-fade-in";
import { ToastContainer } from "react-toastify";
import { Button, CardBody, Col, Row } from "reactstrap";
import { UserBanner } from "../../globalcomp/UserDropDown";
import { db } from "../firebase";
import { LoadingPage } from "../LoadingPage";
import { EventService } from "../networking/events/EventService";
import { OrgService } from "../networking/organizations/OrgService";
import { PageNotFound } from "../PageNotFound";
import { AddEventModal } from "./components/AddEventModal";
import 'intro.js/introjs.css'
import introJs from 'intro.js'
import ExitDemoModal from "../../globalcomp/ExitDemoModal";


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
        })
        this.isLoading();
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

    exitTutorial = () => {
        console.log('made it ')
        this.setState({ exitTutorial : true })
    }

    startTutorial = async() => {
        return setTimeout(() => {
            return introJs().setOptions({
                skipLabel: "",
                highlightClass: true,
                exitOnOverlayClick: false,
                showProgress: true,
                steps: [{
                    title: 'Welcome! 👋',
                    intro: `Look's like you are new around here! Let's show you around before you officially set up your first event.`
                }, {
                    title: 'Your Events',
                  element: document.getElementById('eventbody'),
                  intro: "Your events will be located here - we have provided a sample event for you to later explore around for this tutorial." 
                }, {
                    title: 'Live Links',
                  element: document.getElementById('live_link'),
                  intro: "Each event has a public unique link that is named after your organization & event name."
                },  {
                    title: 'Create Event',
                  element: document.getElementById('create_event'),
                  intro: "You can create new events by clicking on the button and entering a name."
                },
                {
                    title: `Click here!`,
                    element: document.getElementById('demo_project'),
                  intro: "Click on the sample project. See you there! 👋"
                }
            ]
              }).start().onexit(() => {
                    this.exitTutorial()
              });
        }, 1300)
    }

  componentDidMount() {
        this.orgId = this.props.match.params.orgId
        if (this.props.orgId) {
            this.props.match.params.orgId = this.props.orgId
            this.orgId = this.props.orgId
        }
        this.getOrganization(this.props.match.params.orgId).then(() => {
            this.getEvents(this.props.match.params.orgId);
        });
        if (localStorage.getItem('new_user') == "true") {
            this.startTutorial()
        }
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
                    <div className="eventWhiteHeader">
                        <div className="container" style={{marginTop: 50}}>
                            <span> <span className="eventWhiteHeaderTitle">My events</span>
                            <Button id="create_event" className="float-right createEventBtn "> <AddEventModal updateEvents={this.getEvents} orgId={this.props.match.params.orgId}> + Create </AddEventModal> </Button>

                            </span>
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
                                    <Card id="demo_project" onClick={() => window.location.href = '/c/' + this.orgId + '/' + event["name"]} style={{cursor: 'pointer'}}  className="eventProjectCard">
                                        <div  className="eventProjectGradCard"></div>
                                        <CardBody >
                                            <p className="eventProjectTitle"> {event["name"]} </p>
                                        </CardBody>
                                        <div style={{padding: 5}}>

                                        <Button id="live_link" style={{marginRight: 10, marginBottom: 20}} onClick={() => window.location.href = '/c/' + this.orgId + '/' + event["name"]} className="float-right getLink"> Link </Button>
                                        </div>
                                    </Card>
                                    </FadeIn>
                                </Col>
                                )
                            }
                            return (
                                <Col style={{marginBottom: 30}} sm={4}>
                                    <FadeIn delay="400">
                                    <Card onClick={() => window.location.href = '/c/' + this.orgId + '/' + event["name"]} style={{cursor: 'pointer'}}  className="eventProjectCard">
                                        <div  className="eventProjectGradCard"></div>
                                        <CardBody >
                                            <p className="eventProjectTitle"> {event["name"]} </p>
                                        </CardBody>
                                        <div style={{padding: 5}}>

                                        <Button onClick={() => window.location.href = '/c/' + this.orgId + '/' + event["name"]} style={{marginRight: 10, marginBottom: 20}} className="float-right getLink"> Link </Button>
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