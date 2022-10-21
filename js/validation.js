
const form = document.querySelector('.ad-form');
const priceInput = form.querySelector('#price');
const typeSelect = form.querySelector('#type');
const roomSelect = form.querySelector('#room_number');
const capacitySelect = form.querySelector('#capacity');
const personNumber = capacitySelect.querySelector('option:checked');
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

const validateRoom = () => roomSelect.value >= capacitySelect.value;
pristine.addValidator(roomSelect, validateRoom, `Нужно больше комнат ${personNumber.textContent}`);

const setMinPrice = (typeHouse) => {
  priceInput.setAttribute('min', typeHouse);
  priceInput.setAttribute('placeholder', typeHouse);
};

const getTypePrice = () => {
  const { bungalow: bungalowPrice, flat: flatPrice, hotel: hotelPrice, house: housePrice, palace: palacePrice } = typeMinPrice;
  switch (typeSelect.value) {
    case 'bungalow':
      setMinPrice(bungalowPrice);
      break;
    case 'flat':
      setMinPrice(flatPrice);
      break;
    case 'hotel':
      setMinPrice(hotelPrice);
      break;
    case 'house':
      setMinPrice(housePrice);
      break;
    case 'palace':
      setMinPrice(palacePrice);
      break;
  }
};

fieldsetTime.addEventListener('change', (evt) => {
  if (evt.target.matches('#timein')) {
    timeOutSelect.value = evt.target.value;
  } else if (evt.target.matches('#timeout')) {
    timeInSelect.value = evt.target.value;
  }
});

document.addEventListener('DOMContentLoaded', getTypePrice, { 'once': true });

typeSelect.addEventListener('change', getTypePrice);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

