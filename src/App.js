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

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <BrowserRouter basename='/'>

        <Route
          exact
          path='/login'
          component={LoginPage}
          />

        <Route
          exact
          path='/events/:orgId/all'
          component={AllEventsPage}
          />

      <Route
          exact
          path='/c/:orgId/:eventId'
          component={LiveEventPage}
        />

      <Route
          exact
          path='/createsession/:orgId/:eventId'
          component={MentorForm}
        />

      <Route
          exact
          path='/events/info/:orgId/:eventId/'
          component={EventPage}
        />
          
        </BrowserRouter>

    )
  }
}

export default App;
