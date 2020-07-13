/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import configureStore from './src/redux';
import {Provider} from 'react-redux';
import Route from './src/navigation/Route';

const store = configureStore();

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Route/>
            </Provider>
        );
    }
}
