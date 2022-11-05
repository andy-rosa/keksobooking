import { showErrorMapMessage } from '../error/map-error.js';
import { showErrorFormMessage } from '../error/form-post-error.js';
import { activateFilter } from '../toggle-state-page.js';

const Url = {
  GET: 'https://27.javascript.pages.academy/keksobooking/data',
  POST: 'https://27.javascript.pages.academy/keksobooking'
};

const getDataServer = (onSuccess) => {
  fetch(Url.GET)
    .then(
      async (response) => {
        if (response.ok) {
          activateFilter();
          const ads = await response.json();
          return onSuccess(ads);
        }
        throw new Error('Данные не загрузились с сервера!');
      })
    .catch(() => {
      showErrorMapMessage();
    });
};

const sendFormData = (onSuccess, body) => {
  fetch(
    Url.POST,
    {
      method: 'POST',
      body
    }
  )
    .then(
      async (response) => {
        if (response.ok) {
          return onSuccess();
        }
        throw new Error('Данные не отправились на сервер!');
      })
    .catch(() => showErrorFormMessage());
};

export { getDataServer, sendFormData };
