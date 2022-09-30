function getRandomRange(minValue, maxValue) {
  if (minValue >= 0 && maxValue >= 0 && minValue !== maxValue) {
    if (minValue > maxValue) {
      const swap = minValue ;
      minValue = maxValue;
      maxValue = swap;
    }
    const result = Math.round(Math.random() * (maxValue - minValue) + minValue);
    if (result < minValue && result + 1 > maxValue) {
      return `Диапозон от ${minValue} до ${maxValue} не содержит целых чисел`;
    } else if (result < minValue) {
      return result + 1;
    } else if (result > maxValue) {
      return result - 1;
    }
    return result;
  }
  return NaN;
}

getRandomRange(1, 2);


function getFloatRandomRange(minValue, maxValue, valueFloatPoint) {
  if (minValue >= 0 && maxValue >= 0 && valueFloatPoint >= 0 && minValue !== maxValue) {
    if (minValue > maxValue) {
      const swap = minValue ;
      minValue = maxValue;
      maxValue = swap;
    }
    const result = Math.random() * (maxValue - minValue) + minValue;
    return result.toFixed(valueFloatPoint);
  }
  return NaN;
}

getFloatRandomRange(2.324, 0.1234324234, 3);
