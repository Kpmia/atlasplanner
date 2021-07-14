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

    console.log(originalMentors)
  
    const [modal, setModal] = useState(false);
    const [timeslott, setSlot] = useState(timeslot);
    const [projectName, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const toggle = () => setModal(!modal);

    useEffect(() => {

            setSlot(timeslot)

    }, [timeslot])

    const reserveMentor = async(name) => {

        if (projectName == "") {
            return toast.dark('Please enter a name', {transition: Slide})
        }
        
        const id = uuid();

        mentor["data"]["timeslots"][timeslot["id"]]["filled"][id] = {"name": projectName, "email": email }

        var saveMentor = {}
        originalMentors.map((orgMentor, idx) => {
          if (mentor["data"]["_id"] == orgMentor["_id"]) {
            originalMentors[idx]["timeslots"][currWeek] = mentor["data"]["timeslots"]
            saveMentor['session'] = orgMentor
          }
        })       
    }

    return (
      <div onClick={toggle}>
          {children}
        <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} >
          <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '15px', fontFamily: 'Helvetica', textAlign: 'center'}}> Reserve Session </span></ModalHeader>
          <p style={{fontWeight: 'bold', textAlign: 'center', marginBottom: 3, fontFamily: 'Helvetica', fontSize: 14}}> {currWeek} </p>
          <p style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: 14}}> {moment(timeslot['start'], 'HH:mm').format('h:mm a')} - {moment(timeslot['end'], 'H:mm').format('hh:mm a')} </p>
          <ModalBody>
          <Label style={{marginBottom: 9}} className="createProjectLabel"> Your Name </Label>
          <br></br>
          <Input style={{width: '100%'}} onChange={(text) => setName(text.target.value)} placeholder="Enter name" />
          <br></br>
          <br></br>
          <br></br>
          <Form>
          <TextArea style={{width: '100%'}} onChange={(text) => setEmail(text.target.value)} placeholder="Please add your email" />
          </Form>
          <br></br>
          <br></br>
           
          </ModalBody>
          <ModalFooter style={{borderTop: 'none'}}>
            <Button className="createEventBtn" onClick={() => reserveMentor(projectName)} color="primary"> Submit </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  