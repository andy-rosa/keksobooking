const TEXT_FOR_ONLY_ROOM = 1;
const TEXT_FOR_MORE_FIVE_ROOM = 5;

const getCorrectRoomEnding = (roomQuantity) => {
  switch (true) {
    case roomQuantity === TEXT_FOR_ONLY_ROOM:
      return `${roomQuantity} комната`;
    case roomQuantity >= TEXT_FOR_MORE_FIVE_ROOM:
      return `${roomQuantity} комнат`;
    default:
      return `${roomQuantity} комнаты`;
  }
};

const getPopupValueTextContent = (
  className,
  classValue,
  element,
  other = '',
  classValueText = classValue
) => {
  const textContainer = element.querySelector(`.popup__${className}`);
  if (classValue) {
    textContainer
      .textContent = `${classValueText} ${other}`;

  } else {
    textContainer
      .style
      .display = 'none';
  }
};

const getPopupValueDoubleKey = (
  className,
  classValueFirst,
  classValueSecond,
  element,
  firstTextValue,
  secondTextValue
) => {
  const textContainer = element.querySelector(`.popup__${className}`);
  if (classValueFirst && classValueSecond) {
    textContainer
      .textContent = `${firstTextValue} ${secondTextValue}`;

  } else if (classValueFirst && !classValueSecond) {
    textContainer
      .textContent = `${firstTextValue}`;

  } else if (!classValueFirst && classValueSecond) {
    textContainer
      .textContent = `${secondTextValue}`;

  } else {
    textContainer
      .style
      .display = 'none';
  }
};

const getPhotoSrc = (classValue, element) => {
  const avatar = element.querySelector('.popup__avatar');
  if (classValue) {
    avatar
      .src = classValue;

  } else {
    avatar
      .style
      .display = 'none';
  }
};

const fillListData = (
  arrayName,
  collectionAction,
  element,
  className,
  cb
) => {
  if (Array.isArray(arrayName)) {
    if (arrayName.length) {
      collectionAction.forEach(cb);
    }

  } else {
    element.querySelector(`.popup__${className}`)
      .style
      .display = 'none';
  }
};


export { getCorrectRoomEnding, getPopupValueTextContent, getPopupValueDoubleKey, getPhotoSrc, fillListData };
