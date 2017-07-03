//@flow

import React, { Component } from 'react';
import TodoCreator from './todo-creator';
import TodoList from './todo-list';

export default class TodoContainer extends Component {
    state: {
        todos: string[]
    };

    createTodo: Function;

    constructor(props: any) {
        
        super(props);
        this.createTodo = this.createTodo.bind(this);
        this.state = {
            todos: []
        }
    }

    createTodo(newTodo: string) {
        const newTodoList = this.state.todos;
        newTodoList.push(newTodo);
        this.setState({
            todos: newTodoList
        })
    }

    render() {
        return (
            <div>
                <div>
                    <TodoList todos={this.state.todos}/>
                </div>

                <div>
                    <TodoCreator createTodo={ this.createTodo }/>
                </div>
            </div>
        )
    }


}