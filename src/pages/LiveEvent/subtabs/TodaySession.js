import React, { Component } from "react";
import moment from "moment"
import { DataGrid } from '@material-ui/data-grid';

export class TodaySession extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        mentors: this.props.mentors,
        currWeek: this.props.currWeek
    }

    todayDate = new Date()

    componentDidUpdate() {
        if (this.state.currWeek != this.props.curWeek) {
            this.setState({ curWeek : this.props.currWeek })
        }
        if (this.props.mentors != this.state.mentors) {
            this.setState({ mentors : this.props.mentors })
        };
    };

    render() {
        if (this.state.mentors == "None") {
            return "no mentors yet"
        }

        console.log('Here')

        const columns = [{field: "section", sorted: true, resizable: true, editable: true, resizable: true, headerName: "Section", width: 120}, {field: "name",  resizable: true, editable: true, headerName: "Name", width: 120}, {field: "link", resizable: true,  editable: true, headerName: "Link", width: 120}, {field: "descriptions", editable: true, resizable: true, headerName: "Other", width: 120},]

        const times = []

        const availTodaySess = []

        Object.keys(this.state.mentors).map((mentor) => {
            var isAvailable = false
            
            this.state.mentors[mentor]["timeslots"].map((time) => {
                if (time["day"] == this.todayDate.getDay()) {
                    isAvailable = true
                }
            })
            if (isAvailable) {
                availTodaySess.push(this.state.mentors[mentor])
            }
        })

        Object.keys(availTodaySess).map((mentor) => {
            availTodaySess[mentor]["timeslots"].map(time => {
                if (time["day"] == this.todayDate.getDay()) {
                    if (!times.includes(time["start"] + "-" + time["end"])) {
                        times.push(time["start"] + "-" + time["end"])

                        columns.push({field: time["start"] + " - " + time["end"], editable: false, start: time["start"], end: time["end"], headerName: moment(time["start"], 'HH:mm'). format('h:mm A') + " - " + moment(time["end"], 'HH:mm'). format('h:mm A'), width: 190 })

                        columns.sort(function compare(a, b) {
                            return new Date('1970/01/01 ' + a["start"]) - new Date('1970/01/01 ' + b["start"]);
                          })
                    }
                }
            })
        })

        const rows = []

        Object.keys(availTodaySess).map((mentor, idx) => {
            var mentorInfo = {
                "id": idx, 
                "section": availTodaySess[mentor]["section"], 
                "name": availTodaySess[mentor]["name"], 
                "descriptions": availTodaySess[mentor]["descriptions"], 
                "link": availTodaySess[mentor]["link"]
            }

            availTodaySess[mentor]["timeslots"].map((time) => {
                if (time["day"]  == this.todayDate.getDay()) {
                    var getMemberInfo = ""
                    Object.keys(time["filled"]).map((week) => {
                        getMemberInfo += time["filled"][week]["name"] + ", "
                    })

                    mentorInfo[time["start"] + " - " + time["end"]] = getMemberInfo
                }
            })

            rows.push(mentorInfo)
            rows.sort(function compare(a, b) {
                return a["section"] -  b["section"];
              })
            
        })

        return (
            <div>

                <p className="dayOfWeek"> {`Today's Sessions`}</p>
                <br></br>
                <div id="today-session-body" style={{ height: '500px', background: 'white', width: '100%'}}>
                <DataGrid filterMode={false} sortModel={false}  rows={rows} columns={columns} />
                </div>
             
            </div>
        )
    }
}