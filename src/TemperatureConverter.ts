export enum Scales {
  celsius = 'celsius',
  fahrenheit = 'fahrenheit',
  kelvin = 'kelvin',
}

interface IConversionProps {
  temperature: number;
  scale: Scales;
  scaleToConvert: Scales;
}

export class TemperatureConverter {
  private temperature: number;
  private scale: Scales;
  private scaleToConvert: Scales;

  constructor({ temperature, scale, scaleToConvert }: IConversionProps) {
    this.temperature = temperature;
    this.scale = scale;
    this.scaleToConvert = scaleToConvert;
    this.validate();
  }

  validate() {
    const validScales = Object.values(Scales);
    const isValidScale = validScales.find((scale) => scale === this.scale);

    const isValidConversionScale = validScales.find(
      (conversionScale) => conversionScale === this.scaleToConvert
    );

    if (!isValidScale) throw new Error('Invalid termometric scale!');

    if (!isValidConversionScale)
      throw new Error('Invalid termometric conversion scale!');

    if (this.scale === this.scaleToConvert)
      throw new Error("You're trying to convert to the same scale!");
  }

  execute(): Record<string, number> {
    const key = `${this.scale}To${this.scaleToConvert}`;

    const conversions: Record<string, number> = {
      celsiusTokelvin: this.temperature + 273.15,
      kelvinTocelsius: this.temperature - 273.15,
      fahrenheitTocelsius: (this.temperature - 32) * (5 / 9),
      celsiusTofahrenheit: this.temperature * (9 / 5) + 32,
      fahrenheitTokelvin: (this.temperature - 32) * (5 / 9) + 273.15,
      kelvinTofahrenheit: (this.temperature - 273.15) * (9 / 5) + 32,
    };

    const convertedValue = conversions[key];
    return {
      [this.scale]: this.temperature,
      [this.scaleToConvert]: Number(convertedValue.toFixed(2)),
    };
  }
}
