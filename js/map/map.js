import { activateForm } from '../toggle-state-page.js';
import { mainPinMarker, tokioCoordinates } from './main-pin.js';
import { createMarker } from './create-ad-marker.js';
import { getDataServer } from '../api/api.js';
import { resetForm } from '../utils/reset-form.js';

const NORMAL_ZOOM = 10;

const resetButton = document.querySelector('.ad-form__reset');


const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView(tokioCoordinates, NORMAL_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


mainPinMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

getDataServer(createMarker, markerGroup);

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  map.setView(tokioCoordinates, NORMAL_ZOOM);
  resetForm();
});

