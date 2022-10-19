import { similarAds } from '../data.js';
import { SIMILAR_AD_COUNT, TYPES } from '../util.js';
import { getPopupValueTextContent, getPopupValueDoubleKey, getPhotoSrc, fillListData } from './fill-functions.js';

const similarAdsList = similarAds(SIMILAR_AD_COUNT);

const mapAdList = document.querySelector('#map-canvas');

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');

const fillTemplate = () => {
  const adListFragment = document.createDocumentFragment();

  similarAdsList.forEach(({ author, offer }) => {
    const adElement = cardTemplate.cloneNode(true);
    const listFeatures = adElement.querySelectorAll('.popup__feature');

    const textForOnlyRoom = 1;
    const textForMoreFiveRoom = 5;
    const textForOnlyGuest = 1;

    const offerRoomText = offer.rooms === textForOnlyRoom ?
      `${offer.rooms} комната` :
      `${offer.rooms >= textForMoreFiveRoom ?
        `${offer.rooms} комнат` :
        `${offer.rooms} комнаты`}`;
    const offerGuestsText = `для ${offer.guests === textForOnlyGuest ?
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

    adListFragment.append(adElement);
  });

  return mapAdList.append(adListFragment);
};

export { fillTemplate };
