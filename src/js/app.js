import sayHello from './lib/sayHello';

sayHello();

const mainMenuElement = document.querySelector(`.main-menu`)
const mainMenuOpenBtn = mainMenuElement.querySelector(`.main-menu__open`);
const mainMenuCloseBtn = mainMenuElement.querySelector(`.main-menu__close`);

mainMenuOpenBtn.addEventListener(`click`, () => {
  mainMenuElement.classList.add(`main-menu--open`);
})

mainMenuCloseBtn.addEventListener(`click`, () => {
  mainMenuElement.classList.remove(`main-menu--open`);
})
