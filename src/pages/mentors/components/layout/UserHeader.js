import { CircularProgress } from "@material-ui/core";
import React, {Component} from "react";
import { Button } from "reactstrap";
import { Icon, Popup } from "semantic-ui-react";
import { UpdateEventModal } from "../../../Event/components/modals/UpdateEventModal";
import { EventService } from "../../../networking/events/EventService";
import { ShareSessionModal } from "../modals/ShareSessionModal";


export class AdminHeader extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        eventData: [],
        isAdmin: false,
        isLoading: true
    }

    checkAdmin = async(orgId, eventId) => {
        await EventService.getEvent(orgId, eventId).then((admin) => {
            if (admin != null) {
                this.setState({ isAdmin : true })
                this.setState({ eventData : admin })
            } 
            this.isLoading()
        })
    };

    isLoading = () => {
        this.setState({ isLoading : false });
    };

    componentDidMount() {
        this.checkAdmin(this.props.orgId, this.props.eventId)
    }

    render() {
        return (
            <div className="adminEventHeader">
                <div className="container">
                    {
                        this.state.isLoading ? 
                        <p style={{color: 'white'}}> Loading persona </p>
                        :
                        this.state.isAdmin ?
                        <div> 

                            <a className="userHeaderTitle" style={{marginRight: 20}}>  <Icon  onClick={() => window.location.href = '/'}  style={{marginLeft: -10, color: '#999999', cursor: 'pointer', marginRight: 10, fontSize: '12px'}} name="home" />  Admin Tools </a>
                            <UpdateEventModal orgId={this.state.orgId} eventId={this.state.eventId} eventData={this.state.eventData}>
                                <Button className="userHeaderBtn"> Edit Event </Button>
                            </UpdateEventModal>
                            <Popup on="hover" trigger={<Button className="userHeaderBtn"> Privacy Settings </Button>} content="Coming soon! Working on the features to make the people in event reservations private as well as the access to this document!"/>
                            <a onClick={() => window.location.href = '/'}  style={{cursor: 'pointer', marginTop: 7}} className="float-right poweredByTxt">  Powered by atlasplanner </a>

                        </div>

                        :
                      <div>
                            <a className="userHeaderTitle" style={{ marginRight: 20, marginTop: 10, position: 'relative', top: '7px'}}>  <Icon style={{marginLeft: -10}} name="eye" />  You are anonymously viewing this live document </a>

                            <a onClick={() => window.location.href = '/'}  style={{cursor: 'pointer', marginTop: 7}} className="float-right poweredByTxt">  Powered by atlasplanner </a>

                    </div>

                    }
                </div>
            </div>
        )
    }
}