import React, { useState } from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { CreateSessionUtil } from "../../../utils/CreateSessionUtil";

export const StepFour = ({
    memberInfo,
    handleChange,
    stepChange,
    ...restProps
}) => {
    const [roles, setRole] = useState(memberInfo["category"]);

    const handleRoleChange = (role) => {
        handleChange("category", role)
        setRole(role)
    };

    const handleStepChange = (num) => {
        stepChange(num)
    }

    return (
        <div>

            <p style={{marginBottom: '10px'}} className="create-session-title"> What is your role? </p>


            <Row style={{justifyContent: 'center'}}>
                <p style={{marginBottom: '20px', width: 397}} className="create-session-p1"> Choose the role you play in this organization. </p>
            </Row>

            <div style={{width: '600px'}} className="container">
            <Row style={{justifyContent: 'center'}}>

            {
                CreateSessionUtil.getRole().map((role) => {
                    if (roles == role) {
                        return (
                            <Col style={{maxWidth: 'fit-content', marginTop: '30px'}}>
                                <Card style={{border: '1px solid black'}} className="create-session-mini-cards" onClick={() => handleRoleChange(role)}>
                                    <CardBody>
                                        <p style={{color: 'black'}} className="create-session-mini-card-title"> {role} </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                    return (
                        <Col style={{maxWidth: 'fit-content', marginTop: '30px'}}>
                            <Card className="create-session-mini-cards" onClick={() => handleRoleChange(role)}>
                                <CardBody>
                                    <p className="create-session-mini-card-title"> {role} </p> 
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
        </div>

        <br></br>
        <br></br>

            <Row style={{justifyContent: 'center'}}>
                <Button className="create-session-back-btn"  onClick={() => handleStepChange(3)}> Back </Button>
                <Button style={{marginLeft: '20px'}} className="create-session-next-btn" disabled={roles == "" ? true : false} onClick={() => handleStepChange(5)}> Next </Button>
            </Row>

            <br></br>
            <br></br>
        </div>
    )
}