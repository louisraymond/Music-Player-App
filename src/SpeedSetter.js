import React from 'react'
import Wave from './Wave.js'
import InputRange from 'react-input-range';



class SpeedSetter extends React.Component {
    state={
      speed:1
    }


  render () {
    let { speed } = this.state.speed
    return (
      <div>
        <div style={{height: "100px"}}></div>
        <div style={{height: "100px"}}>
          <InputRange
          maxValue={3}
          minValue={0}
          step={0.1}
          value={this.state.speed}
          onChange={
            speed => {
              this.setState({ speed: Number((speed).toFixed(1)) })
              Wave.setPlaybackRate(speed)}
            } />
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.setState({ speed:e.target.url.value })
          Wave.setPlaybackRate(e.target.url.value)
        }}>
          <input className='rounded' type='text' name='url' />
          <button className='controlButton'> Set Playback Rate</button>
        </form>
      </div>)
  }
}

export default SpeedSetter
