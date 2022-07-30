import React from "react";
const scaleNames = {
    c: 'Celsius',
    f: 'Faharenheit',
}

const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
    return <fieldset style={{ display: 'flex' }}>
        <legend>{scaleNames[scale]}</legend>
        <input type='number' value={temperature} style={{ width: '100%' }} onChange={e => onTemperatureChange(e, scale)} />
    </fieldset>
}
export default TemperatureInput;


