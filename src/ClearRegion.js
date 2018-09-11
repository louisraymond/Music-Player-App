import React from 'react'
import Wave from './Wave.js'

const clearRegion = () => {
  return <button className='controlButton' onClick={() => Wave.clearRegion()} > Clear Region </button>
}
export default clearRegion
