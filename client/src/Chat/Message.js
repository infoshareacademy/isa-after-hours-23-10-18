import React from 'react'
import moment from 'moment'

const Message = ({ message: { author, text, timestamp } }) => (
  <div>
    {moment(timestamp).format('DD-MM-YY HH:mm:ss')} | {author} | {text}
  </div>
)

export default Message