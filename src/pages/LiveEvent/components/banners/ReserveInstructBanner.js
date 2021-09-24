import { Card } from "@material-ui/core";
import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { CardBody } from "reactstrap";
import { Icon } from "semantic-ui-react";

export const ReserveInstructBanner = ({
    maxCapacity,
    ...restProps
}) => {
    const [open, isOpen] = useState(true);

    console.log(maxCapacity)

    const closeBanner = () => { isOpen(false) }

    return (
        <div>

            {
                open ?
                <div>
                    <FadeIn>
                        <Card className="formCard instructionCard">
                            <CardBody style={{position: 'relative'}}>
                                <Icon className="cancelInstructionBtn" onClick={closeBanner} name="cancel" />
                                <p className="instructionTitle"> Reserve Slots </p>
                                <p className="instructionSubTitle">  Click on a slot to book a session.</p>
                            </CardBody>
                        </Card>
                        <br></br>
                        <Card className="formCard instructionCard">
                            <CardBody style={{position: 'relative'}}>
                                <Icon className="cancelInstructionBtn" onClick={closeBanner} name="cancel" />
                                <p className="instructionTitle"> Maximum Capacity <Icon name="exclamation triangle" />  </p>
                                <p className="instructionSubTitle">  Owner of this session has only allowed {maxCapacity} reservations per timeslot.</p>
                            </CardBody>
                        </Card>
                    </FadeIn>
                    <br></br>
                </div>
                :
                null
            }
        </div>
    )
}