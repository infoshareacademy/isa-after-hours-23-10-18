import { databaseRef } from '../firebase'

import { mapObjectToArray } from '../utils'

const SET_MESSAGES = 'messages/SET_MESSAGES'

const setMessagesAction = messages => ({
  type: SET_MESSAGES,
  messages
})

export const initMessagesSyncAction = () => (dispatch, getState) => {
  databaseRef
    .on(
      'value',
      snapshot => dispatch(
        setMessagesAction(
          mapObjectToArray(snapshot.val()).reverse()
        )
      )
    )
}

export const stopMessagesSyncAction = () => (dispatch, getState) => {
  databaseRef.off()
}

export const sendNewMessageAction = newMessageText => (dispatch, getState) => {
  const author = getState().auth.user

  databaseRef.push({
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