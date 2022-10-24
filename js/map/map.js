import { activateForm } from '../toggle-state-page.js';
import { mainPinMarker, tokioCoordinates } from './main-pin.js';
import { similarAdsList, createMarker } from './create-ad-marker.js';


const resetButton = document.querySelector('.ad-form__reset');

const NORMAL_ZOOM = 10;


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

similarAdsList.forEach((ad) => {
  createMarker(ad, markerGroup);
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(tokioCoordinates);
  map.setView(tokioCoordinates, NORMAL_ZOOM);
});
