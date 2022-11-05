const typeTranslateRus = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

const typeMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const STANDARD_DELAY = 500;

const NOT_CONTAIN = -1;


const isEscapeKey = (evt) => evt.key === 'Escape';
const isClick = (evt) => evt.type === 'click';

const checkContentBetweenArray = (checkup, availability) => {
  for (let i = 0; i < availability.length; i++) {
    if(checkup.indexOf(availability[i]) === NOT_CONTAIN) {
      return false;
    }
  }
  return true;
};

const debounce = (callback, timeoutDelay = STANDARD_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { typeTranslateRus, typeMinPrice, isEscapeKey, isClick, checkContentBetweenArray, debounce };
