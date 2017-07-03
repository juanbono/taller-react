//@flow

import React, { Component } from 'react';
import TodoContainer from './todo-components/todo-container';

export default class App extends Component {
    render() {
        return (
            <div>
                <TodoContainer />
            </div>
        )
    }
}