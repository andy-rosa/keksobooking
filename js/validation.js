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
  'bungalowPrice': 0,
  'flatPrice': 1000,
  'hotelPrice': 3000,
  'housePrice': 5000,
  'palacePrice': 10000,
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

const validateRoom = (room) => room.value >= capacitySelect.value;
pristine.addValidator(roomSelect, validateRoom, `Нужно больше комнат ${personNumber.textContent}`);

const getTypePrice = () => {
  const { bungalowPrice, flatPrice, hotelPrice, housePrice, palacePrice } = typeMinPrice;
  switch (typeSelect.value) {
    case 'bungalow':
      priceInput.setAttribute('min', bungalowPrice);
      priceInput.setAttribute('placeholder', bungalowPrice);
      break;
    case 'flat':
      priceInput.setAttribute('min', flatPrice);
      priceInput.setAttribute('placeholder', flatPrice);
      break;
    case 'hotel':
      priceInput.setAttribute('min', hotelPrice);
      priceInput.setAttribute('placeholder', hotelPrice);
      break;
    case 'house':
      priceInput.setAttribute('min', housePrice);
      priceInput.setAttribute('placeholder', housePrice);
      break;
    case 'palace':
      priceInput.setAttribute('min', palacePrice);
      priceInput.setAttribute('placeholder', palacePrice);
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

