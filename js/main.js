import './toggle-state-page.js';
import './slider.js';
import './form-photo.js';
import { getDataServer } from './api/api.js';
import { optimizationFilter, setMapFilterChange } from './map/filter-map.js';
import { setResetButtonClick } from './utils/reset.js';
import { setAdFormSubmit } from './validation/validation.js';
import { getDistanceFromLatLonInKm } from './map/sort-distance.js';
import { mainPinMarker } from './map/main-pin.js';

getDataServer ((ads) => {
  ads.forEach(getDistanceFromLatLonInKm);
  ads.sort((a, b) => a.distance - b.distance);
  setMapFilterChange(ads);
  setResetButtonClick(optimizationFilter, ads);
  setAdFormSubmit(optimizationFilter, ads);
  mainPinMarker.on('moveend', () => {
    ads.forEach(getDistanceFromLatLonInKm);
    ads.sort((a, b) => a.distance - b.distance);
    setMapFilterChange(ads);
    setResetButtonClick(optimizationFilter, ads);
    setAdFormSubmit(optimizationFilter, ads);
  });
});
