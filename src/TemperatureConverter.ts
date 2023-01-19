export enum Scales {
  celsius = 'celsius',
  fahrenheit = 'fahrenheit',
  kelvin = 'kelvin',
}

export class TemperatureConverter {
  constructor(
    private temperature: number,
    private scale: Scales,
    private scaleToConvert: Scales
  ) {
    this.validate();
  }

  validate() {
    const isValidScale = this.scale in Scales;

    if (!isValidScale) throw new Error('Invalid termometric scale!');

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
