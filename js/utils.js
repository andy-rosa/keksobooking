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

const isResetButton = (evt) => evt.target.matches('.ad-form__reset');

const isEscapeKey = (evt) => evt.key === 'Escape';
const isClick = (evt) => evt.type === 'click';

export { typeTranslateRus, typeMinPrice, isResetButton, isEscapeKey, isClick };
