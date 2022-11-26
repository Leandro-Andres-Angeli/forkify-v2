import icons from '../../img/icons.svg';
export default class View {
  _data;
  _parentEl;

  constructor() {
    this._data;
  }
  renderSpinner = function () {
    const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };
  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderError(err = this._errorMessage) {
    const markup = ` <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${err}</p>
   
  </div>`;
    return (
      this._clear(),
      this._parentElement.insertAdjacentHTML('afterbegin', markup)
    );
  }
  /**
   *
   * @param {Object | Object[]} data
   * @param {initialState? : boolean }
   * @returns {undefined || false}
   */
  render(data, initialState = false) {
    if (!data || (Array.isArray(data) && data.length === 0 && !initialState))
      return this.renderError();
    this._data = data;

    this._clear();
    this._parentElement.dataset.id = this._data.id;
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }
  renderMessage(msg = this._message) {
    const markup = ` <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${msg}</p>
       
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  update(data) {
    this._data = data;

    const newMarkup = this._generateMarkup(this._data);

    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const prevElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      if (
        !newEl.isEqualNode(prevElements[i]) &&
        newEl.firstChild?.nodeValue.trim() !== '' &&
        prevElements[i].firstChild
      ) {
        prevElements[i].firstChild.textContent = newEl.firstChild.nodeValue;
      }

      if (!newEl.isEqualNode(prevElements[i])) {
        [...newEl.attributes].forEach(({ name, value }) =>
          prevElements[i].setAttribute(name, value)
        );
      }
    });
  }
}
