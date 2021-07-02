import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { CardBody } from "reactstrap";
import { Icon } from "semantic-ui-react";

export const CalendarBanner = ({
    ...restProps
}) => {
    const [open, isOpen] = useState(true);

    const closeBanner = () => { isOpen(false) }

    return (
        <div>
            {
                open ?
                <div>
                <Card className="instructionCard formCard">
                    <CardBody style={{position: 'relative'}}>
                        <Icon className="cancelInstructionBtn" onClick={closeBanner} name="cancel" />
                        <p className="instructionTitle"> Calendar Mode <Icon style={{color: '#EA60DC', fontSize: '13px'}} name="triangle right" /> </p>
                        <p className="instructionSubTitle"> Click on any session & find more details about it </p>
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