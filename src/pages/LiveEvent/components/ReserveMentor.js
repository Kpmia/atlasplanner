import React, { useEffect } from "react"
import { Card, TextField } from '@material-ui/core';
import { useState } from 'react';
import { Accordion, Form, Icon, Input, TextArea } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu, Table } from 'reactstrap';
import { db } from "../../firebase";
import { Slide, toast } from "react-toastify";
import { SessionService } from "../../networking/sessions/SessionService";
import uuid from 'react-uuid'
import DeletePersonModal from "./DeleteMentorModal";

export const ReserveMentor = (props) => {
    const {
      orgId,
      eventId,
      currWeek,
      timeslot,
      mentor,
      updateMentor,
      updateCurrMentor,
      children,
    } = props;
  
    const [modal, setModal] = useState(false);
    const [timeslott, setSlot] = useState(timeslot);
    const [projectName, setName] = useState("");
    const [idx, setIdx] = useState(0);
    const [description, setDesc] = useState("");
  
    const toggle = () => setModal(!modal);

    useEffect(() => {

            setSlot(timeslot)

    }, [timeslot])

    const handleClick = (i) => {
      console.log(idx)  
      setIdx(i)
    }

    const reserveMentor = async(name) => {

        if (projectName == "") {
            return toast.dark('Please enter a name', {transition: Slide})
        }

        if (!mentor["data"]["timeslots"][timeslot["id"]]["filled"][currWeek]) {
          mentor["data"]["timeslots"][timeslot["id"]]["filled"][currWeek] = {}
        }

        const id = uuid();

        mentor["data"]["timeslots"][timeslot["id"]]["filled"][currWeek][id] = {"name": projectName, "description": description}

        const body = { "session" : mentor["data"]}

        SessionService.updateSession(orgId, eventId, mentor["data"]["_id"], body).then((sessions) => {
          console.log(sessions)
            if (sessions) {
                toast.dark('Successfully added to session', {transition: Slide})

                updateMentor()
                updateCurrMentor(mentor["id"])
                toggle()
            }
        })
    }
    return (
      <div onClick={toggle}>
          {children}
        <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} >
          <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}> Reserve Session </span></ModalHeader>
          <ModalBody>
          <Label style={{marginBottom: 9}} className="createProjectLabel"> Your Name </Label>
          <br></br>
          <Input style={{width: '100%'}} onChange={(text) => setName(text.target.value)} placeholder="Enter name" />
          <br></br>
          <br></br>
          <Label style={{marginBottom: 9}} className="createProjectLabel"> Extra Info </Label>
          <br></br>
          <Form>
          <TextArea style={{width: '100%'}} onChange={(text) => setDesc(text.target.value)} placeholder="What are we talking about? (optional)" />
          </Form>
          <br></br>
          <br></br>
          <p> Participants </p>
          <Accordion styled>
           
          {
              Object.keys(timeslot["filled"]).map((time, i) => {
                  if (time == currWeek) {
                    return Object.keys(timeslot["filled"][time]).map((person, j) => {
                        return <span>
                        <Accordion.Title
                            active={j === idx}
                            index={j}
                            onClick={() => handleClick(j)}
                          >
                          
                                <Icon name="user" style={{marginRight: 15}} />
                                {timeslot["filled"][time][person]["name"]}
                               <DeletePersonModal orgId={orgId} /> 
                          </Accordion.Title>
                          <Accordion.Content active={j === idx}>
                            <p>
                            {timeslot["filled"][time][person]["description"]}
                            </p>
                          </Accordion.Content>
                      </span>
                           
                    })
                  }
              })
          }

          </Accordion>
           
          </ModalBody>
          <ModalFooter style={{borderTop: 'none'}}>
            <Button className="createEventBtn" onClick={() => reserveMentor(projectName)} color="primary"> Submit </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  