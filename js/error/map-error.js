import { createErrorMessage } from './error-message.js';

const mapContainer = document.querySelector('#map-canvas');

const createErrorMapMessage = createErrorMessage(
  'Не удалость загрузить данные с сервера. Перезагрузите страницу'
);

const showErrorMapMessage = () => {
  const message = createErrorMapMessage;
  mapContainer.append(message);
};

export { showErrorMapMessage };
