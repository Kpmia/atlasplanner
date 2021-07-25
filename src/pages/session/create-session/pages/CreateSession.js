import React from "react";
import { LoadingPage } from "../../../LoadingPage";
import { EventService } from "../../../networking/events/EventService";
import { PageNotFound } from "../../../PageNotFound";
import { Onboarding } from "../components/onboarding/Onboarding";


class CreateSession extends React.Component {
    constructor() {
        super()
        this.orgId = ""
        this.eventId = ""
        this.state={
            eventExists: false,
            pageNotFound: false,
            isLoading: true
        }
    }

    checkEvent = async(orgId, eventId) => {
        await EventService.eventExists(orgId, eventId).then((event) => {
            if (!event) {
                this.setState({ pageNotFound : true });
            }
        });
    };

    componentDidMount() {
        this.orgId = this.props.match.params.orgId
        this.eventId = this.props.match.params.eventId
        this.checkEvent(this.orgId, this.eventId).then((event) => {
            this.setState({ isLoading : false });
        });
    };

    render() {
        if (this.state.isLoading) {
            return <LoadingPage />
        }
        if (this.state.pageNotFound) {
            return <PageNotFound />
        }

        return (
            <div style={{background: 'white', height: '100vh'}}>
                <div style={{paddingTop: '100px'}}>
                    <Onboarding orgId={this.orgId} eventId={this.eventId} />
                </div>
            </div>
        )
    }
}

export default CreateSession