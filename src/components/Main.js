import React from 'react'
import Loading from 'react-loading-bar'
import '../Styles/Channels.css'
import FilterAPI from './FilterAPI'

const Main = (props) => {
  const { channels, isFetching } = props.data
  if (isFetching) {
    return (
      <div className='LoadingBar'>
        <Loading show={isFetching} color='white' />
        <h2>Loading....</h2>
      </div>
    )
  } else {
    return (
      <div className='Main'>
        <Loading show={isFetching} color='white' />
        { FilterAPI(channels, 'All') }
      </div>
    )
  }
}
Main.propTypes = {
  data: React.PropTypes.object
}
export default Main
