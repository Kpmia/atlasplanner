import React, { Component } from "react";


export class LoadingPage extends Component {
    render() {
        return (
            <div style={{height: '100vh'}}>
                <div style={{height: '100%', background: 'black'}} class="ui inverted segment">
                <div class="ui active inverted text loader"> Loading page </div>
                </div>
            </div>
        )
    }
}