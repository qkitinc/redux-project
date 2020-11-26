import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../redux/actions/actionCreator'

const CounterView = (props) => {
    console.log(props);

    const { increment, decrement, reset } = props
    return (
        <>
            <h1>{props.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

const mapStateToProps = state => ({
    count: state.counterReducer.count
})

const mapDispatchToProps = {
    increment,
    decrement,
    reset,
}

console.log(mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);