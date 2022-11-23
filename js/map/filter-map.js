import { checkContentBetweenArray, debounce } from '../utils.js';
import { createMarker, markerGroup } from './create-ad-marker.js';

const MAX_QUANTITY_ADS = 10;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const WITHOUT_FEATURES = 0;

const DEFAULT_NO_FILTER = 'any';

const formFilter = document.querySelector('.map__filters');
const typeFilter = formFilter.querySelector('#housing-type');
const priceFilter = formFilter.querySelector('#housing-price');
const roomFilter = formFilter.querySelector('#housing-rooms');
const guestsFilter = formFilter.querySelector('#housing-guests');
const fieldsetFeatures = formFilter.querySelector('#housing-features');
const checksInputs = fieldsetFeatures.querySelectorAll('input');


const filterType = (ad) => {
  const { type } = ad.offer;
  if (typeFilter.value === DEFAULT_NO_FILTER) {
    return true;
  }
  return type.includes(typeFilter.value);
};

const filterPrice = (ad) => {
  const { price } = ad.offer;
  switch (priceFilter.value) {
    case DEFAULT_NO_FILTER:
      return true;
    case 'low':
      return price < LOW_PRICE;
    case 'middle':
      return price >= LOW_PRICE && price < HIGH_PRICE;
    case 'high':
      return price >= HIGH_PRICE;
  }
};

const filterRooms = (ad) => {
  const { rooms } = ad.offer;
  if (roomFilter.value === DEFAULT_NO_FILTER) {
    return true;
  }
  return rooms === Number(roomFilter.value);
};

const filterGuests = (ad) => {
  const { guests } = ad.offer;
  if (guestsFilter.value === DEFAULT_NO_FILTER) {
    return true;
  }
  return guests === Number(guestsFilter.value);
};

const getListFeatures = () => {
  const features = [];
  checksInputs.forEach((check) => {
    if (check.checked) {
      features.push(check.value);
    }
  });

  return features;
};

const filterFeatures = (ad) => {
  const { features } = ad.offer;
  const featuresValue = getListFeatures();
  if (featuresValue.length === WITHOUT_FEATURES) {
    return true;
  }
  if (Array.isArray(features)) {
    return checkContentBetweenArray(features, featuresValue);
  }
};

const filterAds = (ads) => {
  markerGroup.clearLayers();
  createMarker(ads
    .filter(filterType)
    .filter(filterPrice)
    .filter(filterRooms)
    .filter(filterGuests)
    .filter(filterFeatures)
    .slice(0, MAX_QUANTITY_ADS)
  );
};

const optimizationFilter = debounce(filterAds);

const setMapFilterChange = (ads) => {
  markerGroup.clearLayers();
  createMarker(ads.slice(0, MAX_QUANTITY_ADS));
  formFilter.addEventListener('change', () => optimizationFilter(ads));
};

export { optimizationFilter, setMapFilterChange };
