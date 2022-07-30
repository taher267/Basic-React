import { Component } from 'react';
export class Counter extends Component {
    state = {
        count: 0,
    }
    increamentCount = () => this.setState(({ count }) => ({ count: ++count }));
    render() {
        const { count } = this.state;
        const { myFunc } = this.props;
        return myFunc(count, this.increamentCount)
    }
}


const Index = () => {
    return <>
        <Counter myFunc={(count, increamentCount) => <button onMouseOver={increamentCount}>Hover {count}</button>} />
        <hr />
        <Counter myFunc={(count, increamentCount) => <button onClick={increamentCount}>Click {count}</button>} />
    </>
}

export default Index;





