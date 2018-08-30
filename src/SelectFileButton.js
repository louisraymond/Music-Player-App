import React from 'react'
import Wave from './Wave.js'
import Dropzone from 'react-dropzone'



class SelectFileButton extends React.Component {

  state = {

  }

  handleFile(files,rejectedFiles) {
      console.log(files)
      Wave.load2(files)
  }

  render(){
  return (
    <div>
    <Dropzone onDrop = {this.props.handleClick} /> 
    </div>
  )}
}

export default SelectFileButton
