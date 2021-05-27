import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export class PageNotFound extends Component {
    render() {
        return (
            <div style={{height: '100vh'}}>
                <div class="ui grid middle aligned segment black inverted" style={{height: '100%', margin: '0 auto'}}>
                <div class="ui column center aligned">
                    <div class="ui inverted statistic">
                    <div class="value">404</div>
                    <div style={{marginTop: 10,}} class="label">Page not found</div>
                    <br></br>
                    <Button onClick={() => window.location.href = '/'}> Go back </Button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}