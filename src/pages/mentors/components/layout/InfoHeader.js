import React, { Component } from "react"
import { Button, Row,  } from "reactstrap"
import { ShareLinkModal } from '../modals/ShareLinkModal';
import { AdminHeader } from "./UserHeader";
import GridOnIcon from '@material-ui/icons/GridOn';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Icon } from "semantic-ui-react";

export class Header extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
    }

    render() {

        function splitDashestoSpaces(name) {
            var amendedStr = ""
            var str = name.split(/[-]+/)
            str.map((word) => {
                amendedStr += word.substring(0, 1).toUpperCase() + word.substring(1, word.length) + " "
            })
            return amendedStr;
        }

        var reformatEventName = splitDashestoSpaces(this.state.eventId)
        var reformatOrgName = splitDashestoSpaces(this.state.orgId)

        return (
            <div>
                <AdminHeader orgId={this.state.orgId} eventId={this.state.eventId} />
                 <div className="editEventHeader">
                    <div style={{ height: '100%', borderLeft: '1px solid #2C2C2C', borderRight: '1px solid #2C2C2C'}} className="container">
                        <div className="flexMiddle">
                        <Icon onClick={() => window.location.href = '/'} className="diamondIcon" name="diamond" />
                        <div style={{height: '100%', marginTop: '-30px', position: 'absolute', right: '130px', height: '106px',boxShadow: '6px 14px 4px rgba(0, 0, 0, 0.25)', width: '1px', background: '#2C2C2C'}}></div>
                        <p className="orgNameLiveEventHeader"> <GridOnIcon  style={{color: 'white', fontSize: '13px', marginRight: '10px'}} /> {reformatOrgName} </p>

                        <div className="editEventTitleBg">
                            <span className="editEventTitle"> {reformatEventName} </span>
                        </div>

                        <span className="userIcons"> <Row> {this.state.numPeople} </Row></span>
                       <ShareLinkModal orgId={this.state.orgId} eventName={this.state.eventId} /> 
                        <Button className="shareBtn" onClick={() =>  window.open("/c/" + this.state.orgId + "/" + this.state.eventId)}>   Live Link <PlayArrowIcon style={{color: 'rgba(228, 228, 229, 0.3)', marginTop: '-4px', marginLeft: '3px'}} name="play circle outline" /> </Button>

                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}