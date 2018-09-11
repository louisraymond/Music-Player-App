import React from 'react'
import Wave from './Wave.js'

const StartButton = () => {
  return <button onClick={() => Wave.play()} > Start </button>
}
export default StartButton
