import React from 'react'

const NewMessageBox = (props) => (
  <div>
    <input
      type="text"
      onChange={props.onNewMessageChange}
      value={props.newMessageText}
    />
    <button
      onClick={props.onSendCLick}
    >
      SEND!
    </button>
  </div>
)

export default NewMessageBox