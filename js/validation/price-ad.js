import { typeMinPrice } from '../utils.js';
import { form } from './form.js';

const typeSelect = form.querySelector('#type');
const priceInput = form.querySelector('#price');


const getTypePrice = (evt) => {
  const minPrice = typeMinPrice[evt.target.value];
  priceInput.setAttribute('min', minPrice);
  priceInput.setAttribute('placeholder', minPrice);
};

const onTypeChange = (evt) => getTypePrice(evt);

export { onTypeChange, priceInput, typeSelect };
