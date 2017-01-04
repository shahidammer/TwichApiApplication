import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='App-appContainer'>
      <div className='container' >
        <div className='row' >
          <Title />
          <Navbar />
        </div>
      </div>
    </div>
  )
}
const Title = () => {
  return (
    <div className='App-appContainer-title'>
      <div className='col-sm-8'>
        <h1>TWITCH STREAMERS</h1>
      </div>
    </div>
  )
}
const Navbar = () => {
  return (
    <div className='App-appContainer-navbar'>
      <div className='col-sm-4'>
        <ul className='nav nav-pills'>
          <li > <Link to='/'> All</Link> </li>
          <li> <Link to='/online'> Online</Link> </li>
          <li> <Link to='/offline'> Offline</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
