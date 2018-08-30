import React from 'react'
import Wave from './Wave.js'

const StopButton = () => {
  return <button onClick = {() => Wave.stop()} > Stop </button>
}
export default StopButton
