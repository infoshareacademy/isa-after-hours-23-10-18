import React, { Component } from 'react'

import NewMessageBox from './NewMessageBox'
import MessagesList from './MessagesList'

import { connect } from 'react-redux'

class Chat extends Component {
  state = {
    newMessageText: ''
  }

  newMessageChangeHandler = (event) => this.setState({
    newMessageText: event.target.value
  })

  render() {
    return (
      <div>
        <NewMessageBox
          onSendCLick={() => { }}
          onNewMessageChange={this.newMessageChangeHandler}
          newMessageText={this.state.newMessageText}
        />
        <MessagesList
          messages={[]}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)