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
import { Icon } from "semantic-ui-react";
import Animal from "react-animals";
import { onboarding } from "./components/onboarding";
import { Header } from "./components/layout/Header";
import { Tooltip } from "@material-ui/core";

class MentorForm extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.socket = io("//atlasplanner.ue.r.appspot.com")
        this.eventId = ""
        this.state={
            numPeople: 0,
            sessions: [],
            pageNotFound: false,
            pageComponent: [],
            eventInfo: [],
            tab: "create-session",
            isLoading: true,
        }
    }

    getSessions = async(orgId, eventId) => {
        await SessionService.getAllSessions(orgId, eventId).then((sessions) => {
            if (sessions) {
                this.setState({ eventInfo : sessions['event_info'] })
                this.setState({ sessions : sessions['sessions'] })
                onboarding.startNewUser(orgId, eventId)
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
        this.getSessions(this.props.match.params.orgId, this.props.match.params.eventId).then(() => {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('tab-name') != "" && urlParams.get('tab-name') != null) {
                this.updateTabData(urlParams.get('tab-name'))
                
            } else {
                this.props.history.push('?tab-name=create-session')
                this.updateTabData('create-session')
            }
        })

        this.socket.on('connect', () => { 
            this.socket.emit("edit-sessions", this.props.match.params.orgId + "-" + this.props.match.params.eventId + '-edit-sessions');
            this.socket.emit("edit-sessions-users", this.props.match.params.orgId + "-" + this.props.match.params.eventId + '-user-edit-sessions');
        })

        this.socket.on('num_user_editing', (data) => {
            var animals = []
            for (var i = 0; i < data; i++) {
                if (i == 3) {
                    animals.push(<div style={{borderRadius: '10%', padding: 7, width: 32, fontWeight: 'bold', height: 32, background: 'white', color: 'black'}}> 3+ </div>)
                    break;
                } else {
                  animals.push(<a style={{marginRight: 5}}><Tooltip title="Anonymous" placement="bottom"><Animal style={{borderRadius: '100%'}} rounded /></Tooltip></a>)
                }
            }
            this.setState({ numPeople : animals })
        })

        this.socket.on('ADDED_SESSION', (data) => {
            var dataMentors = this.state.sessions
            dataMentors.push(data)
            this.setState({ sessions : dataMentors })
            this.updateTabData(this.state.tab)
        })

        this.socket.on('UPDATED_SESSION', (data) => {
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
            <div className="gradientBackground">

                <Header 
                    orgId={this.props.match.params.orgId} 
                    eventId={this.props.match.params.eventId} 
                    numPeople={this.state.numPeople} 
                />
              
            <div style={{paddingTop: 82, zIndex:999, position: 'relative'}} className="eventPageBody">          

            <div className="tabBackground">

                <div className="container" style={{borderLeft: '1px solid #a5a4af59', borderRight: '1px solid #a5a4af59'}}>
            {
                TabManager.getTabNames().map((tab) => {
                    if (tab["route"] == this.state.tab) {
                        return (
                            <Button className="clickedSessionForm" onClick={() => { this.switchTab(tab["route"]); this.updateTabData(tab["route"])}}> <Icon name={tab["icon"]} /> {tab["name"]}  </Button>
                        )
                    }
                    return (
                        <Button className="tabSessionForm" onClick={() => { this.switchTab(tab["route"]); this.updateTabData(tab["route"])}}> <Icon name={tab["icon"]} /> {tab["name"]}  </Button>
                    )
                })
            }
            </div>
            </div>
            <br></br>

            <div className="container">

            {this.state.pageComponent}

            </div>
            <br></br>
            </div>
            <ToastContainer />
          </div>
        );
      }
}

export default MentorForm;