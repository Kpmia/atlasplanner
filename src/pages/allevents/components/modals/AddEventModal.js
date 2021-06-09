import { Card } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import { db } from '../../../firebase';
import { updateLocale } from 'moment';
import 'semantic-ui-css/semantic.min.css'
import { EventService } from '../../../networking/events/EventService';
import { toast } from 'react-toastify';
import { LiveSiteUtils } from '../../../LiveEvent/utils/LiveSiteUtil';
import { KeyService } from '../../../networking/keys/KeyService';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css"
import FadeIn from 'react-fade-in';

export const AddEventModal = (props) => {
  const {
    orgId,
    className,
    updateEvents,
    children,
  } = props;

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [key, setKey] = useState("");
  const [colorGrad, setColor] = useColor("");
  const [instruction, setInstruct] = useState("");

  const toggle = () => setModal(!modal);

  const createEvent = async(name) => {
    if (name == "") {
      return toast.dark('Please enter a name')
    }
    if (colorGrad == "") {
      return toast.dark('Please choose an event color')
    }

    var name = name
    name = LiveSiteUtils.splitSpacesToDashes(name)

    const eventBody = {
      'name': name,
      'description': description,
      'instruction': instruction,
      'color': colorGrad,
    }

    const keyBody = {
      "key": key
    }

    EventService.createEvent(orgId, eventBody).then((resp) => {
        if (resp) {
          KeyService.createKey(orgId, name, keyBody).then((key) => {
              if (key) {
                toggle()
                updateEvents(orgId)
              } 
            })
          } else {
            toast.dark('Event name is taken.');
        }
      })
  }

  const colors = [
    "#EA60DC",
    "linear-gradient(0deg, #4A41F6, #4A41F6), #4A41F6",
    "linear-gradient(0deg, #8EEAC9, #8EEAC9), #4A41F6",
    "linear-gradient(140.3deg, #EA9A60 0%, #D0499A 111.18%)",
    "linear-gradient(138.99deg, #EF93FE -1.37%, #4A41F6 96.83%)",
    "linear-gradient(140.3deg, #8E2BFF 0%, #E73C7E 52.8%, #4742C0 111.18%)",
    "linear-gradient(135deg, #DCF98B 7.95%, #60EA97 101.14%), linear-gradient(0deg, #8EEAC9, #8EEAC9), #4A41F6",
  ]

  return (
    <div onClick={toggle}>
        {children}
      <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}> Create an Event </span></ModalHeader>
        <ModalBody>
        <Label style={{marginBottom: 9}} className="createProjectLabel">  Name </Label>
        <br></br>
        <Input style={{width: '100%',  borderRadius: '5px'}} onChange={(text) => setName(text.target.value)} placeholder="Enter name" />
        <br></br>
        <br></br>
        <Label style={{marginBottom: 9}} className="createProjectLabel">  Color <span> <FadeIn>  </FadeIn></span> </Label>
        <br></br>
        <Row style={{justifyContent: 'space-around'}}>
        {
          colors.map((color) => {
            if (colorGrad == color) {
              return (
                <div onClick={() => setColor(color)} style={{background: color, border: '2px solid blue', cursor: 'pointer', height: 30, width: 30, borderRadius: 100 }}></div>
              )
            }
            return (
              <div onClick={() => setColor(color)} style={{background: color, cursor: 'pointer', height: 30, width: 30, borderRadius: 100 }}></div>
            )
          })
        }
        </Row>
        <br></br>
        <br></br>
        <Label style={{marginBottom: 9}} className="createProjectLabel">  Description (optional) </Label>
        <br></br>
        <Form>
          <TextArea style={{width: '100%',  borderRadius: '5px'}} onChange={(text) => setDesc(text.target.value)} placeholder="Enter description" />
        </Form>
        <br></br>
        <hr />
        <p style={{fontWeight: 'bold'}}> Session Options</p>
        <hr />
        <Label style={{marginBottom: 9}} className="createProjectLabel">  Instructions (optional) </Label>
        <br></br>
        <Form>
          <TextArea style={{width: '100%',  borderRadius: '5px'}} onChange={(text) => setInstruct(text.target.value)} placeholder="Set instructions for people or you creating sessions" />
        </Form>
        <br></br>
        </ModalBody>
        <ModalFooter style={{borderTop: 'none'}}>
          <Button style={{border: 'none', boxShadow: '0px 4px 14px rgba(58, 116, 148, 0.23)'}} className="createEventBtn" onClick={() => createEvent(name)} color="primary"> + Create </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}



