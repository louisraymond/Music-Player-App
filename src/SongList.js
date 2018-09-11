import React from 'react'

const SongList = (props) => {
  return (
    <div className='songlist' >
      { props.songList.map(song => {
        console.log(song)
        return (<ul><button className='myButton' onClick={() => props.changeSong(song.url)}> {song.name} </button>                      </ul>)
      })}
    </div>
  )
}

export default SongList
