import React from 'react'
import logo from './logo.svg'
import './App.css'
import Wave from './Wave.js'
import PlayPauseButton from './PlayPauseButton'
import WaveShower from './WaveShower.js'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'
import AuthAction from './auth/AuthAction'
import createUser  from './adapter'


class App extends React.Component {

  state = {
    user: null
  }

  SignUp = (username,password) => {
    createUser(username,password).then(data => {

    })
  }

  render () {
    return (

      <React.Fragment>
        <Nav user={this.state.user} />
        <Route exact path='/' component={WaveShower} />
        <Route exact path='/signup' render={() => {
          return <AuthAction header='Sign Up' submit={this.SignUp} />
        }} />
        <Route exact path='/signin' render={() => {
          return <AuthAction header='Sign In' />
        }} />

      </React.Fragment>
    )
  }
}

export default withRouter(App)
