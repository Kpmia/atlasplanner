import React, { Component } from "react";
import { SessionUtils } from "../../../../utils/SessionUtils";
import { TabManager } from "./steps/TabManager";

export class BulkProfile extends Component {
    state={
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        eventInfo: this.props.eventInfo,
        details: {
            "files": [],
            "email_format": "",
            "subject_line": "",
            "email_html_obj": [],
            "file_pond": []
        },
        steps: 1,
        isLoading: false,
    }

    handleDetails = (key, value) => {
        var copiedDetails = this.state.details
        copiedDetails[key] = value
        this.setState({ details : copiedDetails })
    };
 
    getPageComponent = (step) => {
        return TabManager(step, this.state.orgId, this.state.eventId,
             this.state.details, this.handleDetails, this.getNextStep);
    };

    getNextStep = (stepNum) => {
        return this.setState({ steps : stepNum });
    };

    render() {
        return (
            <div>
               {this.getPageComponent(this.state.steps)}
    
            </div>
        )
    }
}