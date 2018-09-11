import React from 'react'

class AuthAction extends React.Component {

  state = {
    username: '',
    password: '',
  }



  // AfterLogIn =()


 onValueChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render () {
    return (
      <React.Fragment >
        <h1 className='Subtitle'> {this.props.header} </h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.submit(this.state.username,this.state.password)
      }}>
        <input  className='rounded' type='text' value={this.state.username}  name="username" onChange={this.onValueChange} placeholder='Username' />
        <input className='rounded' type='password' placeholder='Password' name="password" onChange={this.onValueChange} value={this.state.password}/>
        <input className='rounded' type='submit' />
      </form>
      </React.Fragment>
    )
  }
}

export default AuthAction
