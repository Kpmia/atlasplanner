import React, { Component } from "react"
import { Button, Row } from "reactstrap"
import { Icon } from "semantic-ui-react"
import { ShareLinkModal } from '../modals/ShareLinkModal';

export class Header extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        numPeople: this.props.numPeople
    }

    componentDidUpdate() {
        if (this.state.numPeople != this.props.numPeople) {
            this.setState({ numPeople : this.props.numPeople })
        }
    }

    render() {

        function splitDashestoSpaces(name) {
            var amendedStr = ""
            var str = name.split(/[-]+/)
            console.log(str)
            str.map((word) => {
                amendedStr += word.substring(0, 1).toUpperCase() + word.substring(1, word.length) + " "
            })
            return amendedStr;
        }

        var reformatEventName = splitDashestoSpaces(this.state.eventId)
        var reformatOrgName = splitDashestoSpaces(this.state.orgId)

        return (
            <div>
                 <div className="editEventHeader">
                    <div style={{marginTop: -10}} className="container">
                        <span onClick={() => window.location.href = '/'} style={{cursor: 'pointer'}} className="atlasPlannerName" > <Icon name="diamond" /> 
                         </span>
                         <span className="editEventTitle"> {reformatEventName} </span>
                         <p className="eventWhiteHeaderSubtitle"> Event document created & shared by {reformatOrgName}</p>
                        <div className="float-right">
                        <span className="userIcons"> <Row> {this.state.numPeople} </Row></span>
                       <ShareLinkModal orgId={this.state.orgId} eventName={this.state.eventId} /> 
                        <Button onClick={() =>  window.open("/c/" + this.state.orgId + "/" + this.state.eventId)} className="shareBtn"> <Icon name="globe" /> View Live Link </Button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}