import { fillTemplate } from '../fill-data/fill-template.js';

const AD_WIDTH_MARKER = 40;
const AD_HEIGHT_MARKER = 40;

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

export { createMarker };
