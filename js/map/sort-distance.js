const EARTH_RADIUS = 6371;
const addressInput = document.querySelector('#address');

const LAT = 0;
const LNG = 1;


const convertDegreeToRadian = (deg) => deg * (Math.PI / 180);

const getDistanceFromLatLonInKm = (ad) => {
  const { lat, lng } = ad.location;
  const coordinate = addressInput.value.split(' ');
  const markerLat = parseFloat(coordinate[LAT]);
  const markerLng = parseFloat(coordinate[LNG]);
  const dLat = convertDegreeToRadian(markerLat - lat);
  const dLon = convertDegreeToRadian(markerLng - lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(convertDegreeToRadian(lat)) * Math.cos(convertDegreeToRadian(markerLat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * EARTH_RADIUS;
  ad.distance = c;
};

export { getDistanceFromLatLonInKm };

