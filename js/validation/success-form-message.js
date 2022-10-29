import { isClick, isEscapeKey } from '../utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);

  const onSuccessKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successMessage.remove();
      document.removeEventListener('keydown', onSuccessKeydown);
    }
  };

  const onSuccessClick = (evt) => {
    if (isClick(evt)) {
      successMessage.remove();
      document.removeEventListener('click', onSuccessClick);
    }
  };


  document.addEventListener('keydown', onSuccessKeydown);
  document.addEventListener('click', onSuccessClick);
};

export { showSuccessMessage };
