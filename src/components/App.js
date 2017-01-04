import React from 'react'
import Header from './Header'
import ErrorMessage from './ErrorMsg.js'
import '../Styles/App.css'
import '../index.css'

const App = (props) => {
  let {isFailed} = props.data
  if (isFailed) {
    return (
      <div className='App'>
        <Header />
        <ErrorMessage message={props.data} />
      </div>
    )
  } else {
    return (
      <div className='App'>
        <Header />
        {React.cloneElement(props.children, props)}
      </div>
    )
  }
}
App.propTypes = {
  children: React.PropTypes.element.isRequired,
  data: React.PropTypes.object
}
export default App
