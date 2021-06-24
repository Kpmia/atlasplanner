import { CircularProgress } from "@material-ui/core";
import React, {Component} from "react";
import { Button } from "reactstrap";
import { Icon } from "semantic-ui-react";
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
        console.log(this.state.isLoading)
        return (
            <div className="adminEventHeader">
                <div className="container">
                    {
                        this.state.isLoading ? 
                        <p style={{color: 'white'}}> Loading persona </p>
                        :
                        this.state.isAdmin ?
                        <div> 

                            <a style={{color: 'white', fontWeight: 'bold', marginRight: 20}}>  <Icon style={{marginLeft: -10}} name="star" />  Admin Controls </a>
                            <UpdateEventModal orgId={this.state.orgId} eventId={this.state.eventId} eventData={this.state.eventData}>
                                <Button className="adminToolsBtn"> <Icon name="edit" /> Edit Event </Button>
                            </UpdateEventModal>
                            <Button className="adminToolsBtn"> <Icon name="cog" /> Privacy Settings </Button>
                            <a  style={{color: 'white', marginTop: 7, fontWeight: 'bold', fontSize: '13px'}} className="float-right"> <Icon style={{marginLeft: -10}} name="diamond" /> Powered by Atlasplanner. </a>

                        </div>

                        :
                      <p> User View </p>

                    }
                </div>
            </div>
        )
    }
}