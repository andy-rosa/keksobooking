const MIN_ROOM = 1;
const MAX_ROOM = 6;

const MIN_GUEST = 1;
const MAX_GUEST = 10;

const MIN_PRICE = 10000;
const MAX_PRICE = 500000;

const FROM_DATA_PNG = 1;
const TO_DATA_PNG = 10;

const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const LOCATION_FLOAT_POINT = 5;

const SIMILAR_AD_COUNT = 10;

const COUNTRIES = [
  'Норвегия',
  'Франция',
  'Италия',
  'Россия',
  'Англия',
  'Испания',
  'Португалия',
  'Германия',
];

const DESCRIPTIONS = [
  'Рядом с моим жильем находится природа, где можно прогуляться по лесу. Вам понравятся оригинальность и частная скандинавская ванна. Жилье идеально подходит для пар.',
  'На снегоступах, на лыжах, прогулки зимой, весной, летом и осенью. Этот район предлагает разнообразную природу, которую вы редко бывали в любое время года.',
  'Найти чистый отдых со всей семьей в этом эксклюзивном месте и большой террасой с видом на юг!'
]

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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArrayLength = (elements) => getRandomPositiveInteger(0, elements.length - 1);

const generateDataPng = (start, end) => {
  const result = [];
  for (start; start <= end; start++) {
    if (start < 10) {
      result.push(`0${start}`);
    } else {
      result.push(`${start}`);
    }
  }
  return result;
};

const countersUserPng = [...generateDataPng(FROM_DATA_PNG, TO_DATA_PNG)];

const createAddressAvatar = (arrayData) => {
  switch (arrayData.length) {
    case 0:
      return `${arrayData} пустой массив`;
    default:
      return `img/avatars/user${arrayData.shift()}.png`;
  }
};

const getRandomNoReplyDataArray = (array) => {
  const shuffleReplicates = array.slice().sort(() => Math.random() - 0.5);
  const result = [];
  for (let i = getRandomPositiveInteger(0, array.length - 1); i < array.length; i++) {
    result.push(shuffleReplicates.shift());
  }
  return result;
};

const getRandomDataArray = (array, retry = getRandomArrayLength(array)) => {
  const result = [];
  for (let i = 0; i < retry; i++) {
    result.push(getRandomArrayElement(array));
  }
  return result;
};

function getLocationAddress() {
  const lat = getRandomPositiveFloat(MIN_LAT, MAX_LAT, LOCATION_FLOAT_POINT);
  const lng = getRandomPositiveFloat(MIN_LNG, MAX_LNG, LOCATION_FLOAT_POINT);
  return [lat, lng];
}

const createAd = () => {

  const Address = getLocationAddress();
  const lat = 0;
  const lng = 1;

  const typeAd = getRandomArrayElement(TYPES);

  return {
    author: {
      avatar: createAddressAvatar(countersUserPng),
    },

    offer: {
      title: `${getRandomArrayElement(COUNTRIES)}, ${typeAd}`,
      Address: Address.join(', '),
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
      lat: Address[lat],
      lng: Address[lng]
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
