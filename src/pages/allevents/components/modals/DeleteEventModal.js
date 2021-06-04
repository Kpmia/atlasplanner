import { locale } from 'moment';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'
import { EventService } from '../../../networking/events/EventService';

export const DeleteEventModal = ({orgId, eventId, updateEvents, ...restProps}) => {
  const [open, setOpen] = React.useState(false)


  const deleteEvent = async() => {
      await EventService.deleteEvent(orgId, eventId).then((event) => {
          if (event) {
              setOpen(false)
              updateEvents(orgId)
              toast.dark('Successfully deleted the event!')
          }
      })
  }

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<span><Icon name="delete" /> <span> Delete Event </span></span>}
          size='small'>
          <Header icon>
            <Icon name="delete" />
            Delete event
          </Header>
          <Modal.Content>
          <p style={{textAlign: 'center'}}>
            Looks like you're trying to delete this event. If you make this action, you cannot undo it. 
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='white' inverted onClick={() => setOpen(false)}>
            <Icon name="cancel"  /> No
          </Button>
          <Button onClick={deleteEvent} inverted color='red'>
            <Icon name='trash' /> Yes
          </Button>
        </Modal.Actions>
    </Modal>
  )
}
