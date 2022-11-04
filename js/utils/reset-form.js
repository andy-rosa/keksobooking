import { map } from '../map/init-map.js';
import { setStartPosition, START_COORDINATES, mainPinMarker } from '../map/main-pin.js';
import { typeMinPrice } from '../utils.js';

const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const priceInput = form.querySelector('#price');

const resetForm = () => {
  filter.reset();
  form.reset();
  map.closePopup();
  priceInput.setAttribute('placeholder', typeMinPrice['bungalow'] );
  setStartPosition(START_COORDINATES);
  mainPinMarker.setLatLng(START_COORDINATES);
};

export { resetForm };
