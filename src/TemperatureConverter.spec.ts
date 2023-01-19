import { Scales, TemperatureConverter } from './TemperatureConverter';

describe('Temperature Converter', () => {
  it('should be able to convert from celsius to fahrenheit', () => {
    const temperatureConverter = new TemperatureConverter(
      100,
      Scales.celsius,
      Scales.fahrenheit
    );
    expect(temperatureConverter.execute()).toEqual({
      celsius: 100,
      fahrenheit: 212,
    });
  });

  it('should be able to convert fahrenheit to celsius', () => {
    const temperatureConverter = new TemperatureConverter(
      100,
      Scales.fahrenheit,
      Scales.celsius
    );
    expect(temperatureConverter.execute()).toEqual({
      fahrenheit: 100,
      celsius: 37.78,
    });
  });

  it('should be able to convert celsius to kelvin', () => {
    const temperatureConverter = new TemperatureConverter(
      100,
      Scales.celsius,
      Scales.kelvin
    );
    expect(temperatureConverter.execute()).toEqual({
      celsius: 100,
      kelvin: 373.15,
    });
  });

  it('should be able to convert kelvin to celsius', () => {
    const temperatureConverter = new TemperatureConverter(
      100,
      Scales.kelvin,
      Scales.celsius
    );
    expect(temperatureConverter.execute()).toEqual({
      kelvin: 100,
      celsius: -173.15,
    });
  });

  it('should be able to convert kelvin to fahrenheit', () => {
    const temperatureConverter = new TemperatureConverter(
      100,
      Scales.kelvin,
      Scales.fahrenheit
    );
    expect(temperatureConverter.execute()).toEqual({
      kelvin: 100,
      fahrenheit: -279.67,
    });
  });

  it('should be able to convert fahrenheit to kelvin', () => {
    const temperatureConverter = new TemperatureConverter(
      100,
      Scales.fahrenheit,
      Scales.kelvin
    );
    expect(temperatureConverter.execute()).toEqual({
      fahrenheit: 100,
      kelvin: 310.93,
    });
  });

  it('should throw an error if the scale & scaleToConvert are the same', () => {
    expect(
      () => new TemperatureConverter(100, Scales.kelvin, Scales.kelvin)
    ).toThrowError("You're trying to convert to the same scale!");
  });
});
