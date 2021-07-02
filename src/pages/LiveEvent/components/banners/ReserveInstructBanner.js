import { Card } from "@material-ui/core";
import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { CardBody } from "reactstrap";
import { Icon } from "semantic-ui-react";

export const ReserveInstructBanner = ({
    ...restProps
}) => {
    const [open, isOpen] = useState(true);

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
                                <p className="instructionTitle"> Book/Reserve Slots <Icon style={{color: '#EA60DC', fontSize: '13px'}} name="triangle right" /> </p>
                                <p className="instructionSubTitle"> Blue represents filled slots, while black represents unfilled slots. Click on a slot to reserve/book, or view existing bookings by clicking on a filled slot. </p>
                            </CardBody>
                        </Card>
                    </FadeIn>
                    <br></br>
                    <br></br>
                </div>
                :
                null
            }
        </div>
    )
}