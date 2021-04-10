import React from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';

export default class Calculator extends React.Component {
    state = { temperature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale: scale,
        })
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale='c' onTemperatureChange={this.handleChange} temperature={celsius} />
                <TemperatureInput scale='f' onTemperatureChange={this.handleChange} temperature={fahrenheit} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}