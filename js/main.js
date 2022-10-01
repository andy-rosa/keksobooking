const isPositive = (number) => number >= 0;

const getRandomRange = (minValue, maxValue) => {
  let result = Math.round(Math.random() * (maxValue - minValue) + minValue);

  if (result < minValue && result++ > maxValue) {
    return `Диапозон от ${minValue} до ${maxValue} не содержит целых чисел`;
  } else if (result < minValue) {
    return result++;
  } else if (result > maxValue) {
    return result--;
  }
  return result;
};

const getIntegerRange = (firstValue, secondValue) => {
  if (isPositive(firstValue) && isPositive(secondValue)) {
    switch (firstValue === secondValue) {
      case true:
        if (firstValue === Math.round(firstValue)) {
          return firstValue;
        }
        return `Диапозон от ${firstValue} до ${secondValue} не содержит целых чисел`;
      default:
        if (firstValue > secondValue) {
          const swap = firstValue ;
          firstValue = secondValue;
          secondValue = swap;
        }
        return getRandomRange(firstValue, secondValue);
    }
  }
  return NaN;
};

getIntegerRange(1, 2);


function getFloatRandomRange(firstValue, secondValue, floatPointValue) {
  if (isPositive(firstValue) && isPositive(secondValue) && isPositive(floatPointValue) && firstValue !== secondValue) {
    if (firstValue > secondValue) {
      const swap = firstValue ;
      firstValue = secondValue;
      secondValue = swap;
    }
    const result = Math.random() * (secondValue - firstValue) + firstValue;
    return result.toFixed(floatPointValue);
  }
  return NaN;
}

getFloatRandomRange(2.324, 0.1234324234, 3);
