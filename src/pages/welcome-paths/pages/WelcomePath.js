import { Card } from "@material-ui/core";
import copy from "copy-to-clipboard";
import React from "react";
import { CardBody, Row } from "reactstrap";
import { Icon, Popup } from "semantic-ui-react";
import { LoadingPage } from "../../LoadingPage";
import { EventService } from "../../networking/events/EventService";
import { PageNotFound } from "../../PageNotFound";
import { ProfileInstructions } from "../components/modals/ProfileInstructions";

class WelcomePath extends React.Component {
    constructor(props) {
        super(props);
        this.orgId = ""
        this.eventId = ""
        this.state={
            sessionInfo: [],
            chosenRole: "",
            isLoading: true,
            sessionFound: false
        }
    }

    checkSession = async(orgId, eventId) => {
        await EventService.eventExists(orgId, eventId).then((session) => {
            console.log(session)
            if (session) {
                this.setState({ sessionInfo : session })
            } else {
                this.setState({ sessionFound : true })
            }
            this.isLoading()
        });
    };

    copyURL = () => {
        copy(`${window.location.origin}/welcome/${this.orgId}/${this.eventId}`)
    };

    isLoading = () => {
        this.setState({ isLoading : false });
    };

    componentDidMount() {
        this.orgId = this.props.match.params.orgId
        this.eventId = this.props.match.params.eventId
        this.sessionId = this.props.match.params.sessionId

        this.checkSession(this.orgId, this.eventId, this.sessionId)
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingPage />
        }

        if (this.state.sessionFound) {
            return <PageNotFound />
        }

        return (
            <div style={{background: 'white', height: '100vh'}}>

                    <Row style={{justifyContent: 'center', paddingTop: '200px'}}>
                        <Card style={{boxShadow: 'none', border: 'none'}}>
                            <CardBody>

                                {
                                    this.state.chosenRole == "organizer" ? 

                                    <div>
                                        <p className="who-are-you-h1"> You’re an alumni. </p>

                                        <Row style={{justifyContent: "center", marginBottom: '25px'}}>
                                            <p className="who-are-you-p"> This is {this.orgId}’s event {this.eventId}. Let’s redirect you to the right place: what’s your role in this event? </p>
                                        </Row>
                                        <Card onClick={() => window.location.href = `/create-session/${this.orgId}/${this.eventId}`} className="who-are-you-card ">
                                            <CardBody style={{padding: '1.95rem'}}>
                                                <p className="who-are-you-h2" style={{marginBottom: '4px'}}> <Icon name="user plus" style={{fontSize: '14px'}} /> Create my profile </p>
                                                <p className="who-are-you-p2"> Haven’t created a profile yet for this event? Create your profile to share your schedule & info. </p>
                                            </CardBody>
                                        </Card>
                                        
                                        <br></br>
                                        <ProfileInstructions />
                                    </div>
                            
                                    :

                                    <div>
                                <p className="who-are-you-h1"> Who are you? </p>

                                <Row style={{justifyContent: "center", marginBottom: '25px'}}>
                                    <p className="who-are-you-p"> This is {this.orgId}’s event {this.eventId}. This link is live for anyone to access. Let’s redirect you to the right place: what’s your role in this event? </p>
                                </Row>

                                <Card onClick={() => window.location.href = `/c/${this.orgId}/${this.eventId}`} className="who-are-you-card ">
                                    <CardBody style={{padding: '1.95rem'}}>
                                        <p className="who-are-you-h2" style={{marginBottom: '4px'}}> <Icon name="user outline" style={{fontSize: '14px'}} /> Attendee </p>
                                        <p className="who-are-you-p2"> You’re a participant looking to book times and make new connections with others. </p>
                                    </CardBody>
                                </Card>
                                
                                <br></br>
                                <Card onClick={() => this.setState({ chosenRole : "organizer" })} style={{marginBottom: '13px'}} className="who-are-you-card ">
                                    <CardBody style={{padding: '1.95rem'}}>
                                        <p className="who-are-you-h2" style={{marginBottom: '4px'}}> <Icon name="calendar plus" style={{fontSize: '14px'}} /> Alumni </p>
                                        <p className="who-are-you-p2"> You were invited by the host to create a profile and take part in this event. </p>
                                    </CardBody>
                                </Card>

                                <Row style={{justifyContent: "space-between"}}>
                                    <p onClick={() => window.location.href = `/all-sessions/${this.orgId}/${this.eventId}`} className="who-are-you-sublink"> are you the host? <span style={{textDecoration: "underline"}}>Click here</span> </p>
                                    
                                        <Popup
                                            inverted
                                            content="Copied Link"
                                            trigger={<p onClick={this.copyURL} className="who-are-you-sublink"><Icon name="clipboard" /> Share Link </p>}
                                            on="click"
                                        />
                                </Row>
                                </div>
                                }

                            </CardBody>
                        </Card>
                    </Row>

            </div>
        )
    }
}

export default WelcomePath;