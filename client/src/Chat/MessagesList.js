import React from 'react'

import Message from './Message'

const MessagesList = (props) => (
  <div>
    {
      props.messages &&
      props.messages.map(message => (
        <Message
          key={message.key}
          message={message}
        />
      ))
    }
  </div>
)

export default MessagesList