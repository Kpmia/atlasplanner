import { Card, Switch, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, Icon, Input, TextArea } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css'
import "react-color-palette/lib/css/styles.css"
import FadeIn from 'react-fade-in';
import { KeyService } from '../../../networking/keys/KeyService';
import uuid from 'react-uuid';

export const ShareSessionModal = (props) => {
  const {
    className,
    orgId, 
    eventId,
    children,
  } = props;

  const [modal, setModal] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [key, setKey] = useState("");

  const toggle = () => setModal(!modal);

  const createKey = async(type) => {
     var generatedKey = uuid().toString()
      if (type == "public") {
        generatedKey = ""
        await KeyService.updateKey(orgId, eventId, { key : generatedKey }).then((key) => {
            if (key) {
                setKey("")
                setPrivacy(false)
            }
        })
      } else {
        await KeyService.updateKey(orgId, eventId, { key : generatedKey }).then((key) => {
            if (key) {
                setKey(generatedKey)
                setPrivacy(true)
            }
        })
      }
  }

  const getKey = async() => {
      await KeyService.getKey(orgId, eventId).then((key) => {
          if (key) {
              console.log(key)
              if (key['key'] == "") {
                  return setPrivacy(false)
              }
              setPrivacy(true)
              return setKey(key['key'])
          }
      })
  }

  return (
    <div onClick={() => { toggle(); getKey()}}>
        {children}
      <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}>   Editing Sessions </span></ModalHeader>
        <ModalBody>
        <Label style={{marginBottom: 9}} className="createProjectLabel">  <Icon name="attach"   /> Get link </Label>
        <div className="getLinkShare" style={{padding: 8, borderRadius: 7}}> 
            <p  style={{fontSize: '.875rem', wordBreak: 'break-word'}}> {window.location.origin + '/editsession/' + orgId + '/' + eventId }
            <Tooltip title="Copy link" placement="top"><Icon style={{color: 'gray', marginLeft: 6, cursor: 'pointer'}} name="clipboard" onClick={() => {navigator.clipboard.writeText(window.location.origin + '/editsession/' + orgId + '/' + eventId)}} /></Tooltip></p>
        </div>
        <br></br>
        {
            !privacy ? 
            <div>
        <Label style={{marginBottom: 9}} className="createProjectLabel">
             <Icon name="world" /> Anyone with the link </Label>
                    <Switch onClick={() => createKey("private")} color="secondary" checked={privacy}  />
                <p> Anyone on the internet with this link can edit your sessions </p> 
                <div> 
                </div>
            </div>
            :
            <div>
                  <Label style={{marginBottom: 9}} className="createProjectLabel">
                    <Icon name="lock" /> Private link </Label>
                        <Switch onClick={() => createKey("public")} color="secondary" checked={privacy}  />
                <p> Anyone with the password can edit sessions  </p>
                <p style={{fontFamily: 'monospace', fontSize: '0.875rem', borderRadius: '7px', padding: 8, background: '#00000014', wordBreak: 'break-word'}}> {key} </p> 
            </div>
        }
         <br></br>
         <Form>
         </Form>
         <br></br>
        </ModalBody>
        <ModalFooter style={{borderTop: 'none'}}>
        </ModalFooter>
      </Modal>
    </div>
  );
}



