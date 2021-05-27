import React from 'react'
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'

const DeletePersonModal = ({orgId, sessionId,...restProps}) => {
  const [open, setOpen] = React.useState(false)

  const deleteProject = () => {

  };

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='small'
          trigger={<Icon className="float-right" name="delete" />}>
          <Header icon>
            <Icon name="user delete" />
            Delete a person
          </Header>
          <Modal.Content>
          <p style={{textAlign: 'center'}}>
            Looks like you're trying to remove this person. If you make this action, you cannot undo it. 
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='white' inverted onClick={() => setOpen(false)}>
            <Icon name="cancel"  /> No
          </Button>
          <Button onClick={deleteProject} inverted color='red'>
            <Icon name='trash' /> Yes
          </Button>
        </Modal.Actions>
    </Modal>
  )
}

export default DeletePersonModal
