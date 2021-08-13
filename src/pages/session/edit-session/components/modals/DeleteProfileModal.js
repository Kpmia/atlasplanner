import { Card } from '@material-ui/core';
import { locale } from 'moment';
import React, { useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { toast } from 'react-toastify';
import { CardBody, Col, Row } from 'reactstrap';
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'
import { SessionService } from '../../../../networking/sessions/SessionService';


export const DeleteProfileModal = ({
    sessionInfo,
    ...restProps}) => {
  const [open, setOpen] = React.useState(false)

  const deleteSession = async() => {
    await SessionService.deleteSession(sessionInfo._orgId, sessionInfo._eventId, sessionInfo._id, "").then((session) => {
        if (session) {
            setOpen(false)
            toast.dark('Successfully deleted your profile')
            toast.dark('Page will soon refresh. Because the profile no longer exists, you will be redirected to page not found.')
            setTimeout(() => {
              window.location.reload()
            }, 7000)
            
        } else {
            toast.dark('Something went wrong. Please check your key.')
        }
    })
};

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button style={{fontFamily: 'Helvetica', paddingLeft: '0px', fontWeight: 500}} className="float-right delete-session-btn"> <Icon name="trash"/> Delete </Button>}
          size='small'>
          <Header icon>
            <Icon name="delete" />
              Delete Profile
          </Header>
          <Modal.Content>
            <p style={{textAlign: 'center'}}> Looks like you're trying to delete your profile. You cannot undo this action once it's done. </p>
          </Modal.Content>
        <Modal.Actions>
        <Button basic color='white' inverted onClick={() => setOpen(false)}> <Icon name="cancel"  /> No </Button>
          <Button onClick={deleteSession}  inverted color='red'> <Icon name='trash' /> Delete </Button>
        </Modal.Actions>
    </Modal>
  )
}
