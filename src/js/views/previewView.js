import View from './view';
import icons from '../../img/icons.svg';
class PreviewView extends View {
  _parentElement;

  _generateMarkup(data) {
    const urlId = window.location.hash.slice(1) || '';
    const { id, image, title, publisher } = data;

    return `<li class="preview ">
      <a class="preview__link ${
        id === urlId && 'preview__link--active'
      }" href="#${id}">
        <figure class="preview__fig">
          <img src="${image}" alt="${title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">
            ${title}
          </h4>
          <p class="preview__publisher">${publisher}</p>
          <div class="preview__user-generated ${(!data.key && 'hidden') || ''}">
          <svg>
            <use href="${icons}#icon-users"></use>
          </svg>
        </div>
        </div>
      </a>
    </li>`;
  }
}
export default new PreviewView();
