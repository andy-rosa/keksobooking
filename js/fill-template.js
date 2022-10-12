import { similarAds } from './data.js';
import { SIMILAR_AD_COUNT, TYPES } from './util.js';

const similarAdsList = similarAds(SIMILAR_AD_COUNT);

const mapAdList = document.querySelector('#map-canvas');

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');


similarAdsList.forEach(({ author, offer }) => {
  const adElement = cardTemplate.cloneNode(true);

  const listFeatures = adElement.querySelectorAll('.popup__feature');

  if (offer.title) {
    adElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    adElement.querySelector('.popup__title').style.display = 'none';
  }

  if (offer.address) {
    adElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    adElement.querySelector('.popup__text--address').style.display = 'none';
  }

  if (offer.price) {
    adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    adElement.querySelector('.popup__text--price').style.display = 'none';
  }

  if (offer.type.length) {
    adElement.querySelector('.popup__type').textContent = `${TYPES[offer.type]}`;
  } else {
    adElement.querySelector('.popup__type').style.display = 'none';
  }

  if (offer.rooms && offer.guests) {
    adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms >= 5 ? `${offer.rooms} комнат` : `${offer.rooms} комнаты`} для ${offer.guests === 1 ? `${offer.guests} гостя` : `${offer.guests} гостей`}`;
  } else if (offer.rooms && !offer.guests) {
    adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms >= 5 ? `${offer.rooms} комнат` : `${offer.rooms} комнаты`}`;
  } else if (!offer.rooms && offer.guests) {
    adElement.querySelector('.popup__text--capacity').textContent = `Для ${offer.guests === 1 ? `${offer.guests} гостя` : `${offer.guests} гостей`}`;
  } else {
    adElement.querySelector('.popup__text--capacity').style.display = 'none';
  }

  if (offer.checkin && offer.checkout) {
    adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else if (offer.checkin && !offer.checkout) {
    adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}`;
  } else if (!offer.checkin && offer.checkout) {
    adElement.querySelector('.popup__text--time').textContent = `Выезд до ${offer.checkout}`;
  } else {
    adElement.querySelector('.popup__text--time').style.display = 'none';
  }

  if (offer.description) {
    adElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    adElement.querySelector('.popup__description').style.display = 'none';
  }

  if (offer.photos.length && Array.isArray(offer.photos)) {
    offer.photos.forEach((photo, index, array) => {
      const image = adElement.querySelector('.popup__photo').cloneNode(true);
      image.src = photo;
      adElement.querySelector('.popup__photos').append(image);
      if (index === array.length - 1) {
        adElement.querySelector('.popup__photos').removeChild(adElement.querySelectorAll('.popup__photo')[0]);
      }
    });
  } else {
    adElement.querySelector('.popup__description').style.display = 'none';
  }

  if (author.avatar) {
    adElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    adElement.querySelector('.popup__avatar').style.display = 'none';
  }

  if (offer.features.length && Array.isArray(offer.features)) {
    listFeatures.forEach((feature) => {
      const isFeature = offer.features.some((adFeature) => feature.classList.contains(`popup__feature--${adFeature}`));

      if (!isFeature) {
        feature.remove();
      }
    });
  } else {
    adElement.querySelector('popup__features').style.display = 'none';
  }

  mapAdList.append(adElement);
});
