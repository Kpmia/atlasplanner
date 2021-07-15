import React from "react";
import { Button, Card, CardBody, Row } from "reactstrap";
import { SessionService } from "../../networking/sessions/SessionService";
import { BookingService } from '../../networking/bookings/BookingService'
import { LoadingPage } from "../../LoadingPage";
import { toast, ToastContainer } from "react-toastify";

class DeleteBooking extends React.Component {
    constructor(props) {
        super(props)
        this.orgId = this.props.match.params.orgId
        this.eventId = this.props.match.params.eventId
        this.sessionId = this.props.match.params.sessionId
        this.bookingId = new URLSearchParams(window.location.search).get('id')
        this.state ={
            booking: "",
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
        return BookingService.deleteBooking(this.orgId, this.eventId, this.sessionId, this.bookingId).then((resp) => {
            if (resp) {
                toast.dark('Successfully cancelled the reservation.')
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

        return (
            <div>

            <Card style={{width: '500px'}} className="delete-booking-card">
                <CardBody>

                {
                    this.state.success ? 
                    <div style={{height: '200px', width: '400px'}}>
                        <p style={{width: '300px', }} className="delete-booking-card"> You have successfully cancelled your reservation! Changes have now been made live. We hope to see you soon again! </p>
                    </div>

                    :
                    <div>
                        <p style={{textAlign: 'center', fontWeight: 500}}> Cancel a reservation </p>
                        <p> Hi {this.state.booking.name}, looks like you are deleting a reservation with {this.state.session.name} that was supposed to be at: {this.state.session.link.length != "" ? this.state.session.link.length : `owner did not set a location`}.  </p>
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