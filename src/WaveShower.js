import React from 'react';
import Wave from './Wave.js'
import PlayPauseButton from './PlayPauseButton'
import LoadFileButton from './LoadFileButton'
import StopButton from './StopButton'
import StartButton from './StartButton'
import SelectFileButton from './SelectFileButton'
import SpeedSetter from './SpeedSetter'
import ReactFilestack from 'filestack-react';
import SongList from './SongList'
import ClearRegion from './ClearRegion'
import {postSong} from './adapter'
import PauseButton from './PauseButton'
import App from './App'

class WaveShower extends React.Component {

  state ={
    url:'http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
    fileList: []
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

  songlister = ()=>{
    if (this.props.user === null){
      return ([])
    }else{
      return (this.props.user.songs)
    }
  }

  onError = () => {
    alert("This don't work")
  }



  onSuccess = (file) => {
    let songObj={
      url:`https://cdn.filestackcontent.com/${file.filesUploaded[0].handle}`,
      name: file.filesUploaded[0].filename,
      user_id: this.props.user.id
      }
    Wave.load(`https://cdn.filestackcontent.com/${file.filesUploaded[0].handle}`)
    this.setState({
      fileList: [...this.state.fileList,songObj]
    })
    postSong(songObj)
    this.props.updateUserSongs(songObj)
  }

  changeSong(url) {
    Wave.load(url)
  }

  hasName(){
    if (this.props.user ===null){
      return 'Log In or Sign Up'
    }else{
      return this.props.user.username
    }
  }

  renderChanger(){
    if(this.props.user){
      return(
        <React.Fragment>
        <div className='controls'>
        <ClearRegion/>
          <PlayPauseButton/>
          <PauseButton/>
            <div className='filePick' />
            <SpeedSetter />
              <ReactFilestack
                  buttonClass='controlButton'
                  apikey={'AXr8XbylTPCTXJxnu1nuoz'}
                  onSuccess={this.onSuccess}
                  onError={this.onError}
                />
          </div>

          <div/>
            <div style={{height: "10px"}}></div>
            <h1 className='Subtitle'>Song List</h1>
          <SongList songList={this.songlister()} changeSong={this.changeSong} />
          </React.Fragment>
      )
    }
    else{
      return <div className='Subtitle'>
        <h3 className='Subtitle'> Instructions</h3>
        <p>
        <li>Sign in and Upload a file to begin.</li>  
      <li>  Click on the Waveform to play a different part of your tune</li>
      <li>Drag over the waveform to loop</li>
        
        </p>
      </div>
    }
  }

  render() {
    return (
      <div className="App" id='app'>
        <h2 className='Subtitle'>Welcome {this.hasName()}!</h2>
        <div id="wave-timeline" />
        <div id="wave"></div>
        <br></br>
        {this.renderChanger()}
      </div>
    );
  }

}

export default WaveShower
