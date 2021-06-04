import React from "react"
import { ToastContainer } from "react-toastify";
import { TabManager } from "./subtabs/SubTabManager";
import { SessionService } from "../networking/sessions/SessionService";
import { LoadingPage } from "../LoadingPage";
import { PageNotFound } from "../PageNotFound";
import 'intro.js/introjs.css'
import { Icon } from "semantic-ui-react";
import { io } from "socket.io-client";
var _ = require('lodash');

class LiveEventPage extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.socket = io("//atlasplanner.ue.r.appspot.com")
        this.eventId = ""
        this.currWeek = ""
        this.state={
            mentors: [],
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
                this.eventId = this.props.match.params.eventId
                this.setState({ mentors : eventInfo["sessions"] })
                this.setState({ eventInfo : eventInfo["event_info"] })
            } else {
                this.pageNotFound();
            }
            this.isLoading();
        })
    };

    updateTabData = (tabName) => {
        this.setState({ tab : tabName })
        this.setState({ pageComponent : TabManager.getTabComp(tabName, this.props.match.params.orgId, this.props.match.params.eventId, this.state.mentors, this.getMentorData, this.state.eventInfo) })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    componentDidMount() {
        this.getMentorData().then(() => {
            this.updateTabData('mentors')
           
        })

        this.socket.on('connect', () => { 
            this.socket.emit("sessions", this.props.match.params.orgId + "-" + this.props.match.params.eventId + "-sessions");
        });


        this.socket.on('ADDED_SESSION', (data) => {
            var dataMentors = this.state.mentors
            dataMentors.push(data)
            this.updateTabData(this.state.tab)
            this.setState({ mentors : dataMentors })
        })

        this.socket.on('UPDATED_SESSION', (data) => {
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
            this.setState({ mentors : mentors })
            this.updateTabData(this.state.tab)

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
                                    <p className="eventWhiteHeaderTitle" style={{marginBottom: 5, marginTop: 25, fontWeight: 'bold'}}>{this.props.match.params.eventId}</p>

                                    <p onClick={() => window.open("/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)} className="liveLinkHeader">{window.location.origin.toString() + "/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId} </p>
                                    <span onClick={() => navigator.clipboard.writeText(window.location.origin.toString() + "/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)}>      
                                        <Icon style={{color: '#010747', cursor: 'pointer'}} name="copy"/> </span>
                                   

                                    <p style={{color: 'GrayText', paddingTop: 10, paddingBottom: 30}}>  </p>

                                <row style={{position: 'absolute', display: 'block', bottom: '10px'}}>
                                    {
                                        TabManager.getTabNames().map((tab) => {
                                            return (
                                                <a className={tab["route"] == this.state.tab ? "nestedTabHover nestedTab": "nestedTab" } onClick={() => this.updateTabData(tab["route"])} style={{cursor: 'pointer', marginRight: 16}} > {tab["name"]} </a>
                                            )
                                        })
                                    }
                                </row>

                            </div>
                        </div>
                  
                <div id="eventBodyContainer" className="eventPageBody container" style={{paddingTop: 230}}>
                    <p style={{fontSize: '13px'}}> {this.state.eventInfo["description"]} </p>

                    {this.state.pageComponent}

                </div>
                <ToastContainer/>

            </div>
        )
    }
}

export default LiveEventPage;