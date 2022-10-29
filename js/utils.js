const typeTranslateRus = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

const isResetButton = (evt) => evt.target.matches('.ad-form__reset');

const isEscapeKey = (evt) => evt.key === 'Escape';
const isClick = (evt) => evt.type === 'click';

export { typeTranslateRus, isResetButton, isEscapeKey, isClick };
