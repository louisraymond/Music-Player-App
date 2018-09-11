import React from 'react'
import Wave from './Wave.js'

const PlayPauseButton = () => {
  return <button className='controlButton' onClick={() => Wave.play()} > Play </button>
}
export default PlayPauseButton
