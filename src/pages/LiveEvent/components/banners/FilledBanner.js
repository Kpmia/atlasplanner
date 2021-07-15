import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { CardBody } from "reactstrap";
import { Icon } from "semantic-ui-react";

export const FilledBanner = ({
    filled,
    ...restProps
}) => {
    const [open, isOpen] = useState(true);
    
    console.log(filled)

    const closeBanner = () => { isOpen(false) }

    return (
        <div>
            {
                open ?
                <div>
                <Card className="instructionCard formCard">
                    <CardBody style={{position: 'relative', maxHeight: '150px', overflowY: 'auto'}}>
                        <Icon className="cancelInstructionBtn" onClick={closeBanner} name="cancel" />
                        <p style={{marginBottom: 3}} className="instructionTitle"> Filled by <Icon style={{color: '#EA60DC', fontSize: '13px'}} name="diamond" /> </p>
                        {
                            Object.keys(filled).map((time) => {
                                return (
                                    <div>
                                        <p style={{marginBottom: 0}} className="instructionSubTitle"> {filled[time]["name"]} </p>
                                        <p className="instructionSubTitle"> {filled[time]["email"]} </p>
                                    </div>
                                )
                            })
                        }
                    </CardBody>
                </Card>
                    <br></br>
                    <br></br>
                </div>

                :
                null
            }

        </div>
    )
}