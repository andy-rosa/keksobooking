import { form } from './form.js';

const fieldsetTime = form.querySelector('.ad-form__element--time');
const timeInSelect = form.querySelector('#timein');
const timeOutSelect = form.querySelector('#timeout');

const syncTime = (evt) => {
  if (evt.target.matches('#timein')) {
    timeOutSelect.value = evt.target.value;
  } else if (evt.target.matches('#timeout')) {
    timeInSelect.value = evt.target.value;
  }
};

const onTimeChange = syncTime;

export { onTimeChange, fieldsetTime };
