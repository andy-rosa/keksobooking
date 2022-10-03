const isPositive = (number) => number >= 0;

const getRandomNumberInRange = ((lower, upper) => {
  const result = Math.round(Math.random() * (upper - lower) + lower);
  return Math.floor(result);
});

/**
 *
 * @param {number} firstValue Начальное значение диапазона
 * @param {number} secondValue Конечное значение диапозона
 * @returns  Возвращающает случайное целое число из переданного диапазона включительно.
 */
const getRandomPositiveInteger = (firstValue, secondValue) => {
  if (isPositive(firstValue) && isPositive(secondValue)) {

    switch (firstValue === secondValue) {
      case true:
        if (firstValue === Math.round(firstValue)) {
          return firstValue;
        }
        return `Диапозон от ${firstValue} до ${secondValue} не содержит целых чисел`;

      default: {
        const lower = Math.ceil(Math.min(firstValue, secondValue));
        const upper = Math.floor(Math.max(firstValue, secondValue));
        if (lower > upper) {
          return `Диапозон от ${firstValue} до ${secondValue} не содержит целых чисел`;
        }

        return getRandomNumberInRange(lower, upper);
      }
    }

  }
  return NaN;
};

/**
 *
 * @param {number} firstValue Начальное значение диапазона
 * @param {number} secondValue Конечное значение диапозона
 * @param {number} floatPointValue Количество знаков после запятой по умолчанию: 1
 * @returns Возвращающает случайное число с плавающей точкой из переданного диапазона включительно
 */
function getRandomPositiveFloat(firstValue, secondValue, floatPointValue = 1) {
  if (isPositive(firstValue) && isPositive(secondValue) && isPositive(floatPointValue) && firstValue !== secondValue) {

    const lower = Math.min(firstValue, secondValue);
    const upper = Math.max(firstValue, secondValue);

    const result = Math.random() * (upper - lower) + lower;
    return +result.toFixed(floatPointValue);
  }

  return NaN;
}

getRandomPositiveInteger(1, 2);
getRandomPositiveFloat(2.324, 0.1234324234, 3);
