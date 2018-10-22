import React from 'react'

import Message from './Message'

const MessagesList = (props) => (
  <div>
    {
      props.messages &&
      props.messages.map(({ text, author }) => (
        <Message
          text={text}
          author={author}
        />
      ))
    }
  </div>
)

export default MessagesList