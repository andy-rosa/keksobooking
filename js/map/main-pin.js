const form = document.querySelector('.ad-form');
const addressInput = form.querySelector('#address');

const MAIN_WIDTH_MARKER = 44;
const MAIN_HEIGHT_MARKER = 44;

const LOCATION_FLOAT_POINT = 5;

const tokioCoordinates = {
  lat: 35.65283,
  lng: 139.83947,
};

const mainPinIcon = L.icon({
  iconUrl: '../../img/main-pin.svg',
  iconSize: [MAIN_WIDTH_MARKER, MAIN_HEIGHT_MARKER],
  iconAnchor: [MAIN_WIDTH_MARKER / 2, MAIN_HEIGHT_MARKER],
});

const mainPinMarker = L.marker(
  tokioCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.on('moveend', (evt) => {
  const NAME = 0;
  const VALUE = 1;

  addressInput.value = Object.entries(evt.target.getLatLng())
    .map((locationItem) => `${locationItem[NAME]}:${Number(locationItem[VALUE]).toFixed(LOCATION_FLOAT_POINT)}`)
    .join(', ');
});


export { mainPinMarker, tokioCoordinates };
