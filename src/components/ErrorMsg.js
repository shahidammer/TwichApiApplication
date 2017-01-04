import React from 'react'
const ErrorMessage = (props) => {
  return (
    <div className='App-errorMessage'>
      <div className='alert alert-danger' role='alert'>
        <p>Unable to Fetch channels, Try reloading the page, or Change your Api end point</p>
      </div>
    </div>
  )
}
export default ErrorMessage
