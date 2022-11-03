import { form } from './validation/form.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = form.querySelector('.ad-form__field input[type=file]');
const avatarPreview = form.querySelector('.ad-form-header__preview img');
const housePhotoChooser = form.querySelector('.ad-form__upload input[type=file]');
const housePhotoPreview = form.querySelector('.ad-form__photo');

form.addEventListener('change', (evt) => {
  const CHOOSEN_FILE = 0;

  if (evt.target.matches('#avatar')) {
    const file = avatarChooser.files[CHOOSEN_FILE];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      avatarPreview.src = URL.createObjectURL(file);
    }
  }

  if (evt.target.matches('#images')) {
    const file = housePhotoChooser.files[CHOOSEN_FILE];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      housePhotoPreview.innerHTML = '';

      const image = document.createElement('img');
      image.style.width = '70px';
      image.style.height = '70px';
      image.style.alt = 'Фотография жилья';
      image.src = URL.createObjectURL(file);

      housePhotoPreview.append(image);
    }
  }
});
