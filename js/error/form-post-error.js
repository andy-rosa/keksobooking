import { isEscapeKey } from '../utils.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showErrorFormMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');

  document.body.append(errorMessage);

  const onErrorKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessage.remove();
      document.removeEventListener('keydown', onErrorKeydown);
    }
  };

  const onErrorClick = () => {
    errorMessage.remove();
  };


  document.addEventListener('keydown', onErrorKeydown);
  errorButton.addEventListener('click', onErrorClick);

};

export { showErrorFormMessage };

