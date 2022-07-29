import React, { Component } from 'react';

class Button extends Component {
    //it is call immidiate rerendering of babel
    /**
     * 
     * @param {*} nextProps what will get for the props
     * @param {*} nextState what will get for the state
     * shouldComponentUpdate will not working bind method
     */
    shouldComponentUpdate(nextProps, nextState) {
        const { counter: currentCounter } = this.props;
        const { counter: nextCounter } = nextProps;
        console.log(currentCounter === nextCounter);
        if (currentCounter === nextCounter) return false;
        return true;
    }
    render() {
        console.log('Button rendering');
        const { counter } = this.props
        return <>
            <button onClick={counter}>Click</button>
        </>
    }
}

export default Button;