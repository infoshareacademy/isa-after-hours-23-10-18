const LOGIN = 'auth/LOGIN'

export const logInAction = name => ({
  type: LOGIN,
  name
})

const initialState = {
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.name
      }
    default:
      return state
  }
}