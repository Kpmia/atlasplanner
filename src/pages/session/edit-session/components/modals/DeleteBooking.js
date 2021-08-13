import { locale } from 'moment';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'
import { BookingService } from '../../../../networking/bookings/BookingService'
import { EmailService } from '../../../../networking/emails/EmailService';

export const DeleteBooking = ({
    orgId, 
    eventId, 
    sessionId,
    bookingId, 
    bookingName,
    session,
    timestamp,
    booking,
    ...restProps}) => {
  const [open, setOpen] = React.useState(false)


  const deleteBooking = async() => {
    let emailBody = {
      "name":  bookingName,
      "session": {
        "name": session.name,
        "email": session.email
      },
      "timestamp": timestamp,
      "email": booking.email,
      "location": session.link
    }

    await BookingService.deleteBooking(orgId, eventId, sessionId, bookingId).then((event) => {
        if (event) {
            setOpen(false)
            EmailService.sendHostCancelEmail(emailBody).then(() => {
              toast.dark('Sent a confirmation email to participant!')
            })
            toast.dark('Successfully deleted the event!')
        }
    })
  }

  console.log(bookingName, orgId, sessionId, bookingId, session, timestamp, booking)

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<span><Icon name="trash" /> </span>}
          size='small'>
          <Header icon>
            <Icon name="delete" />
            Delete Booking
          </Header>
          <Modal.Content>
          <p style={{textAlign: 'center'}}>
            Looks like you're trying to delete this booking. This will send a cancellation email to the participant. Are you positive you want to delete this booking? 
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='white' inverted onClick={() => setOpen(false)}>
            <Icon name="cancel"  /> No
          </Button>
          <Button onClick={deleteBooking} inverted color='red'>
            <Icon name='trash' /> Yes
          </Button>
        </Modal.Actions>
    </Modal>
  )
}
