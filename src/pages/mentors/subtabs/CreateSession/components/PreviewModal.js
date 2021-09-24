import { Card } from '@material-ui/core';
import { locale } from 'moment';
import React, { useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { CardBody, Col, Input, Row } from 'reactstrap';
import { Button, Header, Icon, Modal, Dropdown, Popup } from 'semantic-ui-react'
import { HTMLEditor } from './HTMLEditor';


export const PreviewModal = ({
    details,
    subjectLine,
    emailFormat,
    ...restProps}) => {
  const [open, setOpen] = React.useState(false)

  return (
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button style={{color: 'black', background: 'none', marginRight: '10px', border: '1px solid black'}} className="email-preview-btn"> Preview </Button>}
          size='small'>
          <Header icon>
        
          </Header>
          <Modal.Content>
            <Col style={{marginBottom: 30}} sm={7}>                  
                <FadeIn delay="300">
                        <p style={{textAlign: 'left', marginBottom: '10px'}}>
                            This is how your email will appear when sent.
                        </p>
                    <Card style={{cursor: 'pointer'}}>
                    <div style={{marginTop: 0}}></div>
                        <CardBody>

                            <p> Subject Line: <span style={{color: '#a1a2a7'}}> {subjectLine.length == 0 ? "no subject line yet" : subjectLine} </span> </p>

                            <hr />

                            <div dangerouslySetInnerHTML={{ __html : emailFormat + "<p></br></p> <p> Click <span style='text-decoration: underline; color: blue'>here</span> to go to your profile. </p>" }}></div>
                        
                        </CardBody>
                    </Card>
                    <Popup
                        on="hover"
                        style={{textAlign: "left", cursor: 'pointer'}}
                        trigger={<p style={{textDecoration: "underline", cursor: 'pointer', marginTop: '15px', textAlign: "left"}}> What does the last line do? I didn't add that.</p>}
                        content="The last line has a 'here' hyperlink where it leads the recipient to their user profile."
                    />
            </FadeIn>
            </Col>      
          
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} inverted color="green">
            <Icon name="checkmark" /> Got it!
          </Button>
        </Modal.Actions>
    </Modal>
  )
}
