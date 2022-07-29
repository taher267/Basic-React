import React from 'react';
import Clock from './Clock';
const Index = () => {
    const [toggle, setToggle] = React.useState(true);
    return <>
        {toggle ? <Clock local='bn-BD' /> : ''}
        <button onClick={() => setToggle(t => !t)}>Toggler</button></>
}

export default Index;