import React from 'react';
import Button from './Button';
/**
 ******* bind(this) always return a new faferance 
 */
class EventHandle extends React.Component {
    state = {
        count: 1
    }
    componentDidMount() {
        this.closeInterval = '' //setInterval(() => this.setState(({ count }) => ({ count: count + 1 })), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.closeInterval)
    }

    // counter (){
    // this.setState not working due to it(this) is refare the woner, means (counter() func) && this.setState is not func of the woner func counter() 
    //     this.setState(({ count }) => ({ count: count + 1 }));
    // }
    //Solution One(1) defaine a arrow function
    counter = () => this.setState(({ count }) => ({ count: count + 1 }));
    //Solution Two bind method with define constractor
    /**
     constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        this.counter = this.counter.bind(this, 'name');
    }
    counter() {
        this.setState(({ count }) => ({ count: count + 1 }));
    }
     */
    // counter() {
    //     this.setState(({ count }) => ({ count: count + 1 }));
    // }
    //Solution 3 Three
    //counter() { this.setState(({ count }) => ({ count: count + 1 })); }
    // return <button onClick={this.counter.bind(this)}>{count}</button>

    render() {
        console.log('Event handle Render');
        const { count } = this.state;
        return <>
            <button onClick={_ => clearInterval(this.closeInterval)}>Stop</button> {' '}
            <Button counter={this.counter} /> {' '}
            {/* <Button counter={this.counter.bind(this)} /> not working shouldComponentUpdate */}
            <span>{count}</span></>
    }
}



export default EventHandle;