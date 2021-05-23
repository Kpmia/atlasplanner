import React from 'react';
import { Card, CardBody } from 'reactstrap'
import TextField from '@material-ui/core/TextField';
import FadeIn from 'react-fade-in';
import { InputAdornment, OutlinedInput } from '@material-ui/core';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import { db } from './firebase';

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

    signUp = async(email, password, teamName, name) => {
        db.auth().createUserWithEmailAndPassword(
           this.state.email, this.state.password).then((user) => {
               user.user.updateProfile({
                   displayName: this.state.email
               })
               db.database('https://atlasplanner-e530e-default-rtdb.firebaseio.com/').ref('/organizations/' + this.state.orgName).set({"name": name})
               db.database('https://atlasplanner-e530e-default-rtdb.firebaseio.com/').ref('/organizations/' + this.state.orgName + '/events').set("None").then(() => {

                db.database('https://atlasplanner-e530e-default-rtdb.firebaseio.com/').ref('/' + user.user.uid + '/' + this.state.orgName + '/events').set("None").then(() => {
                    return window.location.href = '/events/' + this.state.orgName + '/all'
                })
           }) 

        })
    }

    login = async(email, password) => {
        db.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            db.database('https://atlasplanner-e530e-default-rtdb.firebaseio.com/').ref('/' + user.user.uid).get().then(() => {
                // return window.location.href = '/events/' + this.state.orgName + '/all'
            })
        })
    }

    render() {

        return (
            <div className="signInBg">

               {
                   this.state.hasAccount ? 

                <div>
                    <Card id="card-demo" className="signInCard">
                        <CardBody style={{padding: 37 }}>
                        <FadeIn delay="300">
                            {/* <img style={{marginBottom: 13}} src={require('../assets/stackstrLogoRocket.svg')} /> */}

                            <p className="signInVoyagerTitle" style={{marginBottom: 10}}> Atlas planner </p>
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

                            <button onClick={() => this.login(this.state.email, this.state.password)} id="card__image" className="signInBtn" style={{marginBottom: 11}}> Continue </button> 

                            <p onClick={() => this.setState({ hasAccount : false })} className="forgotAccountLink"> Don’t have an account? <span style={{color: '#45484F'}}> Sign up </span> </p>
                            </FadeIn>

                        </CardBody>

                    </Card>
                </div>
                :  

                <div>
                    <Card id="card-demo" className="signInCard">
                        <CardBody style={{padding: 37 }}>
                        <FadeIn delay="300">
                            {/* <img style={{marginBottom: 13}} src={require('../assets/stackstrLogoRocket.svg')} /> */}

                            <p className="signInVoyagerTitle" style={{marginBottom: 10, width: 140}}> New user sign up. </p>
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

                            <button onClick={() => this.signUp(this.state.email, this.state.password, this.state.orgName, this.state.name)} id="card__image" className="signInBtn" style={{marginBottom: 11}}> Continue </button> 

                            <p onClick={() => this.setState({ hasAccount : true })} className="forgotAccountLink"> Have an account? <span style={{color: '#45484F'}}> Sign in </span> </p>
                            </FadeIn>

                        </CardBody>

                    </Card>
                </div>

               }


                      

            </div>
        )
    }
}

export default LoginPage;