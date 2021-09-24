import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { AreYouSureModal } from "../../../components/AreYouSureModal";
import { HTMLEditor } from '../../../components/HTMLEditor'
import { PreviewModal } from "../../../components/PreviewModal";


export const StepTwo = ({
    orgId, 
    eventId,
    details,
    handleDetails, 
    getNextStep,
    ...restProps
}) => {
    const [emailFormat, setFormat] = useState("")
    const [subjectLine, setSubject] = useState("")

    const handleFormat = (isHtmlObj, value) => {
        setFormat(value);
        if (isHtmlObj) {
            handleDetails('email_html_obj', value)
        } else {
            handleDetails('email_format', value.toString('html'))
        }
    };

    const handleSubLine = (subject) => {
        handleDetails('subject_line', subject)
    };
    
    const goBack = () => {
        getNextStep(1);
    };

    const submitEmail = () => {
        getNextStep(3);
    };

    console.log(emailFormat)

    
    return (
        <div>
            <div style={{borderBottom: '1px solid rgb(29 27 27 / 17%) '}}>
                <p className="formStep" style={{marginBottom: 10}}> Create a Custom Email </p>
            </div>

            <br></br>

            <p> If you have included email addresses for certain profiles, 
                you can customize your email to them, or keep the default 
                template. Preview the email by clicking on the Preview 
                button to view. Clicking next will not automatically send 
                the emails to the recipients and will ask you to confirm 
                beforehand.  </p>

            <div className="outline-html">
                <Input onChange={(text) => handleSubLine(text.target.value)} required placeholder="RE: Subject Line" />
                <br></br>
                <HTMLEditor initialState={details.email_html_obj} readOnly={false} setFormat={handleFormat} />
            </div>
            <br></br>
                <Button style={{background: 'black', color: 'white'}} onClick={goBack}> Back </Button> 
                <AreYouSureModal getNextStep={getNextStep} eventId={eventId} orgId={orgId} details={details} />
                <PreviewModal subjectLine={details.subject_line} emailFormat={details.email_format}  />
        </div>
    )
}