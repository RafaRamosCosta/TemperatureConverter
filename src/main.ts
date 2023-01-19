import { Scales, TemperatureConverter } from './TemperatureConverter';

const temperatureConverter = new TemperatureConverter(
  100,
  Scales.fahrenheit,
  Scales.kelvin
);
console.log(temperatureConverter.execute());
