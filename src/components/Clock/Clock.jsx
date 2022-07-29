import React from "react";

export default class Clock extends React.Component {
    state = { date: new Date() }

    componentDidMount() {
        this.clockOff = setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({ date: new Date() })
    }
    componentWillUnmount() {
        clearInterval(this.clockOff);
    }
    render() {
        return <>
            <h1>{this.state.date.toLocaleTimeString(this.props.local)}</h1>
        </>
    }
}