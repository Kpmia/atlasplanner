import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { CardBody } from "reactstrap";
import { Icon } from "semantic-ui-react";

export const EventDescBanner = ({
    eventDescription,
    ...restProps
}) => {
    const [open, isOpen] = useState(true);

    const closeBanner = () => { isOpen(false) }

    return (
        <div>
            {
                open ?
                <div>
                <Card className="instructionCard">
                    <CardBody style={{position: 'relative'}}>
                        <Icon className="cancelInstructionBtn" onClick={closeBanner} name="cancel" />
                        <p className="instructionTitle"> Message set by host  </p>
                        {
                            eventDescription.length == 0 ?
                            <p style={{color: '#60616a70'}}> Coordinator did not set a message. </p>
                            :
                            <p className="instructionSubTitle"> {eventDescription} </p>
                        }
                    </CardBody>
                </Card>
                    <br></br>
                </div>

                :
                null
            }

        </div>
    )
}