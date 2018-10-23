import app from '../feathers'

const SET_MESSAGES = 'messages/SET_MESSAGES'

const setMessagesAction = messages => ({
  type: SET_MESSAGES,
  messages
})

export const initMessagesSyncAction = () => (dispatch, getState) => {
  const fetchMessages = () => (
    app.service('messages')
      .find({
        query: {
          $limit: -1,
          $sort: {
            timestamp: -1
          }
        }
      })
      .then((messages) => {
        dispatch(
          setMessagesAction(
            messages && messages.map(
              message => ({ ...message, key: message._id })
            )
          )
        )
      })
  )

  fetchMessages()

  app
    .service('messages')
    .on(
      'created',
      message => fetchMessages()
    )
}

export const stopMessagesSyncAction = () => (dispatch, getState) => {
  app
    .service('messages')
    .removeAllListeners('created')
}

export const sendNewMessageAction = newMessageText => (dispatch, getState) => {
  const author = getState().auth.user

  app.service('messages').create({
    text: newMessageText,
    timestamp: Date.now(),
    author
  })
}

const initialState = {
  messages: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      }
    default:
      return state
  }
}