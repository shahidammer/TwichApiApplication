import React from 'react'
import FilterAPI from './FilterAPI'
import '../Styles/Channels.css'

const Online = (props) => {
  return (
    <div className='Online'>
      { FilterAPI(props.data.channels, 'online') }
    </div>
  )
}
Online.propTypes = {
  data: React.PropTypes.object
}
export default Online
