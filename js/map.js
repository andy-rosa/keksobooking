import { activateForm } from './toggle-state-page.js';
import { SIMILAR_AD_COUNT } from './util.js';
import { similarAds } from './data.js';
import { fillTemplate } from './fill-data/fill-template.js';

const similarAdsList = similarAds(SIMILAR_AD_COUNT);

const dataAd = fillTemplate(similarAdsList);

const form = document.querySelector('.ad-form');
const addressInput = form.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
const tokioCoordinates = {
  lat: 35.65283,
  lng: 139.83947,
};

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView(tokioCoordinates, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [44, 44],
  iconAnchor: [22, 44],
});

const mainPinMarker = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  addressInput.value = Object.entries(evt.target.getLatLng())
    .map((locationItem) => `${locationItem[0]}:${Number(locationItem[1]).toFixed(5)}`)
    .join(', ');
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(tokioCoordinates);
  map.setView(tokioCoordinates, 10);
});
