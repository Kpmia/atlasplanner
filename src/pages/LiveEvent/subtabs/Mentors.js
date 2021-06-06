import React, { Component } from "react"
import { LiveSiteUtils } from "../utils/LiveSiteUtil"
import { Card, CardBody, Col, Row } from "reactstrap";
import FadeIn from "react-fade-in";
import { ReserveMentor } from "../components/ReserveMentor";
import moment from "moment"
import { Dropdown, Icon } from "semantic-ui-react";
import { Input } from "@material-ui/core";
import { Slide, toast } from "react-toastify";


export class Mentors extends Component {
    state = {
        orgId: this.props.orgId,
        eventId: this.props.eventId,
        mentors: this.props.mentors,
        originalMentors: this.props.originalMentors,
        category: 'All Categories',
        currWeek: this.props.currWeek,
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
        var weekDayData = {
            'Sunday': [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], 'Saturday': [], 
        }

        console.log(this.state.currWeek)

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

        return (
            <div>
       

            {
    this.state.currentMentor.length != 0 ?
    <div id="calendar_body">
    <Card >
        <CardBody>
        <strong> {this.state.currentMentor["data"]["name"] + `'s Schedule`} </strong> 

        <p style={{textDecoration: 'underline'}}> {this.state.currentMentor["data"]["link"]} </p> 
        {
            this.state.currentMentor["data"]['timeslots'].length == 0 ?

            <p className="text-center"> No times available this week. </p>
        :
        <Row>
            {
            Object.keys(weekDayData).map((day, idx) => {
               const times = []
                
               this.state.currentMentor["data"]["timeslots"].map((time, id) => { 
                   time = {"id": id, ...time}
                   if (time["day"] == idx) { 
                       return times.push(time) 
                    }
                })

                return (
                    <Col style={{marginTop: 10}} sm={3}>
                         
                    <Card className="eventProjectCard">
                        <CardBody>
                   
                        <p className="dayOfWeek"> {day} </p>
                    
                            <p> {
                                times.sort(function compare(a, b) {
                                    return new Date('1970/01/01 ' + a["start"]) - new Date('1970/01/01 ' + b["start"]);
                                  }).map((time) => {
                                    if (time) {
                                        console.log(time)
                                        if (Object.keys(time["filled"]) != 0) {
                                            return (
                                                <div className="unavailableTime" style={{background: '#3430F6', boxShadow: '0px 20px 5px 0px rgb(30, 58, 76, .17)', textAlign: 'center', marginBottom: 5}}>
                                                    <ReserveMentor originalMentors={this.state.originalMentors} updateCurrMentor={this.selectMentor} updateMentor={this.props.updateMentor} timeslot={time} currWeek={this.state.currWeek} mentor={this.state.currentMentor} orgId={this.state.orgId} eventId={this.state.eventId}> <span> {moment(time["start"], 'HH:mm'). format('h:mm A')} - {moment(time["end"], 'HH:mm'). format('h:mm A')}</span> </ReserveMentor>
                                                </div>
                                            )
                                        }
                                        return (
                                            <div className="availableTime"   style={{background: 'none',boxShadow: '0px 20px 5px 0px rgb(30, 58, 76, .17)', marginBottom: 5, textAlign: 'center', border: '1px solid black'}}>
                                               <ReserveMentor originalMentors={this.state.originalMentors} updateCurrMentor={this.selectMentor} updateMentor={this.props.updateMentor} timeslot={time} currWeek={this.state.currWeek} mentor={this.state.currentMentor} orgId={this.state.orgId} eventId={this.state.eventId}> <span style={{color: 'black'}}> {moment(time["start"], 'HH:mm'). format('h:mm A')} - {moment(time["end"], 'HH:mm'). format('h:mm A')}</span> </ReserveMentor>
                                            </div>
                                        )
                                    }
                                })
                            } </p>
                        <br></br>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })

        }
                </Row>
            }
                    </CardBody>
                    </Card>
                    <br></br>
                </div>
                :
                null
            }

            <Icon name="search" /><Input disableUnderline placeholder="Search name, description, or section" style={{width : '260px', marginLeft: '10px', borderBottom: 'none'}} icon="search" iconPosition="left" onChange={(text) => this.setState({ search : text.target.value })} />
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
            <br></br>            
            <br></br>
            <br></br>            

            <Row id="sessions_body">
            {
            this.state.mentors.filter((item) => {
                    if (item['category'] == this.state.category || this.state.category == 'All Categories') {
                        if (item['name'].toLowerCase().lastIndexOf(this.state.search.toLowerCase()) >= 0 || item['descriptions'].toLowerCase().lastIndexOf(this.state.search.toLowerCase()) >= 0 || item['section'].toLowerCase().lastIndexOf(this.state.search.toLowerCase()) >= 0 || this.state.search.length == 0) {
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
            </div>
        )
    }
}
