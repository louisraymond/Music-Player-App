import React from 'react';
import Wave from './Wave.js'
import PlayPauseButton from './PlayPauseButton'
import LoadFileButton from './LoadFileButton'
import StopButton from './StopButton'
import StartButton from './StartButton'
import SelectFileButton from './SelectFileButton'


class WaveShower extends React.Component {

  state ={
    url:'http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'
  }

  componentDidMount() {
    Wave.mount()
    Wave.load(this.state.url)
        }

  handleLoad = (newurl) => {
    Wave.load(newurl).then(() => Wave.play())
  }

  handleLoad2 = (files) =>{
    console.log(files)
    Wave.load2(files[0]).then(() => Wave.play())
  }

  render() {
    return (
      <div className="App" id='app'>
        <div id="wave-timeline" />
        <div id="wave"></div>
          <StartButton/>
          <StopButton/>
          <PlayPauseButton/>
          <SelectFileButton handleClick= {this.handleLoad2}/>
          <LoadFileButton handleClick= {this.handleLoad}/>

      </div>
    );
  }

}

export default WaveShower
