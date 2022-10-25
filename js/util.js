const SIMILAR_AD_COUNT = 10;

const typeTranslateRus = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

const isResetButton = (evt) => evt.target.matches('.ad-form__reset');

export { SIMILAR_AD_COUNT, typeTranslateRus, isResetButton };
