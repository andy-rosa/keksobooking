import './toggle-state-page.js';
import './slider.js';
import './form-photo.js';
import { getDataServer } from './api/api.js';
import { optimizationFilter, setMapFilterChange } from './map/filter-map.js';
import { setResetButtonClick } from './utils/reset.js';
import { setAdFormSubmit } from './validation/validation.js';

getDataServer ((ads) => {
  setMapFilterChange(ads);
  setResetButtonClick(optimizationFilter, ads);
  setAdFormSubmit(optimizationFilter, ads);
});
