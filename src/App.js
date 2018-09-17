import React from 'react'
import logo from './logo.svg'
import './App.css'
import Wave from './Wave.js'
import PlayPauseButton from './PlayPauseButton'
import WaveShower from './WaveShower.js'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'
import AuthAction from './auth/AuthAction'
import {createUser, loginUser, getCurrentUser, getCurrentSongList }  from './adapter'
import ReactFilestack from 'filestack-react';


class App extends React.Component {

  state = {
    user: null,
  }

  postAuth = user => {
    if (user.error){
      alert(user.error)
    }else {
       this.afterLogIn()
       localStorage.setItem('token',user.token)
       this.updateCurrentUser(localStorage.getItem('token'))
     }
   }

   updateCurrentUser = (token)  => {
     if (token) {
       getCurrentUser(token).then(data => {
         if (data.error) {
           this.logout()
         } else {
           this.setState({
             user: data
           })
         }
       })
     }
   }




   componentDidMount(){
     if (localStorage.getItem('token')) {
       this.updateCurrentUser(localStorage.getItem('token'))
     }
            this.afterLogIn()
       }



  signUp = (username,password) => {
    createUser(username,password).then(this.postAuth)
  }

  signIn = (username, password) => {
    loginUser(username,password).then(user => this.postAuth(user))
  }

  afterLogIn = () => {
    this.props.history.push('/')
  }

  logout = () => {
    this.setState({
      user : null
    })
    this.props.history.push('/signin')
    localStorage.clear()
  }

  updateUserSongs = (newSong) => {
    let mutableUser=this.state.user
    let songnames=this.state.user.songs.map( song => song.name)
    console.log (songnames)
    if (!songnames.includes(newSong.name)){
    mutableUser.songs=[...mutableUser.songs,newSong]
    this.setState({
      user:mutableUser
    }  
  )}else{
      alert("Song With Same Name Already Included!")
    }
  }


   

  render () {
    return (

      <div className='container'>
        <Nav user={this.state.user} logout={this.logout} />
        <Route exact path='/' render={() => <WaveShower user={this.state.user} updateUserSongs={this.updateUserSongs}/>} />
        <Route exact path='/signup' render={() => {
          return <AuthAction header='Sign Up' submit={this.signUp} />
        }} />
        <Route exact path='/signin' render={() => {
          return <AuthAction header='Sign In' submit={this.signIn}/>
        }} />

    </div>
    )
  }
}

export default withRouter(App)
