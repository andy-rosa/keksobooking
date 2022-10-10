import { similarAds} from './data.js';

const SIMILAR_AD_COUNT = 10;

const TYPES = {
  bungalow: 'Бунгало',
  flat:'Квартира',
  hotel:'Отель',
  house:'Дом',
  palace:'Дворец'
};

const similarAdsList = similarAds(SIMILAR_AD_COUNT);

const mapAdList = document.querySelector('#map-canvas');

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');

similarAdsList.forEach(({author, offer}) => {
  const adElement = cardTemplate.cloneNode(true);
  const listFeatures = adElement.querySelectorAll('.popup__feature');

  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = `${TYPES[offer.type]}`;
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms >= 5 ? `${offer.rooms} комнат` : `${offer.rooms} комнаты`} для ${offer.guests === 1 ? `${offer.guests} гостя` : `${offer.guests} гостей`}`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = offer.description;
  offer.photos.forEach((photo, index, array) => {
    const image = adElement.querySelector('.popup__photo').cloneNode(true);
    image.src = photo;
    adElement.querySelector('.popup__photos').append(image);
    if (index === array.length - 1) {
      adElement.querySelector('.popup__photos').removeChild(adElement.querySelectorAll('.popup__photo')[0]);
    }
  });
  adElement.querySelector('.popup__avatar').src = author.avatar;

  listFeatures.forEach((feature) => {
    const isFeature = offer.features.some((adFeature) => feature.classList.contains(`popup__feature--${adFeature}`));

    if(!isFeature) {
      feature.remove();
    }
  });


  mapAdList.append(adElement);
});

// В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
// Квартира для flat
// Бунгало для bungalow
// Дом для house
// Дворец для palace
// Отель для hotel

