import { activateForm } from '../toggle-state-page.js';
import { tokioCoordinates } from './main-pin.js';

const NORMAL_ZOOM = 10;

const initMap = (location, zoom) => L.map('map-canvas')
  .on('load', () => {
    activateForm ();
  })
  .setView(location, zoom);

const map = initMap (tokioCoordinates, NORMAL_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

export { map, NORMAL_ZOOM };
