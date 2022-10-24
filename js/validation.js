import { isResetButton } from './util.js';

const form = document.querySelector('.ad-form');
const priceInput = form.querySelector('#price');
const typeSelect = form.querySelector('#type');
const roomSelect = form.querySelector('#room_number');
const capacitySelect = form.querySelector('#capacity');
const timeInSelect = form.querySelector('#timein');
const timeOutSelect = form.querySelector('#timeout');
const fieldsetTime = form.querySelector('.ad-form__element--time');


const typeMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

// Сравниваем с сотней
// Если равно сотне то разница должная быть равна тоже сотне
//

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

const validateRoom = () => (((Number(roomSelect.value) - Number(capacitySelect.value)) >= 0) && (Number(capacitySelect.value) !== 0)) || ((Number(roomSelect.value) - Number(capacitySelect.value)) === 100);
pristine.addValidator(roomSelect, validateRoom, 'Не подходящее значение');

const getTypePrice = (evt) => {
  const minPrice = typeMinPrice[evt.target.value];
  priceInput.setAttribute('min', minPrice);
  priceInput.setAttribute('placeholder', minPrice);
};

const syncTime = (evt) => {
  if (evt.target.matches('#timein')) {
    timeOutSelect.value = evt.target.value;
  } else if (evt.target.matches('#timeout')) {
    timeInSelect.value = evt.target.value;
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};
const onTypeChange = (evt) => getTypePrice(evt);
const onTimeChange = syncTime;

fieldsetTime.addEventListener('change', onTimeChange);
typeSelect.addEventListener('change', onTypeChange);

form.addEventListener('submit', onFormSubmit);

form.addEventListener('click', (evt) => {
  if (isResetButton(evt)) {
    priceInput.setAttribute('placeholder', typeMinPrice['flat']);
  }
});

