import { form } from './validation/form.js';

const FILES_TYPES = ['jpg', 'jpeg', 'png'];

const CHOSEN_FILE = 0;

const IMAGE_WIDTH = '70px';
const IMAGE_HEIGHT = '70px';

const avatarChooser = form.querySelector('.ad-form__field input[type=file]');
const avatarPreview = form.querySelector('.ad-form-header__preview img');
const housePhotoChooser = form.querySelector('.ad-form__upload input[type=file]');
const housePhotoPreview = form.querySelector('.ad-form__photo');

form.addEventListener('change', (evt) => {
  if (evt.target.matches('#avatar')) {
    const file = avatarChooser.files[CHOSEN_FILE];
    const fileName = file.name.toLowerCase();

    const matches = FILES_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      avatarPreview.src = URL.createObjectURL(file);
    }
  }

  if (evt.target.matches('#images')) {
    const file = housePhotoChooser.files[CHOSEN_FILE];
    const fileName = file.name.toLowerCase();

    const matches = FILES_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      housePhotoPreview.innerHTML = '';

      const image = document.createElement('img');
      image.style.width = IMAGE_WIDTH;
      image.style.height = IMAGE_HEIGHT;
      image.style.alt = 'Фотография жилья';
      image.src = URL.createObjectURL(file);

      housePhotoPreview.append(image);
    }
  }
});
