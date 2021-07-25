import React, { useState } from "react"
import { Button, Input, Row } from "reactstrap";
import { Icon } from "semantic-ui-react";


export const StepOne = ({
    sessionInfo,
    memberInfo,
    handleChange,
    stepChange,
    ...restProps
}) => {
    const [fullName, setName] = useState(memberInfo["name"])

    const handleNameChange = (fullName) => {
        handleChange("name", fullName)
        setName(fullName)
    };

    const handleStepChange = () => {
        stepChange(2)
    }

    return (
        <div>

            <Row style={{justifyContent: 'center', fontSize: '30px', marginBottom: '30px'}}>
                <Icon name="diamond" />
            </Row>

            <Row style={{justifyContent: 'center'}}>
                <img src={require('../../../../../../assets/atlasplanner-img.svg')} />
            </Row>

            <Row style={{justifyContent: 'center', marginTop: '20px'}}>
                <p style={{marginBottom: '34px'}} className="create-session-intro-text">  The organizer {sessionInfo.orgId} is hosting the event {sessionInfo.eventId}. Add your availability to start taking part.</p>
            </Row>

            <Row style={{justifyContent: 'center', marginTop: '20px'}}>
                <Input 
                    className="create-session-input"
                    value={memberInfo["name"]}
                    placeholder="Full Name" 
                    style={{marginBottom: '29px', height: '50px'}}
                    onChange={(text) => { handleNameChange(text.target.value) }}
                />
            </Row>

            <Row style={{justifyContent: 'center', marginTop: '20px'}}>
                <Button style={{background: '#222222'}} className="lets-get-started" onClick={handleStepChange} disabled={fullName == "" ? true : false}> Let’s get started</Button>
            </Row>

        </div>
    )
}