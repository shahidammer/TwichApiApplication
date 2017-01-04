import React from 'react'
import '../Styles/Channels.css'
const Row = (props) => {
  return (
    <div className='Channel-containerRow'>
      <div className='container'>
        <div className='row'>
            <Avatar logo={props.logo} />
            <Title urlLink={props.urlLink} name={props.name} />
            <Description desc={props.desc} />
        </div>
      </div>
    </div>

  )
}
export const Avatar = (props) => {
  return (
    <div className='Channel-containerRow-avatar'>
      <div className='col-sm-2'>
        <img src={props.logo} />
      </div>
    </div>
  )
}
export const Title = (props) => {
  return (
    <div className='Channel-container-title'>
      <div className='col-sm-3' >
        <a href={props.urlLink} target='_black'><h5> {props.name}</h5></a>
      </div>
    </div>
  )
}
export const Description = (props) => {
  return (
    <div className='Channel-containerRow-desc'>
      <div className='col-sm-7' >
        <p>{props.desc}</p>
      </div>
    </div>
  )
}
Row.propTypes = {
  logo: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  urlLink: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired
}
Avatar.propTypes = {
  logo: React.PropTypes.string.isRequired
}
Title.propTypes = {
  name: React.PropTypes.string.isRequired,
  urlLink: React.PropTypes.string.isRequired
}
Description.propTypes = {
  desc: React.PropTypes.string.isRequired
}
export default Row
