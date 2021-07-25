import React, { useState } from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { CreateSessionUtil } from "../../../utils/CreateSessionUtil";

export const StepFive = ({
    memberInfo,
    handleChange,
    stepChange,
    ...restProps
}) => {

    const [industry, setIndustry] = useState(memberInfo["box_b"]);

    const setIndustryy = (industry) => {
        setIndustry(industry)
        handleChange("box_b", industry)
    };

    const handleStepChange = (num) => {
        stepChange(num)
    };

    return (
        <div>
            <p style={{marginBottom: '10px'}} className="create-session-title"> What industry are you focused on? </p>


            <Row style={{justifyContent: 'center'}}>
                <p style={{marginBottom: '20px', width: 397}} className="create-session-p1"> Choose the industry your play in this organization </p>
            </Row>

            <div style={{width: '600px'}} className="container">
                <Row style={{justifyContent: 'center'}}>
                {
                    CreateSessionUtil.getIndustry().map((industryy) => {
                        if (industryy == industry) {
                            return (
                                <Col style={{maxWidth: 'fit-content', marginTop: '30px'}}>
                                    <Card style={{border: '1px solid black'}} className="create-session-mini-cards" onClick={() => setIndustryy(industryy)}>
                                        <CardBody>
                                            <p  style={{color: 'black'}} className="create-session-mini-card-title"> {industry} </p>
                                        </CardBody>
                                    </Card> 
                                </Col>
                            )
                        }
                            return (
                                <Col style={{maxWidth: 'fit-content', marginTop: '30px'}}>
                                    <Card className="create-session-mini-cards" onClick={() => setIndustryy(industryy)}>
                                        <CardBody>
                                            <p className="create-session-mini-card-title"> {industryy} </p>
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
                <Button className="create-session-back-btn" onClick={() => handleStepChange(4)}> Back </Button>
                <Button style={{marginLeft: '20px'}} className="create-session-next-btn" disabled={industry == "" ? true : false} onClick={() => handleStepChange(6)}> Next </Button>
            </Row>
            <br></br>
            <br></br>
        </div>
    )
}

