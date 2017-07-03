//@flow

import React, { Component } from 'react';

type TodoCreatorProps = {
    createTodo: Function
}

export default class TodoCreator extends Component {
    state: {
        todo: string
    };

    clickHandler: Function;
    textHandler: Function;
    createTodo: Function;

    constructor(props: TodoCreatorProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
        this.createTodo = this.props.createTodo;
        this.textHandler = this.textHandler.bind(this)
    }
    
    clickHandler() {
        this.createTodo(this.state.todo);
    }

    textHandler(event: Event) {
        if (event.target instanceof HTMLInputElement) {
            this.setState({
                todo: event.target.value
            })
        }
    }

    render() {
        return (
        <div>
            <input onChange={this.textHandler} type="text" placeholder="Nombre"/>
            <button onClick={this.clickHandler}>Crear</button>
        </div>
        )

    }
}