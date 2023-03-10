import { Scales, TemperatureConverter } from './TemperatureConverter';

describe('Temperature Converter', () => {
  it('should be able to convert from celsius to fahrenheit', () => {
    const temperatureConverter = new TemperatureConverter({
      temperature: 100,
      scale: Scales.celsius,
      scaleToConvert: Scales.fahrenheit,
    });
    expect(temperatureConverter.execute()).toEqual({
      celsius: 100,
      fahrenheit: 212,
    });
  });

  it('should be able to convert fahrenheit to celsius', () => {
    const temperatureConverter = new TemperatureConverter({
      temperature: 100,
      scale: Scales.fahrenheit,
      scaleToConvert: Scales.celsius,
    });
    expect(temperatureConverter.execute()).toEqual({
      fahrenheit: 100,
      celsius: 37.78,
    });
  });

  it('should be able to convert celsius to kelvin', () => {
    const temperatureConverter = new TemperatureConverter({
      temperature: 100,
      scale: Scales.celsius,
      scaleToConvert: Scales.kelvin,
    });
    expect(temperatureConverter.execute()).toEqual({
      celsius: 100,
      kelvin: 373.15,
    });
  });

  it('should be able to convert kelvin to celsius', () => {
    const temperatureConverter = new TemperatureConverter({
      temperature: 100,
      scale: Scales.kelvin,
      scaleToConvert: Scales.celsius,
    });
    expect(temperatureConverter.execute()).toEqual({
      kelvin: 100,
      celsius: -173.15,
    });
  });

  it('should be able to convert kelvin to fahrenheit', () => {
    const temperatureConverter = new TemperatureConverter({
      temperature: 100,
      scale: Scales.kelvin,
      scaleToConvert: Scales.fahrenheit,
    });
    expect(temperatureConverter.execute()).toEqual({
      kelvin: 100,
      fahrenheit: -279.67,
    });
  });

  it('should be able to convert fahrenheit to kelvin', () => {
    const temperatureConverter = new TemperatureConverter({
      temperature: 100,
      scale: Scales.fahrenheit,
      scaleToConvert: Scales.kelvin,
    });
    expect(temperatureConverter.execute()).toEqual({
      fahrenheit: 100,
      kelvin: 310.93,
    });
  });

  it('should throw an error if the scale & scaleToConvert are the same', () => {
    expect(
      () =>
        new TemperatureConverter({
          temperature: 100,
          scale: Scales.kelvin,
          scaleToConvert: Scales.kelvin,
        })
    ).toThrowError("You're trying to convert to the same scale!");
  });

  it ('should trhow an error if the scale and/or the scaleToConvert are invalid', () => {
    expect(
      () =>
        new TemperatureConverter({
          temperature: 100,
          scale: 'invalid scale',
          scaleToConvert: Scales.kelvin,
        })
    ).toThrowError("Invalid termometric scale!");

    expect(
      () =>
        new TemperatureConverter({
          temperature: 100,
          scale: Scales.kelvin,
          scaleToConvert: 'invalid scaleToConvert',
        })
    ).toThrowError("Invalid termometric conversion scale!");
  })
});
