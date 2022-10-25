import { fillTemplate } from '../fill-data/fill-template.js';
import { SIMILAR_AD_COUNT } from '../util.js';
import { similarAds } from '../data.js';

const similarAdsList = similarAds(SIMILAR_AD_COUNT);

const AD_WIDTH_MARKER = 36;
const AD_HEIGHT_MARKER = 36;


const icon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [AD_WIDTH_MARKER, AD_HEIGHT_MARKER],
  iconAnchor: [AD_WIDTH_MARKER / 2, AD_HEIGHT_MARKER],
});

const createMarker = (ad, layer) => {
  const { lat, lng } = ad.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: icon,
    });
  marker
    .addTo(layer)
    .bindPopup(fillTemplate(ad));
};

export { similarAdsList, createMarker };
