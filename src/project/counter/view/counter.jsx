import React from 'react';
import { increment } from '../redux/actions/actionCreator'

const CounterView = () => {
    return (
        <>
            <h1>Counter</h1>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </>
    );
};

export default CounterView;