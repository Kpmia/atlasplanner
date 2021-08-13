import React from "react";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import { Icon, Popup, Search } from "semantic-ui-react";
import moment from "moment"
import FadeIn from "react-fade-in";
import { DeleteBooking } from "../../components/modals/DeleteBooking";
import { CalendarBookings } from "../../components/CalendarBookings";

export class ViewBookings extends React.Component {
    orgId = this.props.orgId
    eventId = this.props.eventId
    sessionId = this.props.sessionId
    state={
        sessionInfo: this.props.sessionInfo,
        chosenBooking: [],
        viewLists: {
            "dateList": [],
            "peopleList": []
        },
        viewName: 'time',
        search: '',
        isLoading: true,
        pageFound: false
    }

    isLoading = () => {
        this.setState({ isLoading : false })
    };

    renderList = async(sessionInfo) => {
        const peopleList = {}
        const emails = []

        sessionInfo.map((timeslot) => {
            Object.keys(timeslot.filled).map((person) => {
                if (emails.includes(timeslot.filled[person].email)) {
                    if (!peopleList[timeslot.filled[person].email].name.includes(timeslot.filled[person].name)) {
                        peopleList[timeslot.filled[person].email]['name'].push(timeslot.filled[person].name)
                    }
                    peopleList[timeslot.filled[person].email]['timeslots'].push({
                        'start_time': timeslot.actual_start,
                        '_id': person,
                        "name": timeslot.filled[person].name,
                        'end_time': timeslot.actual_end
                    })
                } else {
                    console.log(peopleList[timeslot.filled[person].email])

                    peopleList[timeslot.filled[person].email] = {
                        "id": person,
                        "name": [timeslot.filled[person].name],
                        "email": timeslot.filled[person].email,
                        'timeslots': [{
                            '_id': person,
                            'start_time': timeslot.actual_start,
                            "name": timeslot.filled[person].name,
                            'end_time': timeslot.actual_end
                        }]
                    }
                }
                emails.push(timeslot.filled[person].email)
            })
        })

        var lists = {
            "dateList": this.state.sessionInfo.timeslots,
            "peopleList": peopleList     
        }

        this.setState({ viewLists : lists })
    };

    componentDidMount() {
        this.renderList(this.state.sessionInfo.timeslots).then((session) => {
            this.isLoading();
        })
    }

    componentDidUpdate() {
        if (this.props.sessionInfo != this.state.sessionInfo) {
            this.setState({ sessionInfo : this.props.sessionInfo })
            this.renderList(this.props.sessionInfo.timeslots)
        }
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return (
            <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>

                <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                    <CardBody style={{padding: '3.25em'}}>
                    <a className="formStep"> All Bookings </a>

                    <p className="float-right" style={{cursor: 'pointer'}}> View by: 
                    <Icon style={{marginLeft: '7px'}} onClick={() => this.setState({ viewName : 'time' })} className={this.state.viewName == 'time'? 'highlighted-icon-link': null} name="calendar" /> Calendar
                    <Icon style={{marginLeft: '8px'}} onClick={() => this.setState({ viewName : 'profile' })} className={this.state.viewName == 'profile'? 'highlighted-icon-link': null}  name="user" />  Email</p>

                {
                    this.state.viewName == 'profile' ? 
                    <div>

                        <span>
                            <Input style={{width: '300px', marginTop: '10px'}} onChange={(text) => this.setState({ search : text.target.value })} placeholder="Search an email" />
                            <br></br>
                        </span>

                        <Row>

                        {
                            Object.keys(this.state.viewLists.peopleList).filter((a) => { if (a.indexOf(this.state.search) > -1) { return a } }).map((email) => {
                                return (
                                    <Col sm={4}>
                                        <Card style={{cursor: 'pointer'}}  className="eventProjectCard">
                                            <div style={{marginTop: 0}}  className="eventProjectGradCard"></div>
                                                <CardBody>
                                                <p style={{marginBottom: '10px'}} className="eventProjectTitle"> {email} </p>
                                                {
                                                    this.state.viewLists.peopleList[email].name.map((name) => {
                                                        return <p style={{marginBottom: '0px'}}> {name} </p>
                                                    })
                                                }

                                                <Button onClick={() => this.setState({ chosenBooking : email })} className="float-right view-slots-btn"> View Slots </Button>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>


                                                {
                                                    this.state.chosenBooking == email ? 
                                                    <div>
                                                        <hr style={{marginTop: '0px'}} />
                                                        <p style={{fontSize: '14px'}} className="eventProjectTitle"> Selected slots </p>

                                                        {this.state.viewLists.peopleList[email].timeslots.map((email) => {
                                                            if (new Date(email.start_time).getDate() == new Date(email.end_time).getDate().toString()) {
                                                                console.log(email.name)
                                                                return <FadeIn>
                                                                <p> <Icon name="clock outline" style={{marginRight: '5px'}} /> 
                                                                    
                                                                    {monthNames[new Date(email.start_time).getMonth()].toString()} {new Date(email.start_time).getDate().toString()}, {new Date(email.end_time).getFullYear().toString()} at {moment(email.start_time).format("hh:mma")} - {moment(email.end_time).format("hh:mma")} 
                                                                    <Popup content="Delete booking" trigger={<DeleteBooking  bookingName={email.name} timestamp={`${monthNames[new Date(email.start_time).getMonth()].toString()} ${new Date(email.start_time).getDate().toString()}, ${new Date(email.end_time).getFullYear().toString()} at ${moment(email.start_time).format("hh:mma")} - ${moment(email.end_time).format("hh:mma")}`}  orgId={this.orgId} session={this.state.sessionInfo} booking={this.state.viewLists.peopleList[this.state.chosenBooking]} eventId={this.eventId} sessionId={this.state.sessionInfo['_id']} bookingId={email._id} />} />
                                                                    </p>
                                                                </FadeIn>
                                                            }
                                                            return <p> <Icon name="clock outline" style={{marginRight: '5px'}} /> 
                                                                {monthNames[new Date(email.start_time).getMonth()].toString()} {new Date(email.start_time).getDate().toString()}-{monthNames[new Date(email.end_time).getMonth()].toString()} {new Date(email.end_time).getDate().toString()}, {new Date(email.end_time).getFullYear().toString()} at {moment(email.start_time).format("hh:mma")} - {moment(email.end_time).format("hh:mma")} 
                                                              <Popup content="Delete booking"  trigger={<DeleteBooking bookingName={email.name} timestamp={`${monthNames[new Date(email.start_time).getMonth()].toString()} ${new Date(email.start_time).getDate().toString()}-${monthNames[new Date(email.end_time).getMonth()].toString()} ${new Date(email.end_time).getDate().toString()}, ${new Date(email.end_time).getFullYear().toString()} at ${moment(email.start_time).format("hh:mma")} - ${moment(email.end_time).format("hh:mma")} `} session={this.state.sessionInfo} booking={this.state.viewLists.peopleList[this.state.chosenBooking]} orgId={this.orgId} eventId={this.eventId} sessionId={this.state.sessionInfo['_id']} bookingId={email._id} />} />
                                                            </p>
                                                        })}
                                                    </div>

                                                    : null

                                                }
                                            </CardBody>
                                        </Card>
                            
                                    </Col>                               
                                    )
                            })
                        }
                        </Row>

                    </div>

                    :
                    <div>
                        <br></br>
                        <CalendarBookings sessionInfo={this.state.sessionInfo} />
                    </div>
                }

                </CardBody>
            </Card>
            

            </div>
        )
    }
}