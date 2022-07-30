import React, { Component } from 'react'

export default class Bracket extends Component {
    brk = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ brk: this.brk })
    }
}


