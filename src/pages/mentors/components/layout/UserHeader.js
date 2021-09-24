import { CircularProgress } from "@material-ui/core";
import React, {Component} from "react";
import { Button } from "reactstrap";
import { Icon, Popup } from "semantic-ui-react";

export class AdminHeader extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        eventDetails: this.props.eventDetails,
        isLoading: true
    }

    isLoading = () => {
        this.setState({ isLoading : false });
    };

    render() {
        return (
            <div style={{background: '#151515'}} className="adminEventHeader">
                <div className="container">
                    <div> 
                        <a onClick={() => window.location.href = '/'}  className="userHeaderTitle" style={{marginRight: 20, cursor: 'pointer', color:'white'}}>  <Icon style={{marginLeft: -10, color: 'white', cursor: 'pointer', marginRight: 10, fontSize: '12px', cursor: 'pointer'}} name="home" />  Home </a>
                        <Popup on="hover" trigger={<Button className="userHeaderBtn"> Privacy Settings </Button>} content="Coming soon! Working on the features to make the people in event reservations private as well as the access to this document!"/>
                        <a onClick={() => window.location.href = '/'}  style={{cursor: 'pointer', marginTop: 7}} className="float-right poweredByTxt">  Powered by atlasplanner </a>
                    </div>
                </div>
            </div>
        )
    }
}