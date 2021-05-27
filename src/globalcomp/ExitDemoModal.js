import { locale } from 'moment';
import React, { useEffect } from 'react'
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'

const ExitDemoModal = ({opened, ...restProps}) => {
  const [open, setOpen] = React.useState(opened)

  useEffect(() => {

    if (open != opened) {
        setOpen(opened)
    }

  }, [opened])

  const exitTutorial = () => {
      localStorage.setItem('new_user', false)
  };

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='small'>
          <Header icon>
            <Icon name="delete" />
            End tutorial
          </Header>
          <Modal.Content>
          <p style={{textAlign: 'center'}}>
            Looks like you're trying to exit this tutorial. If you make this action, you cannot undo it. 
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='white' inverted onClick={() => setOpen(false)}>
            <Icon name="cancel"  /> No
          </Button>
          <Button onClick={exitTutorial} inverted color='red'>
            <Icon name='trash' /> Yes
          </Button>
        </Modal.Actions>
    </Modal>
  )
}

export default ExitDemoModal
