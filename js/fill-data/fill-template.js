import { similarAds } from '../data.js';
import { SIMILAR_AD_COUNT, TYPES } from '../util.js';
import { getPopupValueTextContent, getPopupValueDoubleKey, getPhotoSrc, fillListData } from './fill-function';

const similarAdsList = similarAds(SIMILAR_AD_COUNT);

const mapAdList = document.querySelector('#map-canvas');

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');

similarAdsList.forEach(({ author, offer }) => {
  const adElement = cardTemplate.cloneNode(true);
  const listFeatures = adElement.querySelectorAll('.popup__feature');

  const offerRoomText = offer.rooms === 1 ?
    `${offer.rooms} комната` :
    `${offer.rooms >= 5 ?
      `${offer.rooms} комнат` :
      `${offer.rooms} комнаты`}`;
  const offerGuestsText = `для ${offer.guests === 1 ?
    `${offer.guests} гостя` :
    `${offer.guests} гостей`}`;

  const offerCheckInText = `Заезд после ${offer.checkin}`;
  const offerCheckOutText = `${offer.checkin ?
    `, выезд до ${offer.checkout}` :
    `Выезд до ${offer.checkout}`}`;

  const priceNightText = '₽/ночь';

  const translationType = `${TYPES[offer.type]}`;

  const getListFeatures = (feature) => {
    const isFeature = offer.features.some((adFeature) => feature.classList.contains(`popup__feature--${adFeature}`));

    if (!isFeature) {
      feature.remove();
    }
  };
  const getListPhoto = (photo, index, array) => {
    const image = adElement.querySelector('.popup__photo').cloneNode(true);
    image.src = photo;
    adElement.querySelector('.popup__photos').append(image);
    if (index === array.length - 1) {
      adElement.querySelector('.popup__photos').removeChild(adElement.querySelectorAll('.popup__photo')[0]);
    }
  };


  getPopupValueTextContent('title', offer.title, adElement);
  getPopupValueTextContent('text--address', offer.address, adElement);
  getPopupValueTextContent('text--price', offer.price, adElement, priceNightText);
  getPopupValueTextContent('type', offer.type, adElement, '', translationType);
  getPopupValueTextContent('description', offer.description, adElement);

  getPopupValueDoubleKey('text--capacity', offer.rooms, offer.guests, adElement, offerRoomText, offerGuestsText);
  getPopupValueDoubleKey('text--time', offer.checkin, offer.checkout, adElement, offerCheckInText, offerCheckOutText);

  getPhotoSrc(author.avatar, adElement);

  fillListData(offer.features, listFeatures, adElement, 'features', getListFeatures);
  fillListData(offer.photos, offer.photos, adElement, 'photos', getListPhoto);

  mapAdList.append(adElement);
});
