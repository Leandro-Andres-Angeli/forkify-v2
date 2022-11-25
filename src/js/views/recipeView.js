import icons from '../../img/icons.svg';
import * as Fraction from 'fractions';
// var Fraction = require('fractions');
import View from './view';

class RecipeView extends View {
  _errorMessage = 'We could not find selected recipe.Please try another one!';
  _message;

  constructor() {
    super();
    this._parentElement = document.querySelector('.recipe');
  }

  addHandleRender(callbackRender) {
    ['load', 'hashchange'].forEach(el =>
      window.addEventListener(el, callbackRender)
    );
  }
  addHandlerUpdateServing(callback) {
    this._parentElement.addEventListener('click', e => {
      (e.target.closest('button') &&
        callback(+e.target.closest('button').dataset.updateTo)) ||
        null;
    });
  }
  viewBookmarkRecipe(bookmarkRecipe) {
    this._parentElement.addEventListener('click', e => {
      if (e.target.closest('.btn--round')) {
        return bookmarkRecipe(this._data);
      }
    });
  }
  //ANOTHER WAY
  // addHandleRender(callbackRender) {
  //   ['load', 'hashchange'].forEach(el =>
  //     window.addEventListener(el, function () {
  //       let hash = this.location.hash.slice(1) || '5ed6604691c37cdc054bcfd1';
  //       if (!hash) return;

  //       return callbackRender(hash);
  //     })
  //   );
  // }
  //ANOTHER WAY

  _generateMarkup() {
    return `


  
<figure class="recipe__fig">
  <img src=${this._data.image} alt=${this._data.title} class="recipe__img" />
  <h1 class="recipe__title">
    <span>${this._data.title}</span>
  </h1>
</figure>

<div class="recipe__details">
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="${icons}#icon-clock"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--minutes">${
      this._data.cookingTime
    }</span>
    <span class="recipe__info-text">minutes</span>
  </div>
  <div class="recipe__info">
  
    <svg class="recipe__info-icon">
      <use href="${icons}#icon-users"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--people">${
      this._data.servings
    }</span>
    <span class="recipe__info-text">servings</span>

    <div class="recipe__info-buttons">
      <button class="btn--tiny btn--update-servings" data-update-to="${
        this._data.servings - 1
      }">
        <svg>
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--update-servings" data-update-to="${
        this._data.servings + 1
      }">
        <svg>
          <use href="${icons}#icon-plus-circle"></use>
        </svg>
      </button>
    </div>
  </div>

    
  <div class="recipe__user-generated ${(!this._data.key && 'hidden') || ''}">
    <svg>
      <use href="${icons}#icon-users"></use>
    </svg>
  </div>

  <button class="btn--round btn--bookmark">
    <svg class="">
      <use href="${icons}#icon-bookmark${
      (this._data.bookmarked && '-fill') || ''
    } "></use>
    </svg>
  </button>
</div>

<div class="recipe__ingredients">
  <h2 class="heading--2">Recipe ingredients</h2>
  <ul class="recipe__ingredient-list">
${this._data.ingredients
  .map(
    ({ quantity, description, unit }) => `<li class="recipe__ingredient">
<svg class="recipe__icon">
  <use 
  href=${icons}#icon-check
  ></use>
</svg>

${
  (quantity &&
    ` <div class="recipe__quantity">${new Fraction(
      Math.round(quantity * 2) / 2
    ).toString()} </div> `) ||
  ''
}
${(unit && `  <span class="recipe__unit">${unit}</span>`) || ''}
<div class="recipe__description">
  ${description}
  
  
  
</div>
</li>`
  )
  .join('')}    




  </ul>
</div>

<div class="recipe__directions">
  <h2 class="heading--2">How to cook it</h2>
  <p class="recipe__directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe__publisher">${
      this._data.publisher
    }</span>. Please check out
    directions at their website.
  </p>
  <a
    class="btn--small recipe__btn"
    href=${this._data.sourceUrl}
    target="_blank"
  >
    <span>Directions</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
    
  </a>
</div>
`;
  }
}
//CHECKING IF FRACTIONAL IT'S THE PROBLEM
// ${
//   quantity && unit
//     ? ` <div class="recipe__quantity">${new Fraction(
//         Math.round(quantity * 2) / 2
//       ).toString()} <span class="recipe__unit">${unit}</span> </div>`
//     : ''
// }
//CHECKING IF FRACTIONAL IT'S THE PROBLEM
export default new RecipeView();
