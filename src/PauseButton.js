import React from 'react'
import Wave from './Wave.js'

const PauseButton = () => {
  return <button className='controlButton' onClick={() => Wave.pause()} > Pause </button>
}
export default PauseButton
