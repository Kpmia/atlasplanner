import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { Button, Input, Row } from "reactstrap";
import { Form, FormField, Icon, TextArea } from "semantic-ui-react";
var validator = require("email-validator");


export const StepSix = ({
    memberInfo,
    handleChange,
    stepChange,
    ...restProps
}) => {
    const [linkedin, setLinkedin] = useState(memberInfo["box_a"]);
    const [email, setEmail] = useState(memberInfo["email"]);
    const [description, setDesc] = useState(memberInfo["descriptions"]);
    var recaptchaRef = React.createRef();

    const handleEmailChange = (email) => {
        handleChange("email", email)
        setEmail(email)
    };

    const handleDescChange = (desc) => {
        handleChange("descriptions", desc)
        setDesc(desc)
    };

    const handleLinkedinChange = (linkedin) => {
        handleChange("box_a", linkedin)
        setLinkedin(linkedin)
    };

    const handleStepChange = (num) => {
        stepChange(num)
    };

    const getRecapKey = (key) => {
        console.log(key)
        stepChange(7, key)
    };

    const validateEmail = (email) => {
        if (validator.validate(email)) {
            return true;
        }
        toast.dark("Enter a valid email.")
        return false;
    };

    return (
        <div>

            <p style={{marginBottom: '10px'}} className="create-session-title"> Tell us a bit more about yourself. </p>

            <Row style={{justifyContent: 'center'}}>
                <p style={{marginBottom: '40px', width: 397}} className="create-session-p1"> Fill in details about who you are - these fields are optional. </p>
            </Row>


            <Row style={{justifyContent: 'center', marginBottom: '7px'}}>
                <Input 
                    className="create-session-input"
                    style={{height: '44px'}}
                    required
                    onChange={(text) => handleEmailChange(text.target.value)}
                    placeholder="Enter your email (required)" 
                />
            </Row>

            <Row style={{justifyContent: 'center', marginBottom: '25px'}}>
            <Input 
            className="create-session-input"
            style={{height: '44px'}}

                onChange={(text) => handleLinkedinChange(text.target.value)}
                placeholder="Enter your Linkedin profile (optional)" 
            />
            </Row>

            <Row style={{justifyContent: 'center'}}>
                <Form>
                    <TextArea
                        icon={<Icon name="calendar" />}
                        iconPosition='left' 
                    
                        style={{height: '100%', minHeight: '100px'}}
                        className="create-session-input"
                        onChange={(text) => handleDescChange(text.target.value)}
                        placeholder="Anymore details about this session (optional)" 
                    />
                </Form>
            </Row>

            <br></br>
            <br></br>

            <Row style={{justifyContent: 'center'}}>
                <Button className="create-session-back-btn" onClick={() => handleStepChange(5)}> Back </Button>
                <Button style={{marginLeft: '20px'}} className="create-session-next-btn" disabled={email == ""? true : false} onClick={() => { if (validateEmail(email)) { recaptchaRef.current.execute() }}}> 
                    Next 
                   
                </Button>
            </Row>
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={"6LcX80MbAAAAAEQ0Q69Jlbg43dqFGAnfedxpBKBs"}
                onChange={getRecapKey}
            />

        </div>
    )
}