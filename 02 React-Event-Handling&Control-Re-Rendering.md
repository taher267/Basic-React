# React Event Handling & Control Re Rendering

bind(this) of Class Component ['']()
### Solution One(1) defaine a arrow function
    counter = () => this.setState(({ count }) => ({ count: count + 1 }));


 ### Solution Two bind method with define constractor
 
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

    <Button counter={this.counter.bind(this)} /> 

### Solution 3 Three
### But not working shouldComponentUpdate <Button counter={this.counter} > 
    counter() { this.setState(({ count }) => ({ count: count + 1 })); }
    return <button onClick={this.counter.bind(this)}>{count}</button>