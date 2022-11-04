import { form } from './form.js';
import { validateRoom, roomSelect } from './guest-rooms.js';
import { onTypeChange, priceInput, typeSelect, validatePrice } from './price-ad.js';
import { onTimeChange, fieldsetTime } from './check-time.js';
import { sendFormData } from '../api/api.js';
import { showSuccessMessage } from './success-form-message.js';
import { blockSubmitButton, unblockSubmitButton } from '../submit-button.js';

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});

pristine.addValidator(roomSelect, validateRoom, 'Не подходящее значение');
pristine.addValidator(priceInput, validatePrice, 'Цена меньше минимальной');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendFormData(() => {
      showSuccessMessage();
      unblockSubmitButton();
    },
    new FormData(evt.target)
    );
  }
});

fieldsetTime.addEventListener('change', onTimeChange);
typeSelect.addEventListener('change', onTypeChange);
