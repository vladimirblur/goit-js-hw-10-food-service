import refs from './refs';

const { body: bodyRef, inputCheckbox } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

if (!localStorage.getItem('class')) {
  localStorage.setItem('class', LIGHT)
  bodyRef.classList.add(LIGHT)
} else {
  bodyRef.classList.add(localStorage.getItem('class'))
}
if (localStorage.getItem('class') === LIGHT) {
  inputCheckbox.checked = false

} else {
  inputCheckbox.checked = true
}
 

inputCheckbox.addEventListener('change', () => {
 
  if (localStorage.getItem('class') === LIGHT) {
    localStorage.setItem("class", DARK)
    bodyRef.classList.replace(LIGHT, DARK)
  } else {
    localStorage.setItem("class", LIGHT)
    bodyRef.classList.replace(DARK, LIGHT)
  }
    
}
);

