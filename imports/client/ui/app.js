import { hot } from 'react-hot-loader'
import { Meteor } from 'meteor/meteor'
import React, { Component, Fragment } from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import history from '../utils/history'
import qs from 'query-string'

// Includes
import MainMenu from './includes/MainMenu'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Authentication from './pages/Authentication'
import Map_ from './pages/Map'
import NewEventLoadable from './pages/NewEvent/loadable'
import CongratsModal from './pages/NewEvent/CongratsModal'

import ScrollToTop from './components/ScrollToTop'

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <Fragment>
          <MainMenu />

          <ScrollToTop>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/map' component={Map_} />
            <Route path='*' render={this.renderNewEvent} />
            <Route exact path='/thank-you' component={CongratsModal} />
            <Authentication />
          </ScrollToTop>
        </Fragment>
      </Router>
    )
  }

  renderNewEvent = ({ location }) => {
    const isOpen = qs.parse(location.search).new === '1'

    if (isOpen && !Meteor.userId()) {
      sessionStorage.setItem('redirect', '/?new=1')
      return <Redirect to='/sign-in' />
    }

    return <NewEventLoadable isOpen={isOpen} location={location} />
  }
}

export default hot(module)(App)
