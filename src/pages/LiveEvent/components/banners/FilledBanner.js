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
                    <CardBody style={{position: 'relative', maxHeight: '190px', overflowY: 'auto'}}>
                        <Icon className="cancelInstructionBtn" onClick={closeBanner} name="cancel" />
                        <p style={{marginBottom: 3}} className="instructionTitle"> Filled by </p>
                        <hr style={{marginBottom: '6px', marginTop: '0px'}} />
                        {
                            Object.keys(filled).map((time) => {
                                return (
                                    <div style={{marginTop: '2px', marginBottom: '3px'}}>
                                        <p style={{marginBottom: '0px', fontWeight: 'bold'}} className="instructionSubTitle"> <Icon name="triangle right" /> {filled[time]["name"]} </p>
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