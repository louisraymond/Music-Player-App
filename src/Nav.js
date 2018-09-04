import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className='ui top fixed menu'>
      <div className='item'>
        <h1> PLAYA PLAYA </h1>
      </div>
      {props.user ?
        <React.Fragment>
          <div> Welcome {props.user}</div>
          <Link className='item' to='/'> Log Out</Link>
        </React.Fragment>
        :
        <React.Fragment>
          <Link className='item' to='/signup'> Sign Up </Link>
          <Link className='item' to='/signin'> Sign In </Link>
        </React.Fragment>
      }
    </div>
  )
}

export default Nav
