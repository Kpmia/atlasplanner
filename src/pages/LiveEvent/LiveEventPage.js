import React from "react"
import { ToastContainer } from "react-toastify";
import { TabManager } from "./subtabs/SubTabManager";
import { SessionService } from "../networking/sessions/SessionService";
import { LoadingPage } from "../LoadingPage";
import { PageNotFound } from "../PageNotFound";
import 'intro.js/introjs.css'
import { Icon } from "semantic-ui-react";
import { io } from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventDescBanner } from "./components/banners/EventDescBanner";

var _ = require('lodash');

class LiveEventPage extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.socket = io("//atlasplanner.ue.r.appspot.com")
        this.eventId = ""
        this.state={
            mentors: [],
            copiedMentorData: [],
            eventInfo: [],
            tab: "sessions",
            pageComponent: [],
            isLoading: true,
            pageNotFound: false
        }
    }

    getMentorData = async() => {
        return SessionService.getAllSessions(this.props.match.params.orgId, this.props.match.params.eventId).then((eventInfo) => {
            if (eventInfo != null) {
                console.log(eventInfo)
                this.eventId = this.props.match.params.eventId
                this.setState({ mentors : eventInfo["sessions"] })
                this.setState({ copiedMentorData : eventInfo["sessions"] })
                this.setState({ eventInfo : eventInfo["event_info"] })
            } else {
                this.pageNotFound();
            }
            this.isLoading();
        })
    };

    updateTabData = (tabName) => {
        this.props.history.push("?tab-name=" + tabName)
        this.setState({ tab : tabName })
        this.setState({ pageComponent : TabManager.getTabComp(tabName, this.props.match.params.orgId, this.props.match.params.eventId, this.state.mentors, this.getMentorData, this.state.copiedMentorData, this.state.currWeek) })
    };

    updateMentorData = async(data) => {
        if (data != undefined) {
            this.setState({ mentors : data })
        }
        this.setState({ copiedMentorData : data })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    componentDidMount() {

        this.getMentorData().then(() => {
            this.updateTabData(TabManager.getCurrSubtab());
        })

        this.socket.on('connect', () => { 
            this.socket.emit("sessions", this.props.match.params.orgId + "-" + this.props.match.params.eventId + "-sessions");
        });

        this.socket.on('ADDED_SESSION', (data) => {
            console.log(data)
            var dataMentors = this.state.mentors
            dataMentors.push(data)
            this.updateMentorData(dataMentors).then(() => {
                setTimeout(() => {
                    this.updateTabData(this.state.tab)
                }, 600)
            })
        })

        this.socket.on('DELETED_SESSION', (data) => {
            var mentors = []
            this.state.mentors.map((mentor) => {
                console.log(mentor)
                if (mentor["_id"] != data) {
                    mentors.push(mentor)
                }
            })
            this.updateMentorData(mentors).then(() => {
                this.updateTabData(this.state.tab)
            })
        })

        this.socket.on('UPDATED_SESSION', (data) => {
            console.log(data)
            var dataMentors = this.state.mentors
            var jsonBody = {}
            dataMentors.map((mentor) => {
                jsonBody[mentor['_id']] = mentor
            })
            jsonBody[data['_id']] = data
            var mentors = []
            Object.keys(jsonBody).map((mentor) => {
                mentors.push(jsonBody[mentor])
            })
            this.updateMentorData(mentors).then(() => {
                this.updateTabData(this.state.tab)
            })
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
                            <Icon style={{marginTop: '-16px', paddingTop: 15}} className="diamondIcon" name="diamond" />
                            <a className="poweredByCompany" onClick={() => window.location.href = '/'}> Powered by Atlasplanner. </a>
                        </row>
                    </div>
                        </div>      
                            <div className="eventWhiteHeader">
                                <div className="container">
                                    <p className="eventWhiteHeaderTitle" style={{marginBottom: 5, marginTop: 25, fontWeight: 'bold'}}>{this.props.match.params.eventId}</p>

                                    <p onClick={() => window.open("/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)} className="liveLinkHeader">{window.location.origin.toString() + "/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId} </p>
                                    <span onClick={() => navigator.clipboard.writeText(window.location.origin.toString() + "/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)}>      
                                        </span>
                                   

                                    <p style={{color: 'GrayText', paddingTop: 10, paddingBottom: 30}}>  </p>

                                <row style={{position: 'absolute', display: 'block', bottom: '10px'}}>
                                    {
                                        TabManager.getTabNames().map((tab) => {
                                            return (
                                                <a className={tab["route"] == this.state.tab ? "nestedTabHover nestedTab": "nestedTab" } onClick={() => this.updateTabData(tab["route"])} style={{cursor: 'pointer', marginRight: 16}}> <Icon style={{fontSize: '10px', marginTop: '-10px'}} name={tab["icon"]} /> {tab["name"]} </a>
                                            )
                                        })
                                    }
                                </row>

                            </div>
                        </div>
                  
                <div id="eventBodyContainer" className="eventPageBody container" style={{paddingTop: 230}}>
                    <EventDescBanner eventDescription={this.state.eventInfo["description"]} />

                    {this.state.pageComponent}

                </div>
                <ToastContainer/>

            </div>
        )
    }
}

export default LiveEventPage;