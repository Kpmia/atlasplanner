import { CircularProgress } from '@material-ui/core';
import { locale } from 'moment';
import React, { useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Row } from 'reactstrap';
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'
import { EventService } from '../../../networking/events/EventService';
import { KeyService } from '../../../networking/keys/KeyService';

export const ViewKeyModal = ({orgId, eventId, updateEvents, ...restProps}) => {
  const [open, setOpen] = React.useState(false)
  const [key, setKey] = React.useState("")
  const [loading, isLoading] = React.useState(true)

  const getKey = async() => {
      await KeyService.getKey(orgId, eventId).then((key) => {
          if (key) {
              setKey(key["key"])
          } else {
              setKey("An error has occurred. Try again.")
          }
      }).finally(() => {
          setTimeout(() => {
            isLoading(false)
          }, 1000)
      })
  }

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<span onClick={() => getKey(orgId, eventId)}><Icon name="key" /> <span> View Key </span></span>}
          size='small'>
          <Header icon>
            <Icon name="key" />
            Private Key
          </Header>
          <Modal.Content>
              {
                  loading ?
                  <Row style={{justifyContent: 'center'}}>
                    <CircularProgress color="primary" />
                  </Row>
                  :
                  <FadeIn delay="400">
                  <p style={{textAlign: 'center', fontSize: 15, fontFamily: 'monospace'}}> {key}</p>
                  </FadeIn>

              }
           
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='white' inverted onClick={() => setOpen(false)}>
             Done
          </Button>
        </Modal.Actions>
    </Modal>
  )
}
