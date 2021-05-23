import React, { Component } from "react";
import { LiveSiteUtils } from "../utils/LiveSiteUtil";
import moment from "moment"
import { Col, Row } from "reactstrap";
import { DataGrid } from '@material-ui/data-grid';
import { db } from "../../firebase";


export class TodaySession extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        mentors: this.props.mentors,
    }

    currWeek = LiveSiteUtils.getCurrWeek()
    todayDate = new Date()

    componentDidUpdate() {
        if (this.props.mentors != this.state.mentors) {
            this.setState({ mentors : this.props.mentors })
        };
    };

    render() {
        if (this.state.mentors == "None") {
            return "no mentors yet"
        }

        const columns = [{field: "section", sorted: true, editable: true, headerName: "Section", width: 120}, {field: "name", editable: true, headerName: "Name", width: 120}, {field: "link", editable: true, headerName: "Link", width: 120}, {field: "descriptions", editable: true, headerName: "Other", width: 120},]
        const times = []

        Object.keys(this.state.mentors).map((mentor) => {
            this.state.mentors[mentor]["timeslots"].map(time => {
                if (time["day"] == this.todayDate.getDay()) {
                    if (!times.includes(time["start"] + "-" + time["end"])) {
                        times.push(time["start"] + "-" + time["end"])

                        columns.push({field: time["start"] + " - " + time["end"], editable: true, start: time["start"], end: time["end"], headerName: moment(time["start"], 'HH:mm'). format('h:mm A') + " - " + moment(time["end"], 'HH:mm'). format('h:mm A'), width: 190 })
                        columns.sort(function compare(a, b) {
                            return new Date('1970/01/01 ' + a["start"]) - new Date('1970/01/01 ' + b["start"]);
                          })
                    }
                }
            })
        })

        const rows = []

        Object.keys(this.state.mentors).map((mentor, idx) => {
            var mentorInfo = {
                "id": idx, 
                "section": this.state.mentors[mentor]["section"], 
                "name": this.state.mentors[mentor]["name"], 
                "descriptions": this.state.mentors[mentor]["descriptions"], 
                "link": this.state.mentors[mentor]["link"]
            }

            this.state.mentors[mentor]["timeslots"].map((time) => {
                if (time["day"] == this.todayDate.getDay()) {
                    var getMemberInfo = ""
                    Object.keys(time["filled"]).map((week) => {
                        if (week == this.currWeek) {
                            console.log(time["filled"])
                            Object.keys(time["filled"][week]).map((people) => {
                                getMemberInfo += time["filled"][week][people]["name"] + ", "
                            })
                        }

                    })
                    mentorInfo[time["start"] + " - " + time["end"]] = getMemberInfo
                }
            })
            rows.push(mentorInfo)
            rows.sort(function compare(a, b) {
                return a["section"] -  b["section"];
              })
        })

        console.log(rows)

        return (
            <div style={{ height: '500px', background: 'white', width: '120%', marginLeft: -60 }}>
                <DataGrid onCellClick={(cell) => console.log(cell)}  filterMode={false} sortModel={false}  rows={rows} columns={columns} />

             
            </div>
        )
    }
}