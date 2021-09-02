import throttle from 'lodash.throttle';

const formOn = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let localValue = {};

if (localStorage.hasOwnProperty(formOn)) {
  localValue = JSON.parse(localStorage.getItem(formOn));

  for (let i in localValue) {
    form[i].value = localValue[i];
  }
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const formData = new FormData(form);

  formData.forEach((a, b) => (localValue[b] = a));

  localStorage.setItem(formOn, JSON.stringify(localValue));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (!form.email.value || !form.message.value) {
    console.log('empty');
    return;
  }
  form.reset();

  console.log(localValue);

  localValue = {};

  localStorage.removeItem(formOn);
}
