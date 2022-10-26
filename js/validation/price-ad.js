import { form } from './form.js';

const typeMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const typeSelect = form.querySelector('#type');
const priceInput = form.querySelector('#price');


const getTypePrice = (evt) => {
  const minPrice = typeMinPrice[evt.target.value];
  priceInput.setAttribute('min', minPrice);
  priceInput.setAttribute('placeholder', minPrice);
};

const onTypeChange = (evt) => getTypePrice(evt);

export { onTypeChange, typeMinPrice, priceInput, typeSelect };
