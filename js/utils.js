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

const isResetButton = (evt) => evt.target.matches('.ad-form__reset');

const isEscapeKey = (evt) => evt.key === 'Escape';
const isClick = (evt) => evt.type === 'click';


function debounce(callback, timeoutDelay = STANDARD_DELAY) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { typeTranslateRus, typeMinPrice, isResetButton, isEscapeKey, isClick, debounce };
