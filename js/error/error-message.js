export const createErrorMessage = (message) => {
  const messageError = document.createElement('div');

  messageError.style.position = 'absolute';
  messageError.style.bottom = '0';
  messageError.style.right = '0';

  messageError.style.display = 'block';
  messageError.style.width = '100%';
  messageError.style.padding = '10px 0';

  messageError.style.color = '#ffffff';
  messageError.style.fontSize = '18px';
  messageError.style.textAlign = 'center';

  messageError.style.backgroundColor = 'red';
  messageError.style.zIndex = '1000';

  messageError.textContent = message;

  return messageError;
};
