import React, { Component } from 'react'

export default class Emoji extends Component {
    addEmoji = ({ text, emoji }) => `${emoji} ${text} ${emoji}`;

    render(decortedText) {
        let text = `This is default text`;
        if (decortedText) {
            text = decortedText
        }
        return (
            <div>{text}</div>
        )
    }
}


