import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Card, CardBody, Col, Row } from "reactstrap";

export class EditSession extends Component {
    state = {
        sessions: this.props.sessions
    }


    render() {
        return (
            <Row id="sessions_body">

                Edit Session
           

            </Row>

        )
    }
}