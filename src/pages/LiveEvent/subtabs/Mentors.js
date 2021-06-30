import React, { Component } from "react"
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import FadeIn from "react-fade-in";
import { Dropdown, Icon } from "semantic-ui-react";
import { Input } from "@material-ui/core";
import { Slide, toast } from "react-toastify";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export class Mentors extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        mentors: this.props.mentors,
        originalMentors: this.props.originalMentors,
        category: 'All Categories',
        view: 'grid',
        search: '',
        currentMentor: []
    }

    updateMentor = this.props.updateMentor

    selectMentor = (id, session, switched) => {
        if (switched) {
            toast.dark(`Switched to `+  session['name'] + `'s availability`, {position: 'top-center', transition: Slide})
            document.getElementById("eventBodyContainer").scrollIntoView({behavior: 'smooth' });
        }
        this.setState({ currentMentor : {"id": id, "data": session }})
    };

    chooseCategory = (name) => {
        this.setState({ category : name })
    }

    componentDidUpdate() {
        if (this.state.currWeek != this.props.currWeek) {
            this.setState({ currWeek : this.props.currWeek })
        }

        if (this.props.originalMentors != this.state.originalMentors) {
            this.setState({ originalMentors : this.props.originalMentors })
        }

        if (this.props.mentors != this.state.mentors) {
            this.setState({ mentors : this.props.mentors })
            var saveData = ""
            this.props.mentors.map((mentor) => {
                if (mentor['_id'] == this.state.currentMentor["id"]) {
                    saveData = mentor
                    this.setState({ currentMentor : {"id": this.state.currentMentor["id"], "data": saveData }})
                }
            })
        }
    }

    render() {

        const tags = {}

        const tagOptions = [{key: 'All Categories', value: 'All Categories', text: 'All Categories'}]

        var colors = ['pink', 'purple', 'blue', 'green', 'teal', 'orange', 'gray']

        var i = 0
        
        this.state.mentors.map((mentor, idx) => {
            var grad = i % colors.length 
            i++;

            if (mentor["category"] != "") {
                if (!Object.keys(tags).includes(mentor["category"])) {
                    tags[mentor["category"]] = colors[grad]

                    tagOptions.push({
                        'key': mentor["category"],
                        "text":  mentor["category"],
                        'value':  mentor["category"],
                        label: { color: colors[grad], empty: true, circular: true },
                    })
                }
            }

        })

        var events = [];

        console.log(this.state.currentMentor)

        if (this.state.currentMentor["data"]) {
            if (this.state.currentMentor["data"]["timeslots"]) {
                Object.keys(this.state.currentMentor["data"]["timeslots"]).map((session, id) => {
                    this.state.currentMentor["data"]["timeslots"][session].map((slot) => {
                        var bgColor = "black"
                        if (Object.keys(slot["filled"]).length != 0) {
                            bgColor = "red"
                        }
                        console.log(slot)
                            events.push({
                            title: this.state.currentMentor["data"]["name"],
                            background: bgColor,
                            extraInfo: this.state.currentMentor["id"],
                            extendedProps: { filled : slot["filled"] },
                            start: slot["actual_start"],
                            end: slot["actual_end"]
                        })
                    })
                })
            }
        }

        return (
            <div style={{marginTop: 20}}>
       

            {
                this.state.currentMentor.length != 0 ?
                    <div id="calendar_body">
                        <Card className="calendarMentorCard">
                            <CardBody>
                                <Row>
                                    <Col>
                                        <p className="mentorLiveEventName"> {this.state.currentMentor["data"]["name"] + `'s Schedule`} </p> 
                                        <p style={{textDecoration: 'underline', textAlign: 'center'}}> {this.state.currentMentor["data"]["link"]} </p> 
                                    </Col>
                                    <Col>
                                    <FullCalendar
                                        height={500}
                                            defaultAllDay={false}
                                            allDaySlot={false}
                                            eventClick={(event) => console.log(event)}
                                            contentHeight={700}
                                            buttonText={{
                                                    today: 'Today',
                                                    month: 'Month',
                                                    week: 'Week',
                                                    day: 'Day',
                                                    list: 'List',
                                                    daygrid: 'Grid',
                                                }}
                                                expandRows
                                            plugins={ [ dayGridPlugin, timeGridPlugin, listPlugin ]}
                                            initialView={ 'timeGridWeek' }
                                            events={events}
                                            headerToolbar={{
                                                left: 'prev,next',
                                                center: 'title',
                                                right: 'timeGridWeek'
                                            }}
                                            eventDidMount={ function (info) {
                                                    if (info.event.extendedProps.background) {
                                                        info.el.style.backgroundColor = 'black'
                                                        info.el.style.background = info.event.extendedProps.background;
                                                        info.el.style.backgroundSize = '500%';
                                                    }
                                                }}
                                        /> 
                        
                                    </Col>
                                </Row>
                        </CardBody>
                    </Card>
                    <br></br>
                </div>
                :
                null
            }

            <Icon name="search" /><Input disableUnderline placeholder="Search name" style={{width : '260px', marginLeft: '10px', borderBottom: 'none'}} icon="search" iconPosition="left" onChange={(text) => this.setState({ search : text.target.value })} />
            <Dropdown className="float-right" style={{marginTop: 7}} text={this.state.category} icon="caret down">
              <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Header icon='tags' content='Tag Label' />
                    <Dropdown.Menu scrolling>
                        {tagOptions.map((option) => (
                        <Dropdown.Item onClick={() => this.chooseCategory(option['key'])} key={option.value} {...option} />
                        ))}
                    </Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>
            <p className="float-right" style={{marginTop: 5, marginRight: 10}}> View as <Icon color={this.state.view == 'list'? "pink": null} onClick={() => this.setState({ view : 'list' })} style={{cursor: 'pointer'}} name="list" /> <Icon color={this.state.view == 'grid'? "pink": null} onClick={() => this.setState({ view : 'grid' })} style={{cursor: 'pointer'}} name="grid layout" /> </p>

            <br></br>            
            <br></br>
            <br></br>           


            {
                this.state.view == "grid"?

            <Row id="sessions_body">
                    {
                        this.state.mentors.filter((item) => {
                                if (item['category'] == this.state.category || this.state.category == 'All Categories') {
                                    if (item['name'].toLowerCase().lastIndexOf(this.state.search.toLowerCase()) >= 0) {
                                        return item 
                                    }
                                }
                            }).map((session) => {
                                    return (
                                        <Col style={{marginBottom: 30}} sm={4}>
                                            
                                            <FadeIn delay="300">
                                                <Card  onClick={() => this.selectMentor(session['_id'], session, true)} style={{cursor: 'pointer'}}  className="eventProjectCard">
                                                <div style={{marginTop: 0}}  className="eventProjectGradCard"></div>
                                                    <CardBody>
                                                    <p style={{marginBottom: 0}} className="eventProjectTitle"> {session["name"]} </p>
                                                    <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {session["link"]} </p>
                                                    <a class={"ui " + tags[session['category']] + " image label"}>
                                                    {session['category']}
                                                        <div class="detail">{session['timeslots'].length} Total Slots</div>
                                                        </a>
                                                    <p style={{fontWeight: 'bold', marginTop: 5}}> {session["section"]} </p>
                                                    <p> {session["descriptions"]} </p>
                                                    </CardBody>
                                                </Card>
                                            </FadeIn>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                : 

                <Table hover className="tableProjectBg">
                <div style={{padding: 10, paddingLeft: 15}}>
                <p className="tableTitle" style={{marginBottom: 0}}> </p>
                {/* <Button className="float-right"> Sort By </Button> */}
                </div>
                    <tr>
                        <td className="cellTitle"> NAME </td>

                        <td className="cellTitle"> LOCATION </td>
                        <td className="cellTitle"> CATEGORY </td>
                        <td className="cellTitle"> SECTION </td>
                        <td className="cellTitle"> DESCRIPTION </td>

                    </tr>
                <tbody>
                {
                        this.state.mentors.filter((item) => {
                            if (item['category'] == this.state.category || this.state.category == 'All Categories') {
                                if (item['name'].toLowerCase().lastIndexOf(this.state.search.toLowerCase()) >= 0) {
                                    return item 
                                }
                            }
                            }).map((session) => {
                                    return (
                                        <tr style={{'cursor': 'pointer'}} onClick={() => this.selectMentor(session['_id'], session, true)}>
                                            <th className="cellText"> {session["name"]} </th>
                                            <th className="cellText"> {session["link"]} </th>
                                            <th className="cellText">{session['category']} </th>
                                            <th className="cellText"> {session["section"]} </th>
                                            <th className="cellText"> {session["descriptions"]} </th>
                                        </tr>
                                    )
                                })
                            }
                </tbody>

                <div>
                    <br></br>
                    <br></br>

                </div>
            </Table>
            } 
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            </div>
        )
    }
}
