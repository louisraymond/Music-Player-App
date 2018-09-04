import React from 'react'
import Wave from './Wave.js'
import Dropzone from 'react-dropzone'



class SelectFileButton extends React.Component {

  state = {

  }

  

  render(){
  return (
    <div>
    <Dropzone onDrop = {this.props.handleClick} />
    </div>
  )}
}

export default SelectFileButton
