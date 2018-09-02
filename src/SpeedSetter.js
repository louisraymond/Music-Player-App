import React from 'react'
import Wave from './Wave.js'

const SpeedSetter = (props) => {
  return (
    <div>

      <form onSubmit={(e) => {
        e.preventDefault()
        Wave.setPlaybackRate(e.target.url.value)
      }}>

        <input type='text' name='url' />
        <button> Set Playback Rate</button>
      </form>
    </div>)
}

export default SpeedSetter
