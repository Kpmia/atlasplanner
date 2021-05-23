import { Card } from "@material-ui/core";
import React from "react"
import FadeIn from "react-fade-in";
import { Button, CardBody, Col, Row } from "reactstrap";
import { db } from "../firebase";
import { AddEventModal } from "./components/AddEventModal";


class AllEventsPage extends React.Component {
    constructor() {
        super();
        this.orgId = ""
        this.state={
            events: [],
            isLoading: true
        }
    }

    getEvents = async(orgId) => {
        const uid = await new Promise((resolve, reject) => {
            db.auth().onAuthStateChanged((user) => {
                resolve(user.uid)
            }, reject)
        });
        db.database('https://atlasplanner-e530e-default-rtdb.firebaseio.com/').ref('/' + uid + '/' + orgId).get().then((events) => {
            if (events.val()["events"] != null && events.val()["events"] != "None") {
                this.setState({ events : events.val()["events"] })
            };
            this.isLoading();
        });
    };

    isLoading() {
        this.setState({ isLoading : false })
    };

    deleteEvent = () => {

    };

    async componentDidMount() {
        this.orgId = this.props.match.params.orgId
        this.getEvents(this.props.match.params.orgId);
    }
    
    render() {
        if (this.state.isLoading) {
            return "Loading..."
        }

        return (
            <div className="eventBody">
                <div className="eventHeader">
                    <div className="container" >
                        <img style={{marginTop: 20}} src={require('../../assets/icon.svg')} />

                        <p style={{marginTop: 23}} className="userProfile float-right"> user settings</p>
                    </div>
                </div>
                    <div className="eventWhiteHeader">
                        <div className="container" style={{marginTop: 50}}>
                            <span> <span className="eventWhiteHeaderTitle">my events</span>
                            <Button className="float-right createEventBtn "> <AddEventModal updateEvents={this.getEvents} orgId={this.props.match.params.orgId}> + Create </AddEventModal> </Button>

                            </span>
                        </div>
    
                    </div>

                    sdffd
                  

                  <div className="eventPageBody container">
                      <Row>
                    {
                        Object.keys(this.state.events).map((event) => {
                            return (
                                <Col style={{marginBottom: 30}} sm={4}>
                                    <FadeIn delay="400">
                                    <Card style={{cursor: 'pointer'}}  className="eventProjectCard">
                                        <div onClick={() => window.location.href = '/events/info/' + this.orgId + '/' + event} className="eventProjectGradCard"></div>
                                        <CardBody onClick={() => window.location.href = '/events/info/' + this.orgId + '/' + event}>
                                            <p className="eventProjectTitle"> {event} </p>
                                        </CardBody>
                                        <div style={{padding: 5}}>

                                        <Button style={{marginRight: 10, marginBottom: 20}} onClick={() => window.location.href = '/c/' + this.orgId + '/' + event} className="float-right getLink"> Link </Button>
                                        </div>
                                    </Card>
                                    </FadeIn>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>


            </div>

        )
    }
}

export default AllEventsPage;