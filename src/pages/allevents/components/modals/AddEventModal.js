import React, { useState } from 'react';
import { Form, Icon, Input, Popup, TextArea } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,  CardBody, Row, Col, DropdownMenu } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css'
import { EventService } from '../../../networking/events/EventService';
import { toast } from 'react-toastify';
import { LiveSiteUtils } from '../../../LiveEvent/utils/LiveSiteUtil';
import { KeyService } from '../../../networking/keys/KeyService';
import "react-color-palette/lib/css/styles.css"
import FadeIn from 'react-fade-in';
import { DisplayService } from '../../../networking/display/DisplayService';
import { CircularProgress, Tooltip } from '@material-ui/core';


export const AddEventModal = (props) => {
  const {
    orgId,
    className,
    updateEvents,
    children,
  } = props;

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [companyLogo, setLogo] = useState("");
  const [key, setKey] = useState("");
  const [loading, isLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [themeColor, setTheme] = useState("linear-gradient(128.97deg, #EA60DC -2.41%, #6720FF 36.65%, #EABB60 104.09%)");
  const [bannerColor, setBanner] = useState("#000000");
  const [instruction, setInstruct] = useState("");

  const toggle = () => setModal(!modal);

  const createEvent = async(name) => {
    if (name == "") {
      return toast.dark('Please enter a name')
    }

    isLoading(true)

    var name = name
    name = LiveSiteUtils.splitSpacesToDashes(name)

    const eventBody = {
      'name': name,
      'company_logo': companyLogo,
      'description': description,
      'instruction': instruction,
      'theme_color': themeColor,
      'banner_color': bannerColor
    };

    const keyBody = {
      "key": key
    };

    const displayBody = {
      "theme_color": themeColor,
      "banner_color": bannerColor,
      "logo": companyLogo
    };

    EventService.createEvent(orgId, eventBody).then((resp) => {
        if (resp) {
          DisplayService.createEventDisplay(orgId, name, displayBody).then(() => {
              KeyService.createKey(orgId, name, keyBody).then((key) => {
                  if (key) {
                    setStatus("success")
                    updateEvents(orgId)
                    isLoading(false)
                  } else {
                    setStatus("error")
                    isLoading(false)
                  }
              })
            })
          } else {
            setStatus("error")
            isLoading(false)
        }
      }).then(() => {
      })
  }

  const goToEvent = () => {
    window.location.href = `/welcome/${orgId}/${name}`
  };

  const setEventName = (name) => {
    var edited_name = LiveSiteUtils.splitSpacesToDashes(name)
    setName(edited_name)
  };

  const resetFields = () => {
    setName("");
    setDesc("");
    setStatus("")
    setTheme("linear-gradient(128.97deg, #EA60DC -2.41%, #6720FF 36.65%, #EABB60 104.09%)");
    setBanner("#000000");
    setInstruct("");
  };


  const theme_colors = [
    "#B3A369",
    "linear-gradient(128.97deg, #EA60DC -2.41%, #6720FF 36.65%, #EABB60 104.09%)",
    "linear-gradient(109.09deg, #FF9F9F 1.31%, #D59466 46.23%, #E66FFA 98.38%)",
    "linear-gradient(109.09deg, #FFD39F 1.31%, #FDC583 46.23%, #FF5E5E 98.38%)",
    "linear-gradient(109.09deg, #E6FF9F 1.31%, #83FDB4 46.23%, #5EF5FF 98.38%)",
    "linear-gradient(109.09deg, #9FF4FF 1.31%, #83CAFD 46.23%, #615EFF 98.38%)",
    "linear-gradient(109.09deg, #9FB4FF 1.31%, #8C83FD 46.23%, #CB5EFF 98.38%)",
    "linear-gradient(109.09deg, #C99FFF 1.31%, #EC83FD 46.23%, #FF5E84 98.38%)",
    "linear-gradient(109.09deg, #9FC0FF 1.31%, #6671D5 46.23%, #E66FFA 98.38%)",
    "linear-gradient(136.13deg, #60A0EA 2.92%, #816CFF 33.1%, #FFD98F 97.51%)",
    "#EA60DC",
    "linear-gradient(0deg, #4A41F6, #4A41F6), #4A41F6",
    "linear-gradient(0deg, #8EEAC9, #8EEAC9), #4A41F6",
    "linear-gradient(140.3deg, #EA9A60 0%, #D0499A 111.18%)",
    "linear-gradient(138.99deg, #EF93FE -1.37%, #4A41F6 96.83%)",
    "linear-gradient(140.3deg, #8E2BFF 0%, #E73C7E 52.8%, #4742C0 111.18%)",
    "linear-gradient(135deg, #DCF98B 7.95%, #60EA97 101.14%), linear-gradient(0deg, #8EEAC9, #8EEAC9), #4A41F6",
  ]

  const banner_colors = [
    "#003057",
    "#54585A",
    "#000000",
  ]

  return (
    <div onClick={toggle}>
        {children}
      <Modal  style={{padding: 20}} overlay={false} isOpen={modal} toggle={toggle} className={className}>
      {

          status.length != 0?
            status == "success"?
            <div>
                <ModalBody>
                  <Row style={{justifyContent: 'center'}}>
                      <Icon style={{fontSize: '25px', marginBottom: '20px', color: 'green'}} name="checkmark" />
                  </Row>
                <p style={{textAlign: 'center', marginBottom: '4px'}}> Your event is now ready to be seen </p>
                <p className="access-share-link " style={{textAlign: 'center'}}> <Icon name="share" /> Access and share this live link for others to view: 
                <p style={{marginTop: '4px'}} className="atlasplanner-event-URL"> {window.location.origin}/welcome/{orgId}/{LiveSiteUtils.splitSpacesToDashes(name)} </p> </p>
                    <Button onClick={() => goToEvent()} className="go-to-event-btn float-right block"> Go to Event </Button>
              </ModalBody>
            </div>
            :
            <div>
              <ModalBody>
                  <Row style={{justifyContent: 'center'}}>
                        <Icon style={{fontSize: '25px', marginBottom: '20px', color: 'red'}} name="cancel" />
                    </Row>
                  <p className="access-share-link" style={{textAlign: 'center', background: '#FFD9E2', color: '#E04C4C'}}>  Event name is either used or please try again. </p>
                  <Button onClick={resetFields} className="go-to-event-btn float-right block"> Reset Form </Button>
                </ModalBody>
          </div>

          :
          loading? 
          <div>
                <Row style={{justifyContent: 'center'}}>
                      <CircularProgress color="primary" />
                </Row>
                  <Row style={{justifyContent: "center"}}>
                    <Label style={{marginBottom: 9, marginTop: '16px'}} className="createProjectLabel">  <span> <FadeIn>  Creating Event </FadeIn></span> </Label>
                  </Row>
                </div>
                :
                <div>
              <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} style={{borderBottom: 'none', paddingBottom: '0px', padding: 10, fontWeight: 600, fontSize: '17px', textAlign: 'center'}} className="createProjectTitle" toggle={toggle}> <span style={{borderBottom: 'none', paddingBottom: '0px', fontWeight: 600, fontSize: '17px', textAlign: 'center'}}> Create an Event </span></ModalHeader>
                <ModalBody>
                      <Label style={{marginBottom: 9}} className="createProjectLabel">  Name </Label>
                      <br></br>
                      <Input value={name} style={{width: '100%',  borderRadius: '5px'}} onChange={(text) => setEventName(text.target.value)} placeholder="Enter name" />
                      {
                        name.includes("-") ?
                          <p style={{marginTop: '5px', marginBottom: '5px', fontSize: '12px'}}> <span style={{color: 'red'}}>*</span> Spaces are replaced by dashes </p>
                          : null
                      }
                      <Label style={{marginBottom: 9}} className="createProjectLabel">  Header color 
                      
                      <Popup
                          inverted
                          content={<p> This color will be shown in headers of pages or strips. </p>}
                          trigger={<Icon style={{cursor: 'pointer', marginLeft: '3px'}} name="info circle" />} 
                        />  
                        <span> <FadeIn>  </FadeIn></span> </Label>
                      <br></br>
                      <Row style={{justifyContent: '', margin: '0 auto'}}>
                      {
                        banner_colors.map((color) => {
                          if (bannerColor == color) {
                            return (
                              <div onClick={() => setBanner(color)} style={{background: color, border: '4px solid rgb(78, 73, 117)', cursor: 'pointer', marginRight: 6, marginBottom: 6, height: 30, width: 30, borderRadius: 100 }}></div>
                            )
                          }
                          return (
                              <Popup
                              inverted
                              content={<div style={{background: color, cursor: 'pointer', height: 80, width: 80, borderRadius: 3 }}></div>}
                              trigger={ <div onClick={() => setBanner(color)} style={{background: color, cursor: 'pointer', height: 30, width: 30, marginRight: 6, marginBottom: 6, borderRadius: 100 }}></div>} 
                            />  
                          )
                        })
                      }
                      </Row>
                      <br></br>
                      <Label style={{marginBottom: 9}} className="createProjectLabel">  Theme color 
                      
                      <Popup
                          inverted
                          content={<p> This color will be shown in the page's background and card's banners. </p>}
                          trigger={<Icon style={{cursor: 'pointer', marginLeft: '3px'}} name="info circle" />} 
                        />  
                        <span> <FadeIn>  </FadeIn></span> </Label>
                      <br></br>
                      <Row style={{justifyContent: '', margin: '0 auto'}}>
                      {
                        theme_colors.map((color) => {
                          if (themeColor == color) {
                            return (
                              <div onClick={() => setTheme(color)} style={{background: color, border: '4px solid rgb(78, 73, 117)', cursor: 'pointer', marginRight: 6, marginBottom: 6, height: 30, width: 30, borderRadius: 100 }}></div>
                            )
                          }
                          return (
                              <Popup
                              inverted
                              content={<div style={{background: color, cursor: 'pointer', height: 80, width: 80, borderRadius: 3 }}></div>}
                              trigger={ <div onClick={() => setTheme(color)} style={{background: color, cursor: 'pointer', height: 30, width: 30, marginRight: 6, marginBottom: 6, borderRadius: 100 }}></div>} 
                            />  
                          
                          )
                        })
                      }
                      </Row>
                      <br></br>
                      <Label style={{marginBottom: 9}} className="createProjectLabel">  Your Color Scheme  </Label>

                      <Row style={{justifyContent: 'center'}}>
                        <div className="banner_color_box" style={{background: bannerColor}}> Header </div>
                      </Row>
                      <Row style={{justifyContent: 'center'}}>
                        <div className="theme_color_box gradientBackground" style={{background: themeColor}}> Card Banners + Background</div>
                      </Row>
                      <br></br>

                      <Label style={{marginBottom: 9}} className="createProjectLabel">  Message for attendees  
                        <Popup
                          inverted
                          content={<div> <p> Your attendees will see this message at the top of the page under the title "Message set by host" when they view the main interface for all schedules. You can add information about the event's description, instructions, or schedule.   </p>
                            <img style={{width: '200px', borderRadius: '2px', height: '140px'}} src={require('../../../../assets/host-message.png')} /> </div>}
                          trigger={<span><span style={{textDecoration: 'underline', cursor: 'pointer', fontSize: '11px', marginLeft: '6px'}}>What is this</span> <Icon style={{cursor: 'pointer', fontSize: '11px', marginLeft: '-3px'}} name="info circle" /> </span>} />  </Label>
                      <br></br>
                      <Form>
                        <TextArea style={{width: '100%',  borderRadius: '5px'}} onChange={(text) => setDesc(text.target.value)} placeholder="Enter your message for attendees" />
                      </Form>
                      <br></br>
                        <Button style={{border: 'none', boxShadow: '0px 4px 14px rgba(58, 116, 148, 0.23)'}} className="createEventBtn float-right" onClick={() => createEvent(name)} color="primary"> + Create </Button>{' '}
                </ModalBody>
            </div>
              }
      </Modal>
    </div>
  );
}



