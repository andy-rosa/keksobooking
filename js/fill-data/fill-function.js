const getPopupValueTextContent = (className, classValue, element, other = '', classValueText = classValue) => {
  if (classValue) {
    element.querySelector(`.popup__${className}`).textContent = `${classValueText} ${String(other)}`;
  } else {
    element.querySelector(`.popup__${className}`).style.display = 'none';
  }
};
const getPopupValueDoubleKey = (className, classValueFirst, classValueSecond, element, firstTextValue, secondTextValue) => {
  if (classValueFirst && classValueSecond) {
    element.querySelector(`.popup__${className}`).textContent = `${firstTextValue} ${secondTextValue}`;
  } else if (classValueFirst && !classValueSecond) {
    element.querySelector(`.popup__${className}`).textContent = `${firstTextValue}`;
  } else if (!classValueFirst && classValueSecond) {
    element.querySelector(`.popup__${className}`).textContent = `${secondTextValue}`;
  } else {
    element.querySelector(`.popup__${className}`).style.display = 'none';
  }
};

const getPhotoSrc = (classValue, element) => {
  if (classValue) {
    element.querySelector('.popup__avatar').src = classValue;
  } else {
    element.querySelector('.popup__avatar').style.display = 'none';
  }
};

const fillListData = (arrayName, collectionAction, element, className, callback) => {
  if (arrayName.length && Array.isArray(arrayName)) {
    collectionAction.forEach(callback);
  } else {
    element.querySelector(`.popup__${className}`).style.display = 'none';
  }
};

export { getPopupValueTextContent, getPopupValueDoubleKey, getPhotoSrc, fillListData };
