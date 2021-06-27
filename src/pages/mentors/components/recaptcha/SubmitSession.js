import React, { Component } from "react";
import FadeIn from "react-fade-in";
import ReCAPTCHA from "react-google-recaptcha";
import { Slide, toast } from "react-toastify";
import { Button } from "reactstrap";
import { Checkbox, Input } from "semantic-ui-react";
import { EmailService } from "../../../networking/emails/EmailService";
import { SessionService } from "../../../networking/sessions/SessionService";
import { SessionUtils } from "../../utils/SessionUtils";
import moment from "moment"

export class CreateSessionReCaptcha extends Component {
    state = {
        sessionData: this.props.sessionData,
        timeslots: this.props.timeslots,
        sendEmail: false,
        email: "",
        sessionId: "",
    }

    orgId = this.props.orgId
    eventId = this.props.eventId
    showConfirmPage= this.props.showConfirmPage
    recaptchaRef = React.createRef();

    createSession = async(key) => {
        var session = this.state.sessionData;
        session["timeslots"] = SessionUtils.reformatTimeslots(this.state.timeslots);

       await SessionService.createSession(this.orgId, this.eventId, session).then((session) => {
            if (session) {
                this.setState({ sessionId : session["_id"] })
                this.showConfirmPage(session["_id"])
                if (this.state.sendEmail) {
                    this.sendConfirmEmail(key);
                }
            } else {
                toast.dark('Key is incorrect.', { transition : Slide  })
            }
        })
    };

    sendConfirmEmail = async(key) => {

        var stringifyTimeslots = this.state.timeslots.map((time) => {
            return `<span> ${moment(time.start).format("MM-DD-YYYY hh:mm A")}-${moment(time.end).format("MM-DD-YYYY hh:mm A")} <br /> </span>`
        }).join(`\n`)

        const emailBody = {
            "email": this.state.email,
            "name": this.state.sessionData["name"],
            "link": this.state.sessionData["link"],
            "timeslots": stringifyTimeslots,
            "editURL": `${window.location.origin}/editsession/${this.orgId}/${this.eventId}?tab-name=edit-session&user=${this.state.sessionId}`,
            "key": key
        }

        await EmailService.sendConfirmEmail(emailBody).then((email) => {
            console.log(email)
        })
    };

    submitSession = (value) => {
        this.createSession(value)
    };

    validateEmail = (email) => {
        if (this.state.sendEmail) {
            if (email.length == 0) {
                toast.dark('Please enter your email.')
                return false;
            }
        }
        return true;
    };

    validateTimeslot = (timeslots) => {
        if (timeslots.length == 0) {
            toast.dark('Please have at least one timeslot.')
            return false;
        }
        return true;
    };

    componentDidUpdate() {
        if (this.props.timeslots != this.state.timeslots) {
            this.setState({ timeslots : this.props.timeslots })
        }

        if (this.props.sessionData != this.state.sessionData) {
            this.setState({ sessionData : this.props.sessionData })
        }
    }

    render() {

        return (
            <span>
                <span className="float-right"> <Checkbox style={{paddingTop: '4px'}} checked={this.state.sendEmail} onChange={() => this.setState({ sendEmail : !this.state.sendEmail })}   /> I wish to have an email confirmation sent to me. 
                {this.state.sendEmail ? <FadeIn> <Input className="float-right" type="email" style={{width:'250px'}} onChange={(text) => this.setState({ email : text.target.value })} placeholder="Please enter your email" /> </FadeIn>: null} </span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Button className="float-right nextBtn" onClick={() => { if (this.validateEmail(this.state.email) && this.validateTimeslot(this.state.timeslots)) { console.log('here'); this.recaptchaRef.current.execute(); }}}>
                    Submit
                    <ReCAPTCHA
                        ref={this.recaptchaRef}
                        size="invisible"
                        sitekey={"6LcX80MbAAAAAEQ0Q69Jlbg43dqFGAnfedxpBKBs"}
                        onChange={this.submitSession}
                    />
                </Button>
            </span>
        )
    }
}
