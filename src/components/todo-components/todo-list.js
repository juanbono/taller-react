//@flow

import React, { Component, Element } from 'react';
import TodoCreator from './todo-creator';
// para generar las keys de cada elemento
import uuidv1 from 'uuid/v1'; 

type TodoListProps = {
    todos: string[]
}

export default class TodoList extends Component {
    
    static defaultProps = {
        todos: []
    }

    constructor(props: TodoListProps) {
        super(props);
    }

    render() {
        
        const todoItems: Element<any>[] = this.props.todos.map((todo: string) => {
            return (
            <div key={uuidv1()}>
                <input type="checkbox" /> 
                <span>{todo}</span>
            </div>
            )
        });

        return (
            <div>
                {todoItems}
            </div>
        )
        
    }
}