import React, { Component } from 'react'

import NewMessageBox from './NewMessageBox'
import MessagesList from './MessagesList'

import { connect } from 'react-redux'
import {
  sendNewMessageAction,
  initMessagesSyncAction,
  stopMessagesSyncAction
} from '../state/messages'

class Chat extends Component {
  state = {
    newMessageText: ''
  }

  componentDidMount() {
    this.props._initMessagesSyncAction()
  }

  componentWillUnmount() {
    this.props._stopMessagesSyncAction()
  }

  newMessageChangeHandler = (event) => this.setState({
    newMessageText: event.target.value
  })

  sendNewMessageHandler = () => {
    if (!this.state.newMessageText) {
      alert('Type message text!')
      return
    }

    this.props._sendNewMessageAction(this.state.newMessageText)
    this.setState({ newMessageText: '' })
  }

  render() {
    return (
      <div>
        <NewMessageBox
          onSendCLick={this.sendNewMessageHandler}
          onNewMessageChange={this.newMessageChangeHandler}
          newMessageText={this.state.newMessageText}
        />
        {
          this.props._messages ?
            <MessagesList
              messages={this.props._messages}
            />
            :
            'No messages!'
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  _messages: state.messages.messages
})

const mapDispatchToProps = dispatch => ({
  _initMessagesSyncAction: () => dispatch(initMessagesSyncAction()),
  _stopMessagesSyncAction: () => dispatch(stopMessagesSyncAction()),
  _sendNewMessageAction: message => dispatch(sendNewMessageAction(message))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)