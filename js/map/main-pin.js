const MAIN_WIDTH_MARKER = 52;
const MAIN_HEIGHT_MARKER = 52;

const LOCATION_FLOAT_POINT = 5;

const START_COORDINATES = {
  lat: 35.65283,
  lng: 139.83947,
};

const form = document.querySelector('.ad-form');
const addressInput = form.querySelector('#address');


const setStartPosition = (startPosition) => {
  addressInput.value = Object.values(startPosition)
    .map((locationCoordinate) => `${Number(locationCoordinate).toFixed(LOCATION_FLOAT_POINT)}`)
    .join(', ');
};

const getLocationAddress = (evt) => {
  addressInput.value = Object.values(evt.target.getLatLng())
    .map((locationCoordinate) => `${Number(locationCoordinate).toFixed(LOCATION_FLOAT_POINT)}`)
    .join(', ');
};

const mainPinIcon = L.icon({
  iconUrl: '../../img/main-pin.svg',
  iconSize: [MAIN_WIDTH_MARKER, MAIN_HEIGHT_MARKER],
  iconAnchor: [MAIN_WIDTH_MARKER / 2, MAIN_HEIGHT_MARKER],
});

const mainPinMarker = L.marker(
  START_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

setStartPosition(START_COORDINATES);
mainPinMarker.on('moveend', getLocationAddress);

export { mainPinMarker, START_COORDINATES, setStartPosition };
