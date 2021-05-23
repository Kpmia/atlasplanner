import React, { useEffect } from "react"
import { Card } from '@material-ui/core';
import { useState } from 'react';
import { Icon, Input } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import { db } from "../../firebase";
import { Slide, toast } from "react-toastify";

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
  
    const toggle = () => setModal(!modal);

    useEffect(() => {

            setSlot(timeslot)

    }, [timeslot])

    const reserveMentor = async(name) => {

        if (projectName == "") {
            return toast.dark('Please enter a name', {transition: Slide})
        }

        const uid = await new Promise((resolve, reject) => {
            db.auth().onAuthStateChanged((user) => {
                resolve(user.uid)
            }, reject)
        });

        db.database('https://atlasplanner-e530e-default-rtdb.firebaseio.com/').ref('/organizations/' + orgId + '/events/' + eventId + '/mentors/' + mentor["id"] + '/timeslots/' + timeslot["id"] + '/filled/' + currWeek).push({
            "name": projectName,
            "desc": "12345"
        })

        db.database('https://atlasplanner-e530e-default-rtdb.firebaseio.com/').ref('/' + uid + '/' + orgId + '/events/' + eventId + '/mentors/' + mentor["id"] + '/timeslots/' + timeslot["id"] + '/filled/' + currWeek).push({
            "name": projectName,
            "desc": "12345"
        })

        toast.dark('Successfully added to session', {transition: Slide})

        updateMentor()
        updateCurrMentor(mentor["id"])
        toggle()
    }

  
    return (
      <div onClick={toggle}>
          {children}
        <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} >
          <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}> reserve session </span></ModalHeader>
          <ModalBody>
          <Label style={{marginBottom: 9}} className="createProjectLabel"> Your Name </Label>
          <br></br>
          <Input style={{width: '100%'}} onChange={(text) => setName(text.target.value)} placeholder="Enter name" />
          <br></br>
          <br></br>
          <table class="ui celled striped table">
            <thead>
                <tr><th colspan="3">
                all people
                </th>
            </tr></thead>
            <tbody>
         
          {
              Object.keys(timeslot["filled"]).map((time) => {
                  if (time == currWeek) {
                    return Object.keys(timeslot["filled"][time]).map((person) => {
                        return <tr>
                            <td class="collapsing">
                                <Icon name="user"/> {timeslot["filled"][time][person]["name"]} 
                            </td>
                            </tr>
                    })
                  }
              })
          }
                </tbody>
            </table>
          </ModalBody>
          <ModalFooter style={{borderTop: 'none'}}>
            <Button className="createEventBtn" onClick={() => reserveMentor(projectName)} color="primary"> Submit </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  