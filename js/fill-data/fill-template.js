import { typeTranslateRus } from '../utils.js';
import { getCorrectRoomEnding, getPopupValueTextContent, getPopupValueDoubleKey, getPhotoSrc, fillListData } from './fill-functions.js';

const TEXT_FOR_ONLY_GUEST = 1;
const PRICE_NIGHT_TEXT = '₽/ночь';

const PHOTO_TEMPLATE = 0;

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');


const fillTemplate = ({ author, offer }) => {
  const {
    rooms,
    guests,
    checkin,
    checkout,
    features,
    title,
    address,
    price,
    description,
    photos,
    type
  } = offer;

  const { avatar } = author;

  const adElement = cardTemplate.cloneNode(true);
  const listFeatures = adElement.querySelectorAll('.popup__feature');

  const offerRoomText = getCorrectRoomEnding(rooms);

  const offerGuestsText = `для ${guests === TEXT_FOR_ONLY_GUEST ?
    `${guests} гостя` :
    `${guests} гостей`}`;

  const offerCheckInText = `Заезд после ${checkin}`;
  const offerCheckOutText = `${checkin ?
    `, выезд до ${checkout}` :
    `Выезд до ${checkout}`}`;

  const translationType = typeTranslateRus[type];

  const getListFeatures = (feature) => {
    const isFeature = features.some((adFeature) => feature.classList.contains(`popup__feature--${adFeature}`));

    if (!isFeature) {
      feature.remove();
    }
  };

  const getListPhoto = (photo, index, array) => {
    const image = adElement.querySelector('.popup__photo').cloneNode(true);
    const imageContainer = adElement.querySelector('.popup__photos');
    image.src = photo;
    imageContainer.append(image);

    if (index === array.length - 1) {
      imageContainer
        .removeChild(adElement.querySelectorAll('.popup__photo')[PHOTO_TEMPLATE]);
    }
  };


  getPopupValueTextContent('title', title, adElement);
  getPopupValueTextContent('text--address', address, adElement);
  getPopupValueTextContent('text--price', price, adElement, PRICE_NIGHT_TEXT);
  getPopupValueTextContent('type', type, adElement, '', translationType);
  getPopupValueTextContent('description', description, adElement);

  getPopupValueDoubleKey('text--capacity', rooms, guests, adElement, offerRoomText, offerGuestsText);
  getPopupValueDoubleKey('text--time', checkin, checkout, adElement, offerCheckInText, offerCheckOutText);

  getPhotoSrc(avatar, adElement);

  fillListData(features, listFeatures, adElement, 'features', getListFeatures);
  fillListData(photos, photos, adElement, 'photos', getListPhoto);

  return adElement;
};

export { fillTemplate };
