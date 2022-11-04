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

const sliderElement = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const typeInput = document.querySelector('#type');

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

sliderElement.noUiSlider.on('slide', () => {
  priceInput.value = sliderElement.noUiSlider.get();
});

typeInput.addEventListener('change', (evt) => {
  const sliderConfig = {
    range: {
      min: getPrice(evt.target.value),
      max: MAX_PRICE,
    },
    start: priceInput.value,
    step: PRICE_CHANGE,
  };

  if (priceInput.value.length) {
    const lastPriceValue = priceInput.value;
    sliderElement.noUiSlider.updateOptions(sliderConfig);
    priceInput.value = lastPriceValue;

  } else {
    sliderElement.noUiSlider.updateOptions(sliderConfig);
    sliderElement.noUiSlider.set(getPrice(evt.target.value));
  }

});
