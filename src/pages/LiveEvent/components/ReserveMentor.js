import React, { useEffect } from "react"
import { Card, TextField } from '@material-ui/core';
import { useState } from 'react';
import { Accordion, Form, Icon, Input, TextArea } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu, Table } from 'reactstrap';
import { db } from "../../firebase";
import { Slide, toast } from "react-toastify";
import { SessionService } from "../../networking/sessions/SessionService";
import uuid from 'react-uuid'
import moment from 'moment'

export const ReserveMentor = (props) => {
    const {
      orgId,
      eventId,
      currWeek,
      timeslot,
      mentor,
      updateMentor,
      originalMentors,
      updateCurrMentor,
      children,
    } = props;
  
    const [modal, setModal] = useState(false);
    const [timeslott, setSlot] = useState(timeslot);
    const [projectName, setName] = useState("");
    const [idx, setIdx] = useState(0);
    const [description, setDesc] = useState("");

    console.log(currWeek)
  
    const toggle = () => setModal(!modal);

    useEffect(() => {

            setSlot(timeslot)

    }, [timeslot])

    const handleClick = (i) => {
      setIdx(i)
    }

    const reserveMentor = async(name) => {

        console.log(mentor)
        console.log(originalMentors)

        if (projectName == "") {
            return toast.dark('Please enter a name', {transition: Slide})
        }
        
        const id = uuid();

        console.log(mentor["data"])

        mentor["data"]["timeslots"][timeslot["id"]]["filled"][id] = {"name": projectName, "description": description}

        console.log(mentor["data"])

        var saveMentor = {}
        originalMentors.map((orgMentor, idx) => {
          if (mentor["data"]["_id"] == orgMentor["_id"]) {
            originalMentors[idx]["timeslots"][currWeek] = mentor["data"]["timeslots"]
            saveMentor['session'] = originalMentors[idx]
          }
        })

        SessionService.updateSession(orgId, eventId, mentor["data"]["_id"], saveMentor).then((sessions) => {
            if (sessions) {
                toast.dark('Successfully added to session', {transition: Slide, position: "top-center"})

                updateMentor()
                updateCurrMentor(mentor["id"], mentor['data'], false)
                toggle()
            }
        })
    }

    return (
      <div onClick={toggle}>
          {children}
        <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} >
          <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}> Reserve Session </span></ModalHeader>
          <p style={{fontWeight: 'bold', textAlign: 'center'}}> {currWeek} </p>
          <p style={{fontWeight: 'bold', textAlign: 'center'}}> {moment(timeslot['start'], 'HH:mm').format('h:mm a')} - {moment(timeslot['end'], 'H:mm').format('hh:mm a')} </p>
          <ModalBody>
          <Label style={{marginBottom: 9}} className="createProjectLabel"> Your Name </Label>
          <br></br>
          <Input style={{width: '100%'}} onChange={(text) => setName(text.target.value)} placeholder="Enter name" />
          <br></br>
          <br></br>
          {/* <br></br>
          <Form>
          <TextArea style={{width: '100%'}} onChange={(text) => setDesc(text.target.value)} placeholder="What are we talking about? (optional)" />
          </Form> */}
          <br></br>
          <br></br>
          {/* <p> Participants </p>
          <Accordion styled>
           
          {
              Object.keys(timeslot["filled"]).map((time, i) => {
                console.log(time)
                  return <span>
                  <Accordion.Title
                      active={i === idx}
                      index={i}
                      onClick={() => handleClick(i)}>
                          <Icon name="user" style={{marginRight: 15}} />
                          {timeslot["filled"][time]["name"]}
                    </Accordion.Title>
                    <Accordion.Content active={i === idx}>
                      <p>
                      {timeslot["filled"][time]["description"]}
                      </p>
                    </Accordion.Content>
                </span>
              })
          }

          </Accordion> */}
           
          </ModalBody>
          <ModalFooter style={{borderTop: 'none'}}>
            <Button className="createEventBtn" onClick={() => reserveMentor(projectName)} color="primary"> Submit </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  