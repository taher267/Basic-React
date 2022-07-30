import React from 'react'

export default class Bracket extends React.Component {
    brk = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ brk: this.brk })
    }
}



//  export default function Bracket() {
//     brk = (text) => `[ ${text} ]`;
//         return
//     }






