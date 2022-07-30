import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import tempConvert from './Converter';

class Calculator extends Component {
    state = { temperature: '', scale: 'c' }
    handleChange = (e, scale) => {
        this.setState({ temperature: e.target.value, scale, });
    };
    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tempConvert(scale, temperature) : temperature;

        const fahrenheit = scale === 'c' ? tempConvert(scale, temperature) : temperature;

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleChange} />
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleChange} />
                <hr />
                <div>{temperature > 99 ? 'Boiled water' : 'not boiled'}</div>
            </div>
        );
    }
}

export default Calculator;