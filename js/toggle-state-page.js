const adForm = document.querySelector('.ad-form');
const fieldsetList = adForm.querySelectorAll('fieldset');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');

  fieldsetList.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');

  fieldsetList.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

export { activateForm, deactivateForm };
