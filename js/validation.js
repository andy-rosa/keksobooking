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

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

const validateCapacity = () =>(Number(capacitySelect.value) - Number(roomSelect.value)) <= 0;
const validateRoom = () =>( Number(roomSelect.value) - Number(capacitySelect.value)) >= 0;
pristine.addValidator(roomSelect, validateRoom, 'Нужно больше комнат');
pristine.addValidator(capacitySelect, validateCapacity, 'Нужно больше комнат');

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

const onFormSubmit = (evt) => evt.preventDefault;
const onTypeChange = (evt) => getTypePrice(evt);
const onTimeChange = syncTime;

fieldsetTime.addEventListener('change', onTimeChange);
typeSelect.addEventListener('change', onTypeChange);

form.addEventListener('submit', onFormSubmit);

