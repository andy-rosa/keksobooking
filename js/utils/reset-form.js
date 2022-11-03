import { setStartPosition, START_COORDINATES, mainPinMarker } from '../map/main-pin.js';

const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');


const resetForm = () => {
  filter.reset();
  form.reset();
  setStartPosition(START_COORDINATES);
  mainPinMarker.setLatLng(START_COORDINATES);
};

export { resetForm };
