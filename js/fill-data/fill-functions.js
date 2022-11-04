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
  if (classValue) {
    element.querySelector(`.popup__${className}`)
      .textContent = `${classValueText} ${String(other)}`;

  } else {
    element.querySelector(`.popup__${className}`)
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
  if (classValueFirst && classValueSecond) {
    element.querySelector(`.popup__${className}`)
      .textContent = `${firstTextValue} ${secondTextValue}`;

  } else if (classValueFirst && !classValueSecond) {
    element.querySelector(`.popup__${className}`)
      .textContent = `${firstTextValue}`;

  } else if (!classValueFirst && classValueSecond) {
    element.querySelector(`.popup__${className}`)
      .textContent = `${secondTextValue}`;

  } else {
    element.querySelector(`.popup__${className}`)
      .style
      .display = 'none';
  }
};

const getPhotoSrc = (classValue, element) => {
  if (classValue) {
    element.querySelector('.popup__avatar')
      .src = classValue;
  } else {
    element.querySelector('.popup__avatar')
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
