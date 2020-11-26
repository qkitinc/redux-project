import React from 'react';
import { INCREMENT, DECREMENT, RESET } from '../actions/actionTypes'

const initValue = {
    count: 100
}



const counterReducer = (state = initValue, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            };
        case RESET:
            return {
                ...state,
                count: action.payload
            }
        default:
            return {
                ...state
            }
    }
};

export default counterReducer;