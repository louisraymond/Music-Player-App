import React from 'react'
import logo from './logo.svg'
import './App.css'
import Wave from './Wave.js'
import PlayPauseButton from './PlayPauseButton'
import WaveShower from './WaveShower.js'

class App extends React.Component {

  render () {
    return (
      <WaveShower />
    )
  }
}

export default App
