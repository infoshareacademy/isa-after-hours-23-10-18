import React from 'react'

const Message = (props) => (
  <div>
    {props.author} | {props.text}
  </div>
)

export default Message