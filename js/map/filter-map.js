import { createMarker } from './create-ad-marker.js';

const typeFilter = document.querySelector('#housing-type');
const priceFilter = document.querySelector('#housing-price');
const roomFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');
const fieldsetFeatures = document.querySelector('#housing-features');
const checksInput = fieldsetFeatures.querySelectorAll('input');

const MAX_QUANTITY_ADS = 10;

const filterType = (ad) => {
  const { type } = ad.offer;
  if (typeFilter.value === 'any') {
    return true;
  }
  return type.includes(typeFilter.value);
};

const filterPrice = (ad) => {
  const { price } = ad.offer;
  if (priceFilter.value === 'any') {
    return true;
  } else if (priceFilter.value === 'low') {
    return price < 10000;
  } else if (priceFilter.value === 'middle') {
    return price >= 10000 && price < 50000;
  } else if (priceFilter.value === 'high') {
    return price >= 50000;
  }
};

const filterRooms = (ad) => {
  const { rooms } = ad.offer;
  if (roomFilter.value === 'any') {
    return true;
  }
  return rooms === Number(roomFilter.value);
};

const filterGuests = (ad) => {
  const { guests } = ad.offer;
  if (guestsFilter.value === 'any') {
    return true;
  }
  return guests === Number(guestsFilter.value);
};

const getListFeatures = () => {
  const features = [];
  for (const check of checksInput) {
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
