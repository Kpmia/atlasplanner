import React from 'react';
import { Card, CardBody, Button, ButtonGroup, Row } from 'reactstrap'
import FadeIn from 'react-fade-in';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import { toast, ToastContainer } from 'react-toastify';
import { Auth } from './networking/authentication/Auth';
import { Icon } from 'semantic-ui-react';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state={
            hasAccount: true,
            email: '',
            password: '',
            name: '',
            orgName: ''
        }
    }

    signUp = async(email, password, orgName, name) => {
        if (orgName == "") {
            return toast.dark('Please enter an organization name')
        }
        if (name == "") {
            return toast.dark('Please enter your name')
        }
        return await Auth.signUp(email, password, orgName, name)
    };

    login = async(email, password) => {
        return await Auth.login(email, password)
    };

    render() {

        return (
            <div className="signInBg">

        <Card id="card-demo" className="signInCard">
            <CardBody style={{padding: 37 }}>
                <Row style={{justifyContent: 'center'}}>
                    <Icon name="diamond" style={{color: 'black', fontSize: 18}} />
                </Row>

                <br></br>

                <Row style={{justifyContent: 'center'}}>
                    <ButtonGroup> 
                        <Button onClick={() => this.setState({ hasAccount : true })} className={this.state.hasAccount ? "clickedbackBtn" : "backBtn"}> Login </Button>
                        <Button  onClick={() => this.setState({ hasAccount : false })} className={!this.state.hasAccount ? "clickedbackBtn" : "backBtn"}> Sign Up </Button>
                    </ButtonGroup>
                </Row>
                <hr />
                <br></br>

               {
                   this.state.hasAccount ? 

                    <div>
                        <FadeIn delay="300">
                            <p className="signInTitle" style={{marginBottom: 10}}> Login </p>

                            <InputGroup style={{height: 41, color: 'black'}}>
                            <InputGroupAddon style={{background: 'none'}} addonType="prepend">
                            <InputGroupText style={{background: 'white', borderRight: 'none'}}><MailOutlineRoundedIcon style={{color: 'gray', width: '15px'}} /></InputGroupText>
                            </InputGroupAddon>
                            <Input onChange={(text) => this.setState({ email : text.target.value })} style={{height: 41, color: 'black'}} placeholder="Email address" />
                        </InputGroup>

                        <InputGroup style={{marginTop: 10, height: 41}}>
                            <InputGroupAddon style={{background: 'white', borderRight: 'none'}} addonType="prepend">
                            <InputGroupText style={{background: 'white', borderRight: 'none'}}><LockIcon style={{color: 'gray', width: '15px'}} /></InputGroupText>
                            </InputGroupAddon>
                            <Input onChange={(text) => this.setState({ password : text.target.value })} type="password" style={{height: 41, color: 'black'}} placeholder="Password" />
                        </InputGroup>
                            {/* <p className="forgotPassLink"> Forgot password? </p> */}
                            <br></br>
                            <br></br>

                            <button  onClick={() => this.login(this.state.email, this.state.password)} id="card__image" className="signInBtn" style={{marginBottom: 11}}> Continue </button> 

                            </FadeIn>

                </div>
                :  

                <div>
              
                        <FadeIn delay="300">

                            <p className="signInTitle" style={{marginBottom: 10, width: 140}}> New user sign up. </p>
                            <InputGroup style={{height: 41, color: 'black'}}>
                            <InputGroupAddon style={{background: 'none'}} addonType="prepend">
                            <InputGroupText style={{background: 'white', borderRight: 'none'}}><MailOutlineRoundedIcon style={{color: 'gray', width: '15px'}} /></InputGroupText>
                            </InputGroupAddon>
                            <Input onChange={(text) => this.setState({ email : text.target.value })} style={{height: 41, color: 'black'}} placeholder="Email address" />
                        </InputGroup>

                        <InputGroup style={{marginTop: 10, height: 41}}>
                            <InputGroupAddon style={{background: 'white', borderRight: 'none'}} addonType="prepend">
                            <InputGroupText style={{background: 'white', borderRight: 'none'}}><LockIcon style={{color: 'gray', width: '15px'}} /></InputGroupText>
                            </InputGroupAddon>
                            <Input onChange={(text) => this.setState({ password : text.target.value })} type="password" style={{height: 41, color: 'black'}} placeholder="Password" />
                        </InputGroup>
                            {/* <p className="forgotPassLink"> Forgot password? </p> */}
                            <InputGroup style={{marginTop: 10, height: 41}}>
                            <InputGroupAddon style={{background: 'white', borderRight: 'none'}} addonType="prepend">
                            <InputGroupText style={{background: 'white', borderRight: 'none'}}><PersonIcon style={{color: 'gray', width: '15px'}} /></InputGroupText>
                            </InputGroupAddon>
                            <Input onChange={(text) => this.setState({ name : text.target.value })} type="Full name" style={{height: 41, color: 'black'}} placeholder="Full name" />
                        </InputGroup>

                        <InputGroup style={{marginTop: 10, height: 41}}>
                            <InputGroupAddon style={{background: 'white', borderRight: 'none'}} addonType="prepend">
                            <InputGroupText style={{background: 'white', borderRight: 'none'}}><PersonIcon style={{color: 'gray', width: '15px'}} /></InputGroupText>
                            </InputGroupAddon>
                            <Input onChange={(text) => this.setState({ orgName : text.target.value })} type="Team name" style={{height: 41, color: 'black'}} placeholder="Organization name" />
                        </InputGroup>
                            <br></br>

                            <button  onClick={() => this.signUp(this.state.email, this.state.password, this.state.orgName, this.state.name)} id="card__image" className="signInBtn" style={{marginBottom: 11}}> Continue </button> 

                            </FadeIn>

                        </div>
                            }
                        </CardBody>
                    </Card>
               <ToastContainer />
            </div>
        )
    }
}

export default LoginPage;