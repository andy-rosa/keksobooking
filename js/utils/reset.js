import { avatarPreview, housePhotoPreview } from '../form-photo.js';
import { map, NORMAL_ZOOM } from '../map/init-map.js';
import { setStartPosition, START_COORDINATES, mainPinMarker } from '../map/main-pin.js';
import { typeMinPrice } from '../utils.js';

const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const priceInput = form.querySelector('#price');
const resetButton = document.querySelector('.ad-form__reset');


const resetForms = () => {
  filter.reset();
  form.reset();
  avatarPreview.src = 'img/muffin-grey.svg';
  housePhotoPreview.innerHTML = '';

  priceInput.setAttribute('placeholder', typeMinPrice['bungalow'] );
  setStartPosition(START_COORDINATES);

  map.closePopup();
  map.setView(START_COORDINATES, NORMAL_ZOOM);
  mainPinMarker.setLatLng(START_COORDINATES);
};

const setResetButtonClick = (cb, callbackArgument) => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForms();
    cb(callbackArgument);
  });
};

export { resetForms, setResetButtonClick };
