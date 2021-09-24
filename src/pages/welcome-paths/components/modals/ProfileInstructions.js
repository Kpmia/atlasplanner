import { Card } from '@material-ui/core';
import { locale } from 'moment';
import React, { useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { toast } from 'react-toastify';
import { CardBody, Col, Row } from 'reactstrap';
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'

export const ProfileInstructions  = ({
    sessionInfo,
    ...restProps}) => {
  const [open, setOpen] = React.useState(false)


  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Card style={{marginBottom: '13px'}} className="who-are-you-card ">
          <CardBody style={{padding: '1.95rem'}}>
              <p className="who-are-you-h2" style={{marginBottom: '4px'}}> <Icon name="checked calendar" style={{fontSize: '14px'}} /> Edit or view my profile </p>
              <p className="who-are-you-p2"> Need to edit and go back? Click here for quick instructions. </p>
          </CardBody>
      </Card>
}
          size='small'>
              <Header icon>
                  <Icon name="user circle outline" />
              </Header>
          <Modal.Content>
            <p style={{textAlign: 'center'}}> The link to your user profile should have been sent via email to you after you created a profile. </p>
            <img src={require('../../../../assets/user-profile-img.svg')} />
            <p style={{marginTop: '10px', textAlign: 'center'}}> Check your inbox or spam to find an email from Atlasplanner. You can then view bookings or make changes to your profile. </p>
          </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}  inverted color="green"> <Icon name="check" /> Got it! </Button>
        </Modal.Actions>
    </Modal>
  )
}
