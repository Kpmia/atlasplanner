import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css'
import "react-color-palette/lib/css/styles.css"
import { SessionService } from '../../../networking/sessions/SessionService';
import { Slide, toast } from 'react-toastify';
import { Icon } from 'semantic-ui-react';

export const DeleteSessionModal = (props) => {
  const {
    chooseSession,
    session,
    eventName,
    className,
    children,
  } = props;
  const [modal, setOpen] = useState(false)

  const deleteSession = async() => {
    await SessionService.deleteSession(session["_orgId"], session["_eventId"], session["_id"], "").then((session) => {
        if (session) {
            chooseSession([])
            toast.dark('Successfully deleted session.',  { transition : Slide  })
            toggle()
        } else {
            toast.dark('Something went wrong. Please check your key.',  { transition : Slide  })
        }
    })
};

  const toggle = () => { setOpen(!modal) }

  return (
    <span onClick={toggle}>
        {children}
      <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: 0, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 500, fontFamily: 'Helvetica', fontSize: '17px', textAlign: 'center'}}> Delete Session </span></ModalHeader>
        <ModalBody>
            <p style={{textAlign: 'center', marginBottom: '28px'}}> Are you sure you want to delete this session? </p>     
            <Button onClick={deleteSession} style={{width: '100px'}} className="float-right delete-session-btn"> <Icon name="trash"/> Delete </Button>
            <Button style={{marginRight: '10px', marginTop: '5px', background: 'none', color: 'black', border: 'none'}} onClick={toggle} className="float-right"> Cancel </Button>
        </ModalBody>
        <ModalFooter style={{borderTop: 'none'}}>
        </ModalFooter>
      </Modal>
    </span>
  );
}