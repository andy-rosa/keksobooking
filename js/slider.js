const sliderElement = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const typeInput = document.querySelector('#type');

const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const PRICE_CHANGE = 1;

const NUMBER_INTEGER = 0;

const typesMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const getPrice = (value) => typesMinPrice[value];

noUiSlider.create(sliderElement, {
  range: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  start: MIN_PRICE,
  step: PRICE_CHANGE,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(NUMBER_INTEGER),
    from: (value) => parseFloat(value)
  }
});

sliderElement.noUiSlider.on('update', () => {
  priceInput.value = sliderElement.noUiSlider.get();
});

typeInput.addEventListener('change', (evt) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: getPrice(evt.target.value),
      max: MAX_PRICE,
    },
    start: priceInput.value,
    step: PRICE_CHANGE,
  });
  sliderElement.noUiSlider.set(priceInput.value);
});
