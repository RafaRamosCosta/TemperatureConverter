import { Scales, TemperatureConverter } from './TemperatureConverter';

const temperatureConverter = new TemperatureConverter({
  temperature: 100,
  scale: Scales.fahrenheit,
  scaleToConvert: Scales.kelvin,
});
console.log(temperatureConverter.execute());
