import React from 'react'
import Wave from './Wave.js'

const PlayPauseButton = () => {
  return <button onClick = {() => Wave.playPause()} > Play/Pause </button>
}
export default PlayPauseButton
