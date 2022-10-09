const MIN_ROOM = 1;
const MAX_ROOM = 6;

const MIN_GUEST = 1;
const MAX_GUEST = 10;

const MIN_PRICE = 10000;
const MAX_PRICE = 500000;

const ITEMS_DATA_PNG = 10;

const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const LOCATION_FLOAT_POINT = 5;

const SIMILAR_AD_COUNT = 10;

const REGIONS = [
  'Хоккайдо',
  'Тохоку',
  'Канто',
  'Тюбу',
  'Хокурику',
  'Синъэцу',
  'Токай',
  'Тюгоку'
];

const DESCRIPTIONS = [
  'Рядом с моим жильем находится природа, где можно прогуляться по лесу. Вам понравятся оригинальность и частная скандинавская ванна. Жилье идеально подходит для пар.',
  'На снегоступах, на лыжах, прогулки зимой, весной, летом и осенью. Этот район предлагает разнообразную природу, которую вы редко бывали в любое время года.',
  'Найти чистый отдых со всей семьей в этом эксклюзивном месте и большой террасой с видом на юг!'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_INS = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECK_OUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


const isPositive = (number) => number >= 0;

const getRandomNumberInRange = (lower, upper) => Math.round(Math.random() * (upper - lower) + lower);

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

const getRandomArrayIndex = (elements) => getRandomPositiveInteger(0, elements.length - 1);

const getRandomArrayElement = (elements) => elements[getRandomArrayIndex(elements)];

function generateDataPng(numberOfItem) {
  const countersUserPng = Array.from({length:numberOfItem}, (v, k) => {
    if (String(++k).length < String(numberOfItem).length ) {
      return `0${k}`;
    } else {
      return `${k}`;
    }
  });
  return () => {
    switch (countersUserPng.length) {
      case 0:
        return `${countersUserPng} пустой массив`;
      default:
        return `img/avatars/user${countersUserPng.shift()}.png`;
    }
  };
}

const createAddressAvatar = generateDataPng(ITEMS_DATA_PNG);

const getRandomNoReplyDataArray = (array) => {
  const shuffleReplicates = array.slice().sort(() => Math.random() - 0.5);
  const result = [];
  for (let i = getRandomArrayIndex(array); i < array.length; i++) {
    result.push(shuffleReplicates.shift());
  }
  return result.sort();
};

const getRandomDataArray = (array, retry = getRandomArrayIndex(array)) => {
  const result = [];
  while (result.length <= retry) {
    result.push(getRandomArrayElement(array));
  }
  return result;
};

const getLocationAddress = () => {
  const lat = getRandomPositiveFloat(MIN_LAT, MAX_LAT, LOCATION_FLOAT_POINT);
  const lng = getRandomPositiveFloat(MIN_LNG, MAX_LNG, LOCATION_FLOAT_POINT);
  return [lat, lng];
};

const createAd = () => {

  const address = getLocationAddress();
  const lat = 0;
  const lng = 1;

  const typeAd = getRandomArrayElement(TYPES);

  return {
    author: {
      avatar: createAddressAvatar(),
    },

    offer: {
      title: `${getRandomArrayElement(REGIONS)}, ${typeAd}`,
      address: address.join(', '),
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: typeAd,
      rooms: getRandomPositiveInteger(MIN_ROOM, MAX_ROOM),
      guests: getRandomPositiveInteger(MIN_GUEST, MAX_GUEST),
      checkin: getRandomArrayElement(CHECK_INS),
      checkout: getRandomArrayElement(CHECK_OUTS),
      features: getRandomNoReplyDataArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomDataArray(PHOTOS)
    },

    location: {
      lat: address[lat],
      lng: address[lng]
    },
  };
};

const similarAds = Array.from({ length: SIMILAR_AD_COUNT }, createAd);

// Обход eslint
const log = function () {
  const res = similarAds;
  return res;
};

log();
