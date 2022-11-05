const adForm = document.querySelector('.ad-form');
const fieldsetAdList = adForm.querySelectorAll('fieldset');
const filterForm = document.querySelector('.map__filters');
const filterElements = Array.from(filterForm.children);

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');

  fieldsetAdList.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const deactivateFilter = () => {
  filterForm.classList.add('map__filters--disabled');

  filterElements.forEach((childElement) => {
    childElement.disabled = true;
  });
};

const activateFilter = () => {
  filterForm.classList.remove('map__filters--disabled');

  filterElements.forEach((childElement) => {
    childElement.disabled = false;
  });
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');

  fieldsetAdList.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

// Деактивирует страницу при загрузке модулей, ожидая ответ от карты
deactivateForm();
deactivateFilter();

export { activateForm, deactivateForm, activateFilter };
