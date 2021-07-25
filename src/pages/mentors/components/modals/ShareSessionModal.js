import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css'
import "react-color-palette/lib/css/styles.css"
import { Icon, Popup } from 'semantic-ui-react';
import copy from 'copy-to-clipboard';

export const ShareSessionModal = (props) => {
  const {
    orgId,
    eventId,
    userId,
    className,
    children,
  } = props;
  const [modal, setOpen] = useState(false)
  const [copied, isCopy] = useState(false)

  const toggle = () => { setOpen(!modal) }

  const copyAgain = () => {
      isCopy(true)
      var URLLink = window.location.origin + "/all-sessions/" + orgId + "/" + eventId + "?tab-name=edit-session&user=" + userId
      copy(URLLink)
  };

  return (
    <div onClick={toggle}>
    <Icon className="shareLinkIcon" name="share square" />
      <Modal style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: 0, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}> Share Session Link</span></ModalHeader>
        <ModalBody>
            <p> Share this link, and allow others to edit this session. </p>

            <p style={{marginRight: 10}} className={copied? "linkCopiedText" : "linkCopyText"}> {window.location.origin}/all-sessions/{orgId}/{eventId}?tab-name=edit-session&user={userId}
            <Popup
            content="Copied!"
            trigger={ <Icon onClick={copyAgain} style={{cursor: 'pointer'}} name="clipboard" /> }
            on='click'
            
            />
           </p>
     
        </ModalBody>
        <ModalFooter style={{borderTop: 'none'}}>
        </ModalFooter>
      </Modal>
    </div>
  );
}





