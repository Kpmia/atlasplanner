import React from "react";
import { Button, Card, CardBody, Row } from "reactstrap";
import { SessionService } from "../../networking/sessions/SessionService";
import { BookingService } from '../../networking/bookings/BookingService'
import { LoadingPage } from "../../LoadingPage";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment"
import { EmailService } from "../../networking/emails/EmailService";

class DeleteBooking extends React.Component {
    constructor(props) {
        super(props)
        this.orgId = this.props.match.params.orgId
        this.eventId = this.props.match.params.eventId
        this.sessionId = this.props.match.params.sessionId
        this.bookingId = new URLSearchParams(window.location.search).get('id')
        this.state ={
            booking: "",
            select_timestamp: [],
            session: "",
            isLoading: true,
            success: false,
            notFound: false
        }
    }

    getSession = async(orgId, eventId, sessionId) => {
        return await SessionService.getSession(orgId, eventId, sessionId).then((session) => {
            if (session) {
                this.setState({ session : session[0] })
                return session[0];
            } else {
                this.setState({ notFound : true })
                return undefined;
            }
        })
    };

    getBooking = async(session, id) => {
        const isBooked = session["timeslots"].some((slot) => {
            if (slot["filled"][id]) {
                this.setState({ select_timestamp : slot })
                this.setState({ booking : slot["filled"][id] })
                return true;
            }
        })
        if (!isBooked) {
            this.setState({ notFound : true })
        }
    };

    isLoading = () => {
        this.setState({ isLoading : false })
    };


    deleteBooking = () => {

        var reformat_timestamp = `${moment(this.state.select_timestamp.actual_start).format("MM-DD-YYYY hh:mm a")} to ${moment(this.state.select_timestamp.actual_end).format("MM-DD-YYYY hh:mm a")}`

        const sendingEmail = {
            "name": this.state.booking["name"],
            "email": this.state.booking["email"],
            "timestamp": reformat_timestamp,
            "session": this.state.session
        }

        return BookingService.deleteBooking(this.orgId, this.eventId, this.sessionId, this.bookingId).then((resp) => {
            if (resp) {
                toast.dark('Successfully cancelled the reservation.')
                EmailService.sendCancelEmail(sendingEmail);
                this.setState({ success : true })
            }
        })
    };

    componentDidMount() {

        this.getSession(this.orgId, this.eventId, this.sessionId).then((session) => {
            if (session) {
                this.getBooking(this.state.session, this.bookingId).then(() => {
                    this.isLoading()
                })
            }
        });
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingPage />
        }

        if (this.state.notFound) {
            return "Page not found"
        }

        var reformat_timestamp = `${moment(this.state.select_timestamp.actual_start).format("MM-DD-YYYY hh:mm a")} to ${moment(this.state.select_timestamp.actual_end).format("MM-DD-YYYY hh:mm a")}`
        console.log(reformat_timestamp)

        return (
            <div>

            <Card style={{width: '500px'}} className="delete-booking-card">
                <CardBody>

                {
                    this.state.success ? 
                    <div style={{height: '200px', width: '400px'}}>
                        <p style={{width: '300px', }} className="delete-booking-card"> You have successfully cancelled your reservation! The owner should receive a notification of your cancellation. We hope to see you soon again! </p>
                    </div>

                    :
                    <div>
                        <p style={{textAlign: 'center', fontWeight: 500}}> Cancel a reservation </p>
                        <p> Hi {this.state.booking.name}, looks like you are deleting a reservation with {this.state.session.name} that was supposed to be at: {this.state.session.link.length != "" ? this.state.session.link : `owner did not set a location`}.  </p>
                        <p> Are you positive you want to cancel this reservation? You cannot undo this action.  </p>

                        <Button style={{width: '130px'}} className="float-right backBtn" onClick={() => this.deleteBooking()}> Yes, cancel </Button>
                    </div>
                    }
                    </CardBody>
                </Card>

                <ToastContainer />
            </div>
        )
    }
}

export default DeleteBooking