import { mainPinMarker, tokioCoordinates } from './main-pin.js';
import { createMarker, markerGroup } from './create-ad-marker.js';
import { getDataServer } from '../api/api.js';
import { resetForm } from '../utils/reset-form.js';
import { map, NORMAL_ZOOM } from './init-map.js';


const resetButton = document.querySelector('.ad-form__reset');
const typeFilter = document.querySelector('#housing-type');
const priceFilter = document.querySelector('#housing-price');
const formFilter = document.querySelector('.map__filters');

const filterType = (ads) => {
  createMarker(ads.filter((ad) => {
    const { type } = ad.offer;
    if (typeFilter.value === 'any') {
      return true;
    }
    return type.includes(typeFilter.value);
  })
    .slice(0, 10)
  );
};

const filterPrice = (ads) => {
  createMarker(ads
    .filter((ad) => {
      const { type } = ad.offer;
      if (typeFilter.value === 'any') {
        return true;
      }
      return type.includes(typeFilter.value);
    })
    .slice(0, 10)
    .filter((ad) => {
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
    })
    .slice(0, 10)
  );
};

mainPinMarker.addTo(map);

getDataServer((ads) => {
  createMarker(ads);
  formFilter.addEventListener('change', () => {
    markerGroup.clearLayers();
    filterPrice(ads);
  });
});


resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  map.setView(tokioCoordinates, NORMAL_ZOOM);
  resetForm();
});

