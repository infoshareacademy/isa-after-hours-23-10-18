import React from 'react'

import LogInBox from './LogInBox'

import { connect } from 'react-redux'
import { logInAction } from '../state/auth'

class Auth extends React.Component {
  state = {
    newName: ''
  }

  newNameChangeHandler = (event) => this.setState({
    newName: event.target.value
  })

  logInHandler = () => {
    if (!this.state.newName) {
      alert('Please type your name')
      return
    }

    this.props._logInAction(this.state.newName)
  }

  render() {
    return (
      this.props._user ?
        this.props.children
        :
        <LogInBox
          onLogInClick={this.logInHandler}
          onNewNameChange={this.newNameChangeHandler}
          newName={this.state.newName}
        />
    )
  }
}

const mapStateToProps = state => ({
  _user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  _logInAction: name => dispatch(logInAction(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)