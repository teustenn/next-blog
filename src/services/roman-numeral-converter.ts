interface getAgeParams {
  birthYear?: number;
}

export const RomanNumeralConverter = {
  getAge({ birthYear = 2001 }: getAgeParams = {}): string {
    const year = new Date().getFullYear() - birthYear;

    const romanNumerals: [string, number][] = [
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1],
    ];

    let decimal = year;
    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
      const [symbol, value] = romanNumerals[i];
      while (decimal >= value) {
        result += symbol;
        decimal -= value;
      }
    }

    return result;
  },
};
