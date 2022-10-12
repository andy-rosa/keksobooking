import { getRandomArrayElement, getRandomArrayIndex, getRandomPositiveFloat, getRandomPositiveInteger } from './random.js';

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

const generateDataPng = (lengthValue) => {
  const countersUserPng = Array.from({ length: lengthValue }, (_, k) => String(++k).padStart(String(lengthValue).length, '0'));
  return () => (countersUserPng.length > 0) ? `img/avatars/user${countersUserPng.shift()}.png` : `${countersUserPng} пустой массив`;
};

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

const similarAds = (lengthValue) => Array.from({ length: lengthValue }, createAd);

export { similarAds };
