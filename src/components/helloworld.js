//@flow

import React, { Component } from 'react';

export default class HelloWorld extends Component {
    render() {
        return (<h1>Hola {this.props.name}</h1>)
    }
}