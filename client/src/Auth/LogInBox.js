import React from 'react'

const LogInBox = (props) => (
  <div>
    <h4>Please type your name!</h4>
    <input
      type="text"
      onChange={props.onNewNameChange}
      value={props.newName}
    />
    <button
      onClick={props.onLogInClick}
    >
      Log In!
    </button>
  </div>
)

export default LogInBox