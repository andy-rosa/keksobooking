const form = document.querySelector('.ad-form');
const priceInput = form.querySelector('#price');
const typeSelect = form.querySelector('#type');
const roomSelect = form.querySelector('#room_number');
const capacitySelect = form.querySelector('#capacity');
const personNumber = capacitySelect.querySelector('option:checked');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

const validateRoom = (room) => room.value >= capacitySelect.value;
pristine.addValidator(roomSelect, validateRoom, `Нужно больше комнат ${personNumber.textContent}`);

const typeMinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const getTypePrice = () => {
  const { bungalow, flat, hotel, house, palace } = typeMinPrice;
  switch (typeSelect.value) {
    case 'bungalow':
      priceInput.setAttribute('min', bungalow);
      priceInput.setAttribute('placeholder', bungalow);
      break;
    case 'flat':
      priceInput.setAttribute('min', flat);
      priceInput.setAttribute('placeholder', flat);
      break;
    case 'hotel':
      priceInput.setAttribute('min', hotel);
      priceInput.setAttribute('placeholder', hotel);
      break;
    case 'house':
      priceInput.setAttribute('min', house);
      priceInput.setAttribute('placeholder', house);
      break;
    case 'palace':
      priceInput.setAttribute('min', palace);
      priceInput.setAttribute('placeholder', palace);
      break;
  }
};

document.addEventListener('DOMContentLoaded', getTypePrice, { 'once': true });

typeSelect.addEventListener('change', getTypePrice);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

