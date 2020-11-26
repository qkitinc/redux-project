import { INCREMENT, DECREMENT, RESET } from './actionTypes'

export const increment = () => ({
    type: INCREMENT,
    payload: 5
})

export const decrement = () => ({
    type: DECREMENT,
    payload: 5
}
)

export const reset = () => ({
    type: RESET,
    payload: 0
}
)
