import React from 'react'
import Wave from './Wave.js'

const LoadFileButton = (props) => {
  return (
    <div>

      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleClick(e.target.url.value)
      }}>

        <input type='text' name='url' />
        <button> Load Track </button>
      </form>
    </div>)
}

export default LoadFileButton

// Wave.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
//   .then(() => Wave.play())
