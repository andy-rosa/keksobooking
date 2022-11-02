import { showErrorMapMessage } from '../error/map-error.js';
import { showErrorFormMessage } from '../error/form-post-error.js';
import { resetForm } from '../utils/reset-form.js';

const Url = {
  GET: 'https://27.javascript.pages.academy/keksobooking/data',
  POST: 'https://27.javascript.pages.academy/keksobooking'
};

const getAdsDataServer = (onSuccess) => {
  fetch(Url.GET)
    .then((response) => {
      if (response.ok) {
        return response.json()
          .then((ads) => onSuccess(ads));

      } else {
        showErrorMapMessage();
      }
    })
    .catch(() => showErrorMapMessage());
};

const sendFormData = (onSuccess, body) => {
  fetch(
    Url.POST,
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        resetForm();
      } else {
        showErrorFormMessage();
      }
    })
    .catch(() => showErrorFormMessage());
};

export { getAdsDataServer as getDataServer, sendFormData };
