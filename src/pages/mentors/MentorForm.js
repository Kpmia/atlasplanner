import React from "react"
import { Button, CardBody, Col,  Row } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import { SessionService } from "../networking/sessions/SessionService";
import { TabManager } from "./subtabs/TabManager";
import history from "../history";
import { io } from "socket.io-client";
import { PageNotFound } from "../PageNotFound";
import { LoadingPage } from "../LoadingPage";
import { ToastContainer } from "react-toastify";
import { Icon, Popup } from "semantic-ui-react";
import { Header } from "./components/layout/InfoHeader";
import { EventService } from "../networking/events/EventService";

class MentorForm extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.socket = io("//atlasplanner.ue.r.appspot.com")
        this.eventId = ""
        this.state={
            numPeople: 0,
            sessions: [],
            eventDetails: [],
            pageNotFound: false,
            pageComponent: [],
            eventInfo: [],
            tab: "create-session",
            isLoading: true,
        }
    }

    getEventDetails = async(orgId, eventId) => {
        await EventService.getEvent(orgId, eventId).then((eventDetails) => {
            if (eventDetails) {
                this.setState({ eventDetails : eventDetails })
                this.getSessions(orgId, eventId)
            } else {
                this.pageNotFound()
            }
        })
    };

    getSessions = async(orgId, eventId) => {
        await SessionService.getAllSessions(orgId, eventId).then((sessions) => {
            if (sessions) {
                this.setState({ eventInfo : sessions['event_info'] })
                this.setState({ sessions : sessions['sessions'] })
            } else {
                this.pageNotFound()
            }
            this.setState({ isLoading : false })
        });
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    }

    updateTabData = (name) => {
        this.setState({ tab : name })
        this.setState({ pageComponent : TabManager.getTabComponent(name, this.props.match.params.orgId, this.props.match.params.eventId, this.state.sessions, this.getSessions, this.state.eventInfo) })
    }

    switchTab = (name) => {
        history.push("?tab-name=" + name)
    }

    componentDidMount() {
        this.getEventDetails(this.props.match.params.orgId, this.props.match.params.eventId).then(() => {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('tab-name') != "" && urlParams.get('tab-name') != null) {
                this.updateTabData(urlParams.get('tab-name'))
                
            } else {
                this.props.history.push('?tab-name=add-profile')
                this.updateTabData('add-profile')
            }
        })

        this.socket.on('connect', () => { 
            this.socket.emit("edit-sessions", this.props.match.params.orgId + "-" + this.props.match.params.eventId + '-edit-sessions');
            this.socket.emit("edit-sessions-users", this.props.match.params.orgId + "-" + this.props.match.params.eventId + '-user-edit-sessions');
        })

        this.socket.on('ADDED_SESSION', (data) => {
            var dataMentors = this.state.sessions
            dataMentors.push(data)
            this.setState({ sessions : dataMentors })
            this.updateTabData(this.state.tab)
        })

        this.socket.on('UPDATED_SESSION', (data) => {
            console.log(data)
            var dataMentors = this.state.sessions
            var jsonBody = {}
            dataMentors.map((mentor) => {
                jsonBody[mentor['_id']] = mentor
            })
            jsonBody[data['_id']] = data
            var mentors = []
            Object.keys(jsonBody).map((mentor) => {
                mentors.push(jsonBody[mentor])
            })
            this.setState({ sessions : mentors })
            this.updateTabData(this.state.tab)
        })

        this.socket.on('DELETED_SESSION', (data) => {
            var mentors = []
            this.state.sessions.map((mentor) => {
                if (mentor["_id"] != data) {
                    mentors.push(mentor)
                }
            })
            this.setState({ sessions : mentors })
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
            <div style={{background: this.state.eventDetails.theme_color}} className="gradientBackground">

                <Header 
                    orgId={this.props.match.params.orgId} 
                    eventId={this.props.match.params.eventId} 
                    eventDetails={this.state.eventDetails}
                />

            <div style={{paddingTop: 131, zIndex:999, position: 'relative'}} className="eventPageBody">          

            <div className="tabBackground">

                <div className="container" style={{borderLeft: '1px solid #1D1B1B', padding: '12px', height: '100%', borderRight: '1px solid #1D1B1B'}}>

            
            {
                TabManager.getTabNames().map((tab) => {
                    if (tab["route"] == this.state.tab) {
                        return (
                            <Button className="clickedSessionForm" onClick={() => { this.switchTab(tab["route"]); this.updateTabData(tab["route"])}}> <Icon style={{color: 'white', fontSize: 11}} name={tab["icon"]} /> {tab["name"]}  </Button>
                        )
                    }
                    return (
                        <Button className="tabSessionForm" onClick={() => { this.switchTab(tab["route"]); this.updateTabData(tab["route"])}}> <Icon style={{color: 'white', fontSize: 11}} name={tab["icon"]} /> {tab["name"]}  </Button>
                    )
                })
            }
            </div>
            </div>
            <br></br>

            <div style={{paddingTop: 90}} className="container">

            {this.state.pageComponent}

            </div>
            <br></br>
            </div>
            <ToastContainer
             />
          </div>
        );
      }
}

export default MentorForm;