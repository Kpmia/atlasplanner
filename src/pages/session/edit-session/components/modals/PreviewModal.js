import { Card } from '@material-ui/core';
import { locale } from 'moment';
import React, { useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { CardBody, Col, Row } from 'reactstrap';
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'


export const PreviewModal = ({
    sessionInfo,
    ...restProps}) => {
  const [open, setOpen] = React.useState(false)

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<a className="float-right "> <Icon name="photo" /><Button style={{marginRight: '20px', marginLeft: '5px'}}  className="preview-btn"> Preview </Button></a>}
          size='small'>
          <Header icon>
        
          </Header>
          <Modal.Content>
          <Row style={{justifyContent: 'center'}}>
            <Col style={{marginBottom: 30}} sm={7}>                  
                <FadeIn delay="300">
                    <Card style={{cursor: 'pointer'}}  className="eventProjectCard">
                    <div style={{marginTop: 0}}  className="eventProjectGradCard"></div>
                        <CardBody>
                            <p style={{marginBottom: 0}} className="eventProjectTitle"> {sessionInfo.name} </p>
                            <p style={{marginBottom: 0}}> {sessionInfo.email} </p>
                            <p style={{textDecoration: 'underline', opacity: 0.4, fontSize: '13px'}}> {sessionInfo.link} </p>
                            <a class={"ui image label"}> {sessionInfo.category}
                                </a>
                            <p style={{fontWeight: 'bold', marginTop: 5}}> {sessionInfo.section} </p>
                            <p> {sessionInfo.descriptions} </p>
                            <hr />
                                <p> {sessionInfo.box_a} </p>
                                <p> {sessionInfo.box_b} </p>
                                <p> {sessionInfo.box_c} </p>
                        </CardBody>
                    </Card>
                </FadeIn>
            </Col>
            </Row>
          <p style={{textAlign: 'center'}}>
           This is how your profile appears in the <span onClick={() => window.open(`/c/${sessionInfo._orgId}/${sessionInfo._eventId}`)} style={{textDecoration: 'underline', cursor: 'pointer'}}>organizer's event</span>.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} inverted color="pink">
            <Icon name="checkmark" /> Got it!
          </Button>
        </Modal.Actions>
    </Modal>
  )
}
