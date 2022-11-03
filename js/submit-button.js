import { form } from './validation/form.js';

const submitButton = form.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправка данных...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

export { blockSubmitButton, unblockSubmitButton };
