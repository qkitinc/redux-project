import { INCREMENT, DECREMENT, RESET } from './actionTypes'

export const increment = (dispatch, payload) => (
    dispatch({
        type: INCREMENT,
        payload: payload
    })
)

