import React, { Component } from "react"
import { Button, CardBody, Col,  Row } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import { Card } from "@material-ui/core";
import { TabManager, tabNames } from "./subtabs/TabManager";


export class CreateSession extends Component {
    state={
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        eventInfo: this.props.eventInfo,
        pageComponent: [],
        tab: ""
    }

    switchTab = (name) => {
        this.setState({ tab : name })
        return this.setState({ pageComponent : TabManager(name, this.state.orgId, this.state.eventId, this.state.eventInfo) })
    };


    render() {
                   
        return (
            <div>
            <Card style={{outline: '#ffffff21 solid 40px'}} className="formCard">
                <CardBody style={{padding: '3.25em'}}>

                    {
                        this.state.tab.length == 0 ?

                        <div>
                            <p style={{textAlign: 'center', fontSizeL: '16px'}}> Choose how you would like to create profiles </p>
                        <div>

                            <Row style={{justifyContent: 'center'}}>
                            {
                                tabNames.map((tab) => {
                                    return <Button className="profile-creation-btn"  style={{marginLeft: '10px'}} onClick={() => this.switchTab(tab.route)}> {tab.name} </Button>
                                })
                            }
                            </Row>

                          
                        </div>
                        </div>
                        :
                        this.state.pageComponent}
                        <br></br>
                    </CardBody>
                </Card>
            </div>
        );
      }
    }
