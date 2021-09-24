import { CircularProgress } from '@material-ui/core';
import { locale } from 'moment';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap';
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react'
import { SessionService } from '../../../../networking/sessions/SessionService';


export const AreYouSureModal = ({
    orgId, 
    eventId,
    getNextStep,
    details,
    ...restProps
  }) => {
  const [open, setOpen] = React.useState(false)
  const [loading, isLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const uploadBulkProfiles = async() => {
      isLoading(true)
        
      var myFormData = {
        files: details.files,
        email: details.email_format.replace(/<br>/g,''),
        subject: details.subject_line
    };
    
    var fd = new FormData();
    for (var key in myFormData) {
        fd.append(key, myFormData[key]);
    }

    await SessionService.createBulkSessions(orgId, eventId, details.subject_line, details.email_format, fd).then((resp) => {
      if (resp != null && resp) {
          setOpen(false)
          toast.dark('Profiles have been uploaded & emails were sent')
          isLoading(false)
          getNextStep(4)
        } else {
          setError(true)
          isLoading(false)
        }
      });
  };

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button disabled={details.subject_line.length && details.email_format.length != 0 ? false : true}  style={{background: 'black', color: 'white'}} className="email-preview-btn"> Next </Button>}
          size='small'>

          {
            loading? 
                <Row style={{justifyContent: 'center'}}>
                  <CircularProgress color="secondary" />
                </Row>
                :
            error? 
              <span>
                <Header style={{padding: 0, marginBottom: '20px'}} icon>
                      <Icon style={{color: 'white'}} name="delete" />
                    <p style={{color: 'white'}}> Something went wrong. Please try again </p>
                </Header>

                <Row style={{justifyContent: 'center'}}>
                    <Button style={{marginRight: '30px'}} onClick={() => setOpen(false)} inverted color="red">
                        <Icon name="delete" /> Cancel
                    </Button>
                    <Button onClick={uploadBulkProfiles} inverted color="black">
                      <Icon name="checkmark" /> Try Again
                  </Button>
                </Row>
              </span>

            :
            <div>
              <Header style={{padding: 0, marginBottom: '20px'}} icon>
                  <Icon style={{color: 'white'}} name="mail" />
                  <p style={{color: 'white'}}> Are you sure? </p>
              </Header>
              <Modal.Content style={{padding: 0}}>
                  <p style={{textAlign: 'center'}}> Are you sure you want to upload these profiles and send emails? </p>
                  </Modal.Content>
                  <br></br>
                  <Modal.Actions>
                    <Row style={{justifyContent: 'center'}}>
                        <Button style={{marginRight: '30px'}} onClick={() => setOpen(false)} inverted color="red">
                            <Icon name="delete" /> Cancel
                        </Button>
                        <Button onClick={uploadBulkProfiles} inverted color="green">
                          <Icon name="checkmark" /> Send
                      </Button>
                    </Row>
              </Modal.Actions>
              </div>
            }
    </Modal>
  )
}
