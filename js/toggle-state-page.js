const adForm = document.querySelector('.ad-form');
const fieldsetList = adForm.querySelectorAll('fieldset');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');

  fieldsetList.forEach((fieldset) => {
    fieldset.setAttribute('disabled', '');
  });
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');

  fieldsetList.forEach((fieldset) => {
    fieldset.removeAttribute('disabled');
  });
};

export { activateForm, deactivateForm };
