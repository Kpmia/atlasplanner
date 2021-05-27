import React from "react"
import { db } from "../firebase"
import { ToastContainer } from "react-toastify";
import { TabManager } from "./subtabs/SubTabManager";
import { SessionService } from "../networking/sessions/SessionService";
import { LoadingPage } from "../LoadingPage";
import { PageNotFound } from "../PageNotFound";
import { LiveSiteUtils } from "./utils/LiveSiteUtil";
import 'intro.js/introjs.css'
import introJs from 'intro.js'

class LiveEventPage extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.eventId = ""
        this.currWeek = ""
        this.state={
            mentors: [],
            tab: "sessions",
            pageComponent: [],
            isLoading: true,
            pageNotFound: false
        }
    }

    getMentorData = async() => {
        return SessionService.getAllSessions(this.props.match.params.orgId, this.props.match.params.eventId).then((sessions) => {
            if (sessions != null) {
                this.eventId = this.props.match.params.eventId
                this.setState({ mentors : sessions })
                this.updateTabData('mentors')
            } else {
                this.pageNotFound();
            }
            this.isLoading();
        })
    };

    updateTabData = (tabName) => {
        this.setState({ tab : tabName })
        this.setState({ pageComponent : TabManager.getTabComp(tabName, this.props.match.params.orgId, this.props.match.params.eventId, this.state.mentors, this.getMentorData) })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    startTutorial = () => {
        setTimeout(() => {
            var introStep = 0
            introJs().setOptions({
                skipLabel: "",
                highlightClass: true,
                exitOnOverlayClick: false,
                showProgress: true,
                steps: [{
                    title: 'Welcome back! 👋',
                    intro: `Now let's explore the event.`
                }, {
                    title: 'Sessions',
                  element: document.getElementById('sessions_body'),
                  intro: "Sessions will be in events. Sessions can be created by anyone, and it can represent a TA, group event, mentor, etc."
                }, {
                    title: 'Calendar',
                  element: document.getElementById('calendar_body'),
                  intro: "View the session`s available times for this week, and reserve any of the time slots."
                },  {
                    title: `Today's Sessions`,
                  element: document.getElementById('today-session-body'),
                  intro: "You can create new events by clicking on the button and entering a name."
                }, {
                    title: `Create Sessions`,
                  element: document.getElementById('create-new-session'),
                  intro: "You can create new sessions by clicking on this link. This will open a new window for you to fill out details."
                },
                {
                    title: `That's it!`,
                  intro: "Click on the sample project. See you there! 👋"
                }
            ]
              }).start().onafterchange(() => {
                  introStep += 1;
                  if (introStep == 2) {
                      setTimeout(() => {
                        document.getElementById('Anna Locke').click()
                      }, 1000)
                  }
                  if (introStep == 3) {
                      this.updateTabData('today-session')
                  }
              }).oncomplete(() => {
                  localStorage.setItem('new_user', false)
              })
                  
        }, 1300)
    }

    componentDidMount() {
        this.getMentorData().then(() => {
            if (localStorage.getItem('new_user') == "true" && this.eventId == "cs-13xx-office-hours") {
                this.startTutorial()
                console.log(this.eventId)
            }
            console.log(this.eventId)
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
                    <div className="container">
                        <row>
                        <img style={{marginTop: 20, marginRight: 30}} src={require('../../assets/icon.svg')} />
                            <a onClick={() => window.location.href = '/'} style={{color: 'white', position: 'absolute', top: '22px', cursor: 'pointer'}}> My Events </a>
                        </row>
                    </div>
                        </div>      
                            <div className="eventWhiteHeader">
                                <div className="container">
                                    <p className="eventWhiteHeaderTitle" style={{marginBottom: 5, marginTop: 25}}>{this.props.match.params.eventId}</p>

                                    <p onClick={() => window.open("/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)} className="liveLinkHeader">{window.location.origin.toString() + "/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId}</p>

                                <row style={{position: 'absolute', display: 'block', bottom: '10px'}}>
                                    {
                                        TabManager.getTabNames().map((tab) => {
                                            return (
                                                <a className={tab["route"] == this.state.tab ? "nestedTabHover nestedTab": "nestedTab" } onClick={() => this.updateTabData(tab["route"])} style={{cursor: 'pointer', marginRight: 16}} > {tab["name"]} </a>
                                            )
                                        })
                                    }
                                    <a id="create-new-session" style={{cursor: 'pointer'}} onClick={() =>  window.open('/createsession/' + this.props.match.params.orgId + '/' + this.props.match.params.eventId)}> create a session</a>
                                </row>

                            </div>
                        </div>
                  
                <div className="eventPageBody container">

                    {this.state.pageComponent}

                </div>
                <ToastContainer/>

            </div>
        )
    }
}

export default LiveEventPage;