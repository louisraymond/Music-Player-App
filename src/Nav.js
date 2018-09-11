import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (

    <div className='ui top fixed menu'>
      {props.user ?
        <React.Fragment>
          <Link className='item' to='/' onClick={props.logout}><button className='controlButton'> Log Out</button></Link>
        </React.Fragment>
        :
        <React.Fragment>
          <Link className='item' to='/signup'> <button className='controlButton'>Sign Up</button> </Link>
          <Link className='item' to='/signin'> <button className='controlButton'>Sign In </button></Link>
        </React.Fragment>
      }
      <div className='titleholder'>
        <h1 className='title' > Playa Playa! </h1>

      </div>

    </div>
  )
}

export default Nav
