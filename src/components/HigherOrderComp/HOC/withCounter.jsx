import React from 'react';

const withCounter = (OriginalComponent) => {
    const newReact = React;
    // class NewComponent extends React.Component {
    //     state = {
    //         count: 0,
    //     }
    //     incrementCount = _ => this.setState(({ count }) => ({ count: ++count }));

    //     render() {
    //         const { count } = this.state;
    //         return <OriginalComponent count={count} incrementCount={this.incrementCount} />;
    //     }
    // }
    // return NewComponent;

    const newFunction = _ => {

        const [count, incrementCount] = newReact.useState(0);

        const increment = _ => incrementCount(c => c + 1);

        return <OriginalComponent count={count} increment={increment} />

    }

    return newFunction;
}

export default withCounter