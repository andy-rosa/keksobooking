import { createMarker, markerGroup } from './create-ad-marker.js';


const MAX_QUANTITY_ADS = 10;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const DEFAULT_NO_FILTER = 'any';

const typeFilter = document.querySelector('#housing-type');
const priceFilter = document.querySelector('#housing-price');
const roomFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');
const fieldsetFeatures = document.querySelector('#housing-features');
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
  if (priceFilter.value === DEFAULT_NO_FILTER) {
    return true;
  } else if (priceFilter.value === 'low') {
    return price < LOW_PRICE;
  } else if (priceFilter.value === 'middle') {
    return price >= LOW_PRICE && price < HIGH_PRICE;
  } else if (priceFilter.value === 'high') {
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
  for (const check of checksInputs) {
    if (check.checked) {
      features.push(check.value);
    }
  }
  return features;
};


const filterFeatures = (ad) => {
  const { features } = ad.offer;
  const featuresValue = getListFeatures();
  if (featuresValue.length === 0) {
    return true;
  }
  if (Array.isArray(features)) {
    return features.join().includes(featuresValue.join());
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

export { filterAds, MAX_QUANTITY_ADS };
