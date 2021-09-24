import React from "react";
import { SessionService } from "../../../networking/sessions/SessionService";
import { TabManager, tabNames } from "./TabManager";
import { io } from "socket.io-client";
import { ToastContainer } from "react-toastify";
import { Row } from "reactstrap";
import { Icon } from "semantic-ui-react";
import { LoadingPage } from "../../../LoadingPage";
import { PageNotFound } from "../../../PageNotFound";
import { DisplayService } from "../../../networking/display/DisplayService";

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.orgId = ""
        this.socket = io("//atlasplanner.ue.r.appspot.com")
        this.eventId = ""
        this.sessionId = ""
        this.eventDisplay = []
        this.state={
            currTab: {
                "name": "Edit Profile",
                "route": "edit-profile"
            },
            sessionInfo: [],
            pageComponent: [],
            pageFound: false,
            isLoading: true,
        }
    }

    switchTab = (name, route) => {
        this.props.history.push('?tab-name=' + route)
        this.setState({ currTab :  {
            "name": name,
            "route": route
        }  })
        return this.setState({ pageComponent : TabManager(route, this.state.sessionInfo) })
    };

    checkSession = async(orgId, eventId, sessionId) => {
        await SessionService.sessionExists(orgId, eventId, sessionId).then(async(session) => {
            if (session) {
                this.setState({ sessionInfo : session })
                this.getEventDisplay(orgId, eventId).then(() => {
                    this.isLoading();
                })
            } else {
                this.setState({ pageFound : true })
            }
        });
    };

    getEventDisplay = async(orgId, eventId) => {
        await DisplayService.getEventDisplay(orgId, eventId).then((display) => {
            if (display) {
                this.eventDisplay = display
            }
        })
    };

    isLoading = () => {
        this.setState({ isLoading : false })
    };

    componentDidMount() {
        this.orgId = this.props.match.params.orgId
        this.eventId = this.props.match.params.eventId
        this.sessionId = this.props.match.params.sessionId

        const urlParams = new URLSearchParams(window.location.search);
        const tabName = urlParams.get('tab-name') ?  urlParams.get('tab-name') : this.state.currTab.route ;

        this.socket.on('connect', () => { 
            this.socket.emit("sessions", this.props.match.params.orgId + "-" + this.props.match.params.eventId + "-sessions");

            this.socket.on('UPDATED_SESSION', (data) => {
                if (this.state.sessionInfo._id == data._id) {
                    this.setState({ sessionInfo : data })
                    this.switchTab(this.state.currTab.name, this.state.currTab.route)
                }
            })
        });

        this.checkSession(this.orgId, this.eventId, this.sessionId).then(() => {
            this.switchTab(this.state.currTab.name, tabName)
        });
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingPage />
        }

        if (this.state.pageFound) {
            return <PageNotFound />
        }

        return (
            <div style={{ background: this.eventDisplay.color }} className="user-profile-bg">

                <div className="user-profile-dark-gray-header">
                
                    <div className="container">
                        <Row style={{justifyContent: 'space-between', position: 'relative', top: '25px'}}>
                            <div className="atlasplanner-logo"> <Icon name="diamond" style={{marginRight: '10px', fontSize: '12px'}} /> AtlasPlanner </div>
                            <div>
                            <div className="user-profile-light-gray-block"> </div>
                                <span className="user-profile-name" style={{marginRight: '63px', position: 'relative', zIndex: 999}}> What would you like to do? </span>
                                {
                                    tabNames.map((tab) => {
                                        if (tab.name == this.state.currTab.name) {
                                            return <span className="user-profile-links" style={{position: 'relative', background: 'none', color: 'white', marginRight: '30px', fontWeight: 500, color: 'rgb(254 190 246)', zIndex: 999}} onClick={() => this.switchTab(tab.name, tab.route)}> {tab.name} </span>
                                        }
                                        return <span className="user-profile-links" style={{position: 'relative', marginRight: '30px', background: 'none', color: 'white', zIndex: 999}} onClick={() => this.switchTab(tab.name, tab.route)}> {tab.name} </span>
                                    })
                                }
                            </div>
                        </Row>
                    </div>
                </div>
                <div className="user-profile-light-gray-header">
                        <div className="container">
                                <Row style={{justifyContent: 'space-between', position: 'relative', top: '10px'}}>                       
                                <div> <span className="this-is-your-profile"> This is your profile for the event <span onClick={() => window.open(`/c/${this.orgId}/${this.eventId}`)} style={{textDecoration: 'underline', cursor: 'pointer'}}>{this.state.sessionInfo._eventId}</span>. </span>  </div>
                                <div> <span className="this-is-your-profile">  {this.state.sessionInfo.name} </span> </div>

                            </Row>
                        </div>
                </div>
                <div style={{background: this.eventDisplay.color }} className="user-profile-thin-gradient-banner"></div>

                <div style={{paddingTop: '70px'}}>
                    {this.state.pageComponent}
                </div>

                <ToastContainer />
            </div>
        )
    }
}

export default UserProfile;