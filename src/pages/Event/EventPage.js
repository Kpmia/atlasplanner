import React from "react";
import { ToastContainer } from "react-toastify";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Icon } from "semantic-ui-react";
import { UserBanner } from "../../globalcomp/UserDropDown";
import { LoadingPage } from "../LoadingPage";
import { EventService } from "../networking/events/EventService";
import { SessionService } from "../networking/sessions/SessionService";
import { PageNotFound } from "../PageNotFound";
import { ShareSessionModal } from "./components/modals/ShareSessionModal";
import { UpdateEventModal } from "./components/modals/UpdateEventModal";

class EventPage extends React.Component {
    constructor() {
        super();
        this.orgId = ""
        this.uid = ""
        this.eventId = ""
        this.currWeek = ""
        this.state={
            eventData: [],
            sessionData: [],
            pageNotFound: false,
            isLoading: true,
        }
    }

    getEventData = async(orgId, eventId) => {
        await EventService.getEvent(orgId, eventId).then((event) => {
            if (event != null) {
                this.setState({ eventData : event });
            } else {
                this.pageNotFound();
            }
        })
    };

    pageNotFound() {
        this.setState({ pageNotFound : true })
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    componentDidMount() {
        this.getEventData(this.props.match.params.orgId, this.props.match.params.eventId).then(() => {
            this.isLoading();
        })
    };

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
                    <img style={{marginTop: 20}} src={require('../../assets/icon.svg')} />

                    <p style={{marginTop: 23}} className="userProfile float-right"> <UserBanner /></p>

                </div>
            </div>            
            <div className="eventWhiteHeader">
                        <div style={{marginTop: 10}} className="container">
                        <Button style={{marginBottom: 0}} className="backBtn" onClick={() => window.location.href = '/events/all/' + this.props.match.params.orgId}> <Icon name="long arrow alternate left" /> Back </Button>

                            <span> <p style={{marginBottom: 8}} className="eventWhiteHeaderTitle text-center">{this.props.match.params.eventId}</p>
                            </span>

                            <Row style={{justifyContent: 'center'}}>
                            <p onClick={() => window.open("/c/" + this.props.match.params.orgId + "/" + this.props.match.params.eventId)} className="liveLinkHeader text-center">view live event page <Icon name="window restore" /></p>
                            </Row>
                    </div>
                    <br></br>
                </div>

            <div className="eventPageBody container">
            <p style={{fontWeight: 'bold'}}> What would you like to do? </p>
                <UpdateEventModal updateEvents={this.getEventData} orgId={this.props.match.params.orgId} eventId={this.props.match.params.eventId} eventData={this.state.eventData}>
                <Card style={{cursor: 'pointer'}}>
                    <CardBody>
                        <span> <Icon name="info" />Do you want to edit the event's information? </span>
                    </CardBody>
                </Card> 
                </UpdateEventModal>
      
                <br></br>
                <Card style={{cursor: 'pointer'}}>
                    <CardBody onClick={() => window.open('/all-sessions/' + this.props.match.params.orgId+ '/' + this.props.match.params.eventId + '?tab-name=add-profile')}>
                        <p> <Icon name="add circle" /> Do you want to create a session?</p>
                    </CardBody>
                </Card>            
                <br></br>
                <Card style={{cursor: 'pointer'}}>
                    <CardBody>
                        <ShareSessionModal orgId={this.props.match.params.orgId} eventId={this.props.match.params.eventId}>  <p> <Icon name="user circle outline" /> Do you want to give others access to create, edit, or delete sessions?</p> </ShareSessionModal>
                    </CardBody>
                </Card>
                <br></br>
            <p style={{fontWeight: 'bold'}}> Coming soon </p>
                <Card style={{opacity : .6}} aria-disabled>
                    <CardBody>
                        <p> <Icon name="line graph" /> View Session Activity</p>
                    </CardBody>
                </Card>
                <br></br>
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default EventPage;