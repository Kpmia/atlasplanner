import React, { useState } from "react";
import { Button, Input, Row } from "reactstrap";

export const StepTwo = ({
    memberInfo,
    handleChange,
    stepChange,
    ...restProps
}) => {
    const [location, setLocation] = useState(memberInfo["link"])

    const handleLocationChange = (location) => {
        handleChange("link", location)
        setLocation(location)
    };

    const handleStepChange = (num) => {
        stepChange(num)
    };

    return (
        <div>
            <p style={{marginBottom: '10px'}} className="create-session-title"> Where are you located? </p>

            <Row style={{justifyContent: 'center'}}>
                <p style={{marginBottom: '40px', width: 397}} className="create-session-p1"> Provide a location to where your session will be held. You can also provide a URL if your session is virtual. </p>
            </Row>

            <Row style={{justifyContent: 'center'}}>
                <Input
                    className="create-session-input"
                    value={memberInfo["link"]}
                    style={{height: '55px', marginBottom: '30px', width: 657}}
                    placeholder="Enter your location!" 
                    onChange={(text) => { handleLocationChange(text.target.value) }}
                />
            </Row>

            <Row style={{justifyContent: 'center'}}>
                <Button 
                
                    className="create-session-next-btn"
                    disabled={location == "" ? true : false}
                    onClick={() => handleStepChange(3)}
                > Next </Button>
            </Row>


        </div>
    )
}