import { setStartPosition, tokioCoordinates, mainPinMarker } from '../map/main-pin.js';

const resetForm = () => {
  const form = document.querySelector('.ad-form');
  form.reset();
  setStartPosition(tokioCoordinates);
  mainPinMarker.setLatLng(tokioCoordinates);
};

export { resetForm };
