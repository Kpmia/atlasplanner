import React from "react"
import { db } from "../firebase"
import { ToastContainer } from "react-toastify";
import { TabManager } from "./subtabs/SubTabManager";
import { SessionService } from "../networking/sessions/SessionService";


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
        SessionService.getAllSessions(this.props.match.params.orgId, this.props.match.params.eventId).then((sessions) => {
            if (sessions != null) {
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

    componentDidMount() {
        this.getMentorData()
    }
    
    render() {
        if (this.state.pageNotFound) {
            return "Page is not found"
        }

        if (this.state.isLoading) {
            return "Loading Page"
        }

        return (
            <div className="eventBody">
                <div className="eventHeader">
                    <div className="container">
                        <img style={{marginTop: 20}} src={require('../../assets/icon.svg')} />
                    </div>
            </div>      
                <div className="eventWhiteHeader">
                            <div className="container">
                            <p className="eventWhiteHeaderTitle" style={{marginBottom: 5, marginTop: 25}}>{this.props.match.params.eventId}</p>

                            <p onClick={() => window.open("/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)} className="liveLinkHeader">{window.location.origin.toString() + "/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId}</p>

                            <row style={{position: 'absolute', bottom: '10px'}}>
                            <a onClick={() => this.updateTabData("mentors")} style={{cursor: 'pointer', marginRight: 16, borderBottom: '3px solid #EA60DC', paddingBottom: 10, width: '80px'}}>all sessions </a>
                            <a onClick={() => this.updateTabData("today-session")} style={{cursor: 'pointer', marginRight: 16,}} > today's session </a>
                                <a style={{cursor: 'pointer'}} onClick={() =>  window.open('/createsession/' + this.props.match.params.orgId + '/' + this.props.match.params.eventId)}> create a session</a>
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