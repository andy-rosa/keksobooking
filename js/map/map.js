import { mainPinMarker, START_COORDINATES } from './main-pin.js';
import { createMarker } from './create-ad-marker.js';
import { getDataServer } from '../api/api.js';
import { resetForm } from '../utils/reset-form.js';
import { map, NORMAL_ZOOM } from './init-map.js';
import { filterAds, MAX_QUANTITY_ADS } from './filter-map.js';
import { debounce } from '../utils.js';


const formFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

mainPinMarker.addTo(map);

const optimizationFilter = debounce(filterAds);

getDataServer((ads) => {
  createMarker(ads.slice(0, MAX_QUANTITY_ADS));
  formFilter.addEventListener('change', () => optimizationFilter(ads));
});


resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  map.setView(START_COORDINATES, NORMAL_ZOOM);
  resetForm();
});

