import React from 'react'
import FilterAPI from './FilterAPI'
import '../Styles/Channels.css'

const Offline = (props) => {
  return (
    <div className='Offline'>
      { FilterAPI(props.data.channels, 'offline') }
    </div>
  )
}
Offline.propTypes = {
  data: React.PropTypes.object
}
export default Offline
