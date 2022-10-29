const adForm = document.querySelector('.ad-form');
const fieldsetAdList = adForm.querySelectorAll('fieldset');
const filterForm = document.querySelector('.map__filters');
const filterElements = Array.from(filterForm.children);

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  filterForm.classList.add('map__filters--disabled');

  filterElements.forEach((childElement) => {
    childElement.disabled = true;
  });

  fieldsetAdList.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  filterForm.classList.remove('map__filters--disabled');

  filterElements.forEach((childElement) => {
    childElement.disabled = false;
  });

  fieldsetAdList.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

// Деактивирует страницу при загрузке модулей, ожидая ответ от карты
deactivateForm();

export { activateForm, deactivateForm };
