import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
export default function TemperatureInput({
    onTemperatureChange,
    temperature,
    scale,
}) {
    // state = {
    //     temperature: '',
    // };
    // handleChange = (e) => {
    //     this.setState({
    //         temperature: e.target.value,
    //     });
    // };

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}</legend>
            <input
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}
