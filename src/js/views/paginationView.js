import icons from '../../img/icons.svg';
import { getPageNumberFromButton } from '../helpers';
import View from './view';

class PaginationView extends View {
  _data;
  _parentElement = document.querySelector('.pagination');

  addHandleClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      //importantComment
      //OR CAN USE DATA ATTR IN DOM ELEMENT TO GET NUMBER
      return (
        (e.target.closest('button') &&
          handler(
            getPageNumberFromButton(e.target.closest('button').innerText)
          )) ||
        null
      );
      //OR CAN USE DATA ATTR IN DOM ELEMENT TO GET NUMBER
      //importantComment
    });
  }
  _generateMarkup({ prev, next, page }) {
    this._clear();
    //PAGE 1 , THERE ARE NO OTHER PAGES

    !prev && !next && this._clear();

    //PAGE 1 , THERE ARE OTHER PAGES
    next &&
      !prev &&
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        ` <button class="btn--inline pagination__btn--next">
        <span>Page ${Number(page) + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`
      );
    //LAST PAGE
    //OTHER PAGE
    prev &&
      next &&
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${Number(page) - 1}</span>
      </button>
        <button class="btn--inline pagination__btn--next">
        <span>Page ${Number(page) + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`
      );
    prev &&
      !next &&
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${Number(page) - 1}</span>
      `
      );
  }
  render(prev, next, page) {
    this.data = { prev, next, page };

    this._generateMarkup(this.data);
  }
}
export default new PaginationView();
