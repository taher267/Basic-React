import React, { Component } from 'react'

export default class Emoji extends Component {
    ad = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        return this.props.children({ ad: this.ad })
    }
}


