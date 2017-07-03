//@flow

import React, { Component } from 'react';

export default class TodoCreator extends Component {
    state: {
        todo: string
    };

    clickHandler: Function;
    textHandler: Function;
    createTodo: any;

    constructor(props: any) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
        this.createTodo = this.props.createTodo;
        this.textHandler = this.textHandler.bind(this)
    }
    
    clickHandler() {
        this.createTodo(this.state.todo);
    }

    textHandler(event: any) {
        this.setState({
            todo: event.target.value
        })
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