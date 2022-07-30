import { Component } from 'react'
import ClickCounter from './counter/ClickCounter'
import HoverCounter from './counter/HoverCounter';

export default class Index extends Component {

    render() {
        return <div>
            <ClickCounter />
            <hr />
            <HoverCounter />
        </div>
    }
}
