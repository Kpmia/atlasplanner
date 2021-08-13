import React from "react"
import { StepManager } from "./steps/step-manager/StepManager";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { CreateSessionUtil } from "../../utils/CreateSessionUtil";
import FadeIn from "react-fade-in";
import { Row } from "reactstrap";
import { EmailService } from "../../../../networking/emails/EmailService";
import moment from "moment"
import { Slide, toast, ToastContainer } from "react-toastify";
import { SessionService } from "../../../../networking/sessions/SessionService";

export class Onboarding extends React.Component {
    state={
        step: 1,
        memberInfo: {
            name: "",
            category: "",
            email: "",
            section: "",
            descriptions: "",
            box_b: "",
            box_c: "",
            box_a: "",
            timeslots: [],
            link: "",
            key: "",
        },
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        isFinished: false
    }

    handleChange = (key, value) => {
        var memberInfo = this.state.memberInfo
        memberInfo[key] = value;
        return this.setState({ memberInfo : memberInfo });
    }

    getStepComponent = (stepNum) => {
        return StepManager(stepNum, { orgId : this.state.orgId, eventId: this.state.eventId },  this.state.memberInfo, this.handleChange, this.handleStepChange);
    };

    handleStepChange = (num, key) => {
        if (num == 7) {
            this.createSession(key)
            this.setState({ isFinished : true })
        }
        return this.setState({ step : num })
    };

    createSession = async(key) => {
       await SessionService.createSession(this.state.orgId, this.state.eventId, this.state.memberInfo).then((session) => {
            if (session) {
                this.sendConfirmEmail(session["_id"], key);
            } else {
                toast.dark('Key is incorrect.', { transition : Slide })
            }
        })
    };

    sendConfirmEmail = async(sessionId, key) => {

        var stringifyTimeslots = this.state.memberInfo.timeslots.map((time) => {
            return `<span> ${moment(time.actual_start).format("MM-DD-YYYY hh:mm A")}-${moment(time.actual_end).format("MM-DD-YYYY hh:mm A")} <br /> </span>`
        }).join(`\n`)


        const emailBody = {
            "email": this.state.memberInfo.email,
            "name": this.state.memberInfo.name,
            "link": this.state.memberInfo.link,
            "timeslots": stringifyTimeslots,
            "editURL": `${window.location.origin}/profile/${this.state.orgId}/${this.state.eventId}/${sessionId}`,
            "key": key
        }

        await EmailService.sendConfirmEmail(emailBody).then((email) => {
            console.log(email)
        })
    };


    render() {

        return (
            <div>

                {
                    this.state.step != 1 ?
                        <FadeIn>
                            <Row style={{justifyContent: 'center', marginBottom: '60px'}}>
                                <div style={{width: '600px'}}>
                                    <Stepper activeStep={this.state.step == 5 ? 2 : this.state.step - 2}>
                                        {CreateSessionUtil.getStepIcons().map((label, idx) => (
                                            <Step key={idx}>
                                                <StepLabel StepIconComponent={label["icon"]}> {label.label}</StepLabel>
                                            </Step>
                                            ))}
                                    </Stepper>
                                </div>
                            </Row>
                        </FadeIn>
                    : null
                }
              

                {
                    this.state.isFinished ? 
                    <div>
                        <p className="finished-title">You’re finished.</p>

                        <Row style={{justifyContent: 'center'}}>
                            <p style={{width: '397px', marginBottom: '30px'}} className="text-center finished-text"> You can find your live session on <span style={{textDecoration: "underline", cursor: 'pointer'}} onClick={() => window.open(`/c/${this.state.orgId}/${this.state.eventId}`) }>{window.location.origin}/c/{this.state.orgId}/{this.state.eventId}</span>.  </p>
                        </Row>

                        <Row style={{justifyContent: 'center'}}>
                            <p style={{width: '397px', fontWeight: 600}} className="text-center finished-text"> You should now receive notifications of bookings. You can edit or cancel your schedule or details via a link from your email. </p>
                        </Row>

                    </div>
                    : this.getStepComponent(this.state.step)
                }

                <ToastContainer />
            </div>
        )
    }
}