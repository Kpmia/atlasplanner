import React, { useState } from 'react';
import { Form, Icon, Input, TextArea } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import { db } from '../../../firebase';
import 'semantic-ui-css/semantic.min.css'
import { EventService } from '../../../networking/events/EventService';
import { toast } from 'react-toastify';
import { LiveSiteUtils } from '../../../LiveEvent/utils/LiveSiteUtil';
import "react-color-palette/lib/css/styles.css"
import FadeIn from 'react-fade-in';
import { KeyService } from '../../../networking/keys/KeyService';

export const UpdateEventModal = (props) => {
  const {
    orgId,
    eventId,
    className,
    updateEvents,
    eventData,
    children,
  } = props;

  const [modal, setModal] = useState(false);
  const [name, setName] = useState(eventData["name"]);
  const [description, setDesc] = useState(eventData["description"]);
  const [key, setKey] = useState("");
  const [colorGrad, setColor] = useState(eventData["color"]);
  const [instruction, setInstruct] = useState(eventData["instruction"]);

  const toggle = () => setModal(!modal);

  const checkEventName = async(name) => {
      if (name != eventData["name"]) {
          return EventService.getAllEvents(orgId).then((events) => {
              console.log(events)
              if (events) {
                  var checked = events.some((event) => {
                    if (event["name"] == name) {
                        return true
                    }
                  })
                  return checked;
              }
          })
      } else {
          return false;
      }
  };

  const updateEvent = async(name) => {
    if (name == "") {
      return toast.dark('Please enter a name')
    }
    if (colorGrad == "") {
      return toast.dark('Please choose an event color')
    }

    var name = name
    name = LiveSiteUtils.splitSpacesToDashes(name)

    const eventBody = {
        "event": {
            'name': name,
            '_orgId': orgId,
            'description': description,
            'instruction': instruction,
            'color': colorGrad,
        }
    }

    checkEventName(name).then((checked) => {
        if (!checked) {
            EventService.updateEvent(orgId, eventId, eventBody).then((resp) => {
                if (resp) {
                    toast.dark(`Successfully changed the event's information`);
                    if (name != eventData["name"]) {
                        toast.dark('Because you changed the event name, we will reload this page.')
                        KeyService.createKey(orgId, name, { key : "" }).then(() => {
                          setTimeout(() => {
                            return window.location.href = '/event/' + orgId + '/' + name
                          }, 4000)
                        })
                    }
                    updateEvents(orgId, name)
                    toggle()
                } else {
                    toast.dark('Event name is taken in your organization.');
                }
            })
        } else {
            toast.dark('Event name is already used in your organization.')
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
    <span onClick={toggle}>
        {children}
      <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}> Update Event </span></ModalHeader>
        <ModalBody>
        <Label style={{marginBottom: 9}} className="createProjectLabel">  Name </Label>
        <br></br>
        <Input value={name} style={{width: '100%',  borderRadius: '5px'}} onChange={(text) => setName(text.target.value)} placeholder="Enter name" />
        <br></br>
        <br></br>
        <Label style={{marginBottom: 9}} className="createProjectLabel">  Color <span> <FadeIn>  </FadeIn></span> </Label>
        <br></br>
        <Row style={{justifyContent: 'space-around'}}>
        {
          colors.map((color) => {
              console.log(colorGrad == color.toString())
            if (colorGrad == color.toString()) {
            
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
          <TextArea value={description} style={{width: '100%',  borderRadius: '5px'}} onChange={(text) => setDesc(text.target.value)} placeholder="Enter description" />
        </Form>
        <br></br>
        <hr />
        <br></br>
        </ModalBody>
        <ModalFooter style={{borderTop: 'none'}}>
          <Button style={{border: 'none', boxShadow: '0px 4px 14px rgba(58, 116, 148, 0.23)'}} className="createEventBtn" onClick={() => updateEvent(name)} color="primary"> <Icon name="save outline" /> Save </Button>{' '}
        </ModalFooter>
      </Modal>
    </span>
  );
}



