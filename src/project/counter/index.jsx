import React from 'react';
import RootView from './view'
import { Provider } from 'react-redux'
import store from './redux/store'

const Counter = () => {
    return (
        <Provider store={store}>
            <RootView />
        </Provider>
    );
};

export default Counter;