import { setStartPosition, tokioCoordinates, mainPinMarker } from '../map/main-pin.js';

const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');


const resetForm = () => {
  filter.reset();
  form.reset();
  setStartPosition(tokioCoordinates);
  mainPinMarker.setLatLng(tokioCoordinates);
};

export { resetForm };
