import React, { useState } from "react";
import { Button, Row } from "reactstrap";


export const StepFour = ({
    eventId,
    orgId,
    ...restProps
}) => {
    const [emailFormat, setFormat] = useState("")
    
    return (
        <div>
            <div className="outline-html">
                <p style={{textAlign: 'center', marginBottom: '4px'}} className="finished-title">You’re finished.</p>

                <Row style={{justifyContent: 'center'}}>
                    <p style={{width: '397px', marginBottom: '0px'}} className="text-center finished-text"> The profiles have been created and emails have been sent. You can see the new profiles at <span style={{textDecoration: "underline", cursor: 'pointer'}} onClick={() => window.open(`/c/${orgId}/${eventId}`)}>{window.location.origin}/c/{orgId}/{eventId}</span>.</p>
                </Row>

            </div>
            <br></br>

        </div>
    )
}