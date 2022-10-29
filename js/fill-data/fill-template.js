import { typeTranslateRus } from '../utils.js';
import { getPopupValueTextContent, getPopupValueDoubleKey, getPhotoSrc, fillListData } from './fill-functions.js';

const TEXT_FOR_ONLY_ROOM = 1;
const TEXT_FOR_MORE_FIVE_ROOM = 5;
const TEXT_FOR_ONLY_GUEST = 1;

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');

const fillTemplate = ({ author, offer }) => {
  const adElement = cardTemplate.cloneNode(true);
  const listFeatures = adElement.querySelectorAll('.popup__feature');

  const offerRoomText = offer.rooms === TEXT_FOR_ONLY_ROOM ?
    `${offer.rooms} комната` :
    `${offer.rooms >= TEXT_FOR_MORE_FIVE_ROOM ?
      `${offer.rooms} комнат` :
      `${offer.rooms} комнаты`}`;
  const offerGuestsText = `для ${offer.guests === TEXT_FOR_ONLY_GUEST ?
    `${offer.guests} гостя` :
    `${offer.guests} гостей`}`;

  const offerCheckInText = `Заезд после ${offer.checkin}`;
  const offerCheckOutText = `${offer.checkin ?
    `, выезд до ${offer.checkout}` :
    `Выезд до ${offer.checkout}`}`;

  const priceNightText = '₽/ночь';

  const translationType = `${typeTranslateRus[offer.type]}`;

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

  return adElement;
};

export { fillTemplate };
