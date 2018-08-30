import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wave from './Wave.js'
import PlayPauseButton from './PlayPauseButton'
import WaveShower from './WaveShower.js'


class App extends React.Component {

  render () {
    return (
      <WaveShower/>
        <div id="drop_zone" ondrop="dropHandler(event);">
          <p>Drag one or more files to this Drop Zone ...</p>
        </div>
    )
  }
}

export default App;
