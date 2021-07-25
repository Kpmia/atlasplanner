import React, { useState } from "react";
import { Button, Input, Row } from "reactstrap";
import CalendarScheduler from "../../calendars/CalendarScheduler";


export const StepThree = ({
    memberInfo,
    handleChange,
    stepChange,
    ...restProps
}) => {

    const [timeslots, setTimeslots] = useState(memberInfo["timeslots"]);

    const setTimeslotss = (timeslots) => {
        setTimeslots(timeslots)
        handleChange("timeslots", timeslots)
    };

    const handleStepChange = (num) => {
        stepChange(num)
    };

    return (
        <div>

            <p style={{marginBottom: '10px'}} className="create-session-title"> When are you available? </p>

            <Row style={{justifyContent: 'center'}}>
                <p style={{marginBottom: '40px', width: 397}} className="create-session-p1"> Drag your mouse across cells to display your availability.  Delete availability by clicking on a cell & a modal should prompt you further. </p>
            </Row>

            <Row style={{justifyContent: 'center'}}>
                <CalendarScheduler setTimeslots={setTimeslotss} />
            </Row>
            <br></br>
            <br></br>

            <Row style={{justifyContent: 'center'}}>
            <Button className="create-session-back-btn" onClick={() => handleStepChange(2)}> Back </Button>
            <Button style={{marginLeft: '20px'}} className="create-session-next-btn" disabled={timeslots.length == 0 ? true : false} onClick={() => handleStepChange(4)}> Next </Button>
            </Row>
            <br></br>
            <br></br>
        </div>
    )
}

