import View from './view';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe successfully uploaded';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _initialMarkup;
  constructor() {
    super();
    this._initialMarkup = document.querySelector('.upload').cloneNode(true);
    this._addHandleShowWindow();
    this._addHandleHideWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
    this.setInputValues(undefined, this._parentElement);
    // this.setInputValues();
  }
  hideWindow() {
    this._overlay.classList.add('hidden');
    this._window.classList.add('hidden');
    this.setInputValues(undefined, this._parentElement);
  }
  setInputValues(data = '', element) {
    [...element.querySelectorAll('input')].forEach((inpt, i) => {
      inpt.setAttribute('value', data[inpt.name] || '');
    });
  }
  resetMarkup(error = false, dataForm) {
    if (error && dataForm) this.setInputValues(dataForm, this._initialMarkup);

    this._clear(),
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        this._initialMarkup.innerHTML
      );
  }
  _addHandleShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandleHideWindow() {
    this._btnClose.addEventListener('click', this.hideWindow.bind(this));
    this._overlay.addEventListener('click', this.hideWindow.bind(this));
  }
  addHandleUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)].filter(([_, data]) => data);
      const data = Object.fromEntries(dataArray);

      handler(data);
    });
  }
  _generateMarkup() {}
}
export default new addRecipeView();
