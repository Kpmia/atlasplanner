import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css'
import "react-color-palette/lib/css/styles.css"
import { Icon, Popup } from 'semantic-ui-react';
import copy from 'copy-to-clipboard';

export const ShareLinkModal = (props) => {
  const {
    orgId,
    userId,
    eventName,
    className,
    children,
  } = props;
  const [modal, setOpen] = useState(false)
  const [copied, isCopy] = useState(false)

  const toggle = () => { setOpen(!modal) }

  const copyAgain = () => {
      isCopy(true)
      var URLLink = window.location.origin + "/create-session/" + orgId + "/" + eventName
      copy(URLLink)
  };

  return (
    <span onClick={toggle}>
       <Popup
            content="Let others create sessions in your event by sending them a tiny URL to access."
            trigger={         <Button className="overrideShareBtn" style={{marginRight: 10}}>  Invite Members </Button> 
          }
            on='hover'
            
            />
      <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: 0, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center', fontFamily: "Helvetica"}}> Share Link </span></ModalHeader>
        <ModalBody>
            <p> Send a tiny URL to members to allow them to create & edit their sessions in your event. </p>

            <p style={{marginRight: 10}} className={copied? "linkCopiedText" : "linkCopyText"}> {window.location.origin}/create-session/{orgId}/{eventName} 
            <Popup
            content="Copied!"
            trigger={ <Icon onClick={copyAgain} style={{cursor: 'pointer'}} name="clipboard" /> }
            on='click'
            
            />
           </p>
     
        </ModalBody>
        <Button style={{width: '100px'}} onClick={() => window.open(`${window.location.origin}/create-session/${orgId}/${eventName}`)} className="float-right create-session-next-btn"> Preview  </Button>
        <ModalFooter style={{borderTop: 'none'}}>
        </ModalFooter>
      </Modal>
    </span>
  );
}

