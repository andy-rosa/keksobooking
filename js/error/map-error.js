import { createErrorMessage } from './error-message.js';

const mapContainer = document.querySelector('#map-canvas');

const createErrorMapMessage = createErrorMessage(
  'Не удалость загрузить данные с сервера. Перезагрузите страницу'
);

const showErrorMapMessage = () => mapContainer.append(createErrorMapMessage);


export { showErrorMapMessage };
