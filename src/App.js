import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './styles/main.scss';
import './styles/homepage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import AllEventsPage from './pages/allevents/AllEventsPage';
import LiveEventPage from './pages/LiveEvent/LiveEventPage';
import MentorForm from './pages/mentors/MentorForm';
import EventPage from './pages/Event/EventPage';
import { OrgService } from './pages/networking/organizations/OrgService';
import { db } from './pages/firebase';
import { EventService } from './pages/networking/events/EventService';
import { LoadingPage } from './pages/LoadingPage';
import { PageNotFound } from './pages/PageNotFound';
import history from './pages/history'

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const checkOrgId = async(userToken) => {
  var orgId = localStorage.getItem('org_id')
  if (orgId == undefined) {
      return await OrgService.getAllOrganizations(userToken).then((org) => {
        if (org) {
          orgId = org[0]["_id"]
          localStorage.setItem('org_id', orgId)
          return orgId;
        }
      })
  }
  return orgId;
}


class App extends React.Component {
  constructor() {
    super()
    this.state={
      orgId: '',
      user: false,
      isLoading: true,
    }
  }

  getOrgId = async() => {
    db.auth().onAuthStateChanged(async(user) => {
      if (user) {
        this.setState({ user : true })
        checkOrgId(await EventService.getUserToken()).then((orgId) => {
          this.setState({ orgId : orgId })
        })
      }
      this.setState({ isLoading : false })
    });
  };

  async componentDidMount() {
    this.getOrgId()
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingPage />
    }

    return (
      <BrowserRouter history={history} basename={getBasename()}>
            <Switch>


        <Route
          exact
          path='/'
          component={ this.state.user ? (props) => { return  <AllEventsPage {...props} orgId={this.state.orgId}  /> } : (props) => { return  <LoginPage /> }} 
          />

        <Route
          exact
          path='/login'
          component={LoginPage}
          />

        <Route
          exact
          path='/events/all/:orgId'
          component={ this.state.user ? (props) => { return  <AllEventsPage {...props}  /> } : (props) => { return  <LoginPage /> }}
          />

      <Route
        exact
        path='/event/:orgId/:eventId'
        component={ this.state.user ? (props) => { return  <EventPage {...props}  /> } : (props) => { return  <LoginPage /> }}
        />

      <Route
          exact
          path='/c/:orgId/:eventId'
          component={LiveEventPage}
        />

      <Route
          exact
          path='/editsession/:orgId/:eventId'
          component={MentorForm}
        />

          </Switch>
        </BrowserRouter>

    )
  }
}

export default App;
