//MAY WORK IN DIFFERENT VERSIONS
// import icons from ' url: ../img/icons.svg';
//MAY WORK IN DIFFERENT VERSIONS
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import * as recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import bookmarksView from './views/bookmarksView';
import paginationView from './views/paginationView';
import addRecipeView from './views/addRecipeView';
import { MODAL_CLOSE_SEC } from './config';

// https://forkify-api.herokuapp.com/v2

//   test URI  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcd09';
if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async () => {
  let id = window.location.hash.slice(1);
  if (!id) {
    return;
  }
  try {
    recipeView.default.renderSpinner();
    //1. Loading Recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;
    //Add style active list item

    resultsView.render(model.getSearchResultsPage(), !searchView.getQuery());

    //Add style active list item

    // 2.Rendering recipe

    recipeView.default.render(recipe);

    bookmarksView.render(model.state.bookmarks);
  } catch (err) {
    console.trace(err.message);
    recipeView.default.renderError();
  }
};

const controlSearchResults = async () => {
  try {
    model.updatePageNum();
    //1. GET SEARCH QUERY
    const query = searchView.getQuery();

    if (!query) return;
    resultsView.renderSpinner();
    //2. LOAD SEARCH RESULTS

    await model.loadSearchResults(query);

    updateUI();

    //3. RENDER SEARCH RESULTS

    // REFACTORED INTO UPDATEUI FUNCTION
    // resultsView.render(model.getSearchResultsPage());
    // paginationView.render(
    //   model.state.search.prev,
    //   model.state.search.next,
    //   model.state.search.page
    // );
    // REFACTORED INTO UPDATEUI FUNCTION
  } catch (err) {
    resultsView.renderError();
  }
};
function controlUpdateServings(value) {
  return +value > 0
    ? (model.updateRecipe(value),
      //importantComment
      //REPLACING RENDER METHOD FOR UPDATE
      // recipeView.default.render(updatedRecipe);
      recipeView.default.update(model.state.recipe))
    : null;
  //REPLACING RENDER METHOD FOR UPDATE
  //importantComment
}

const renderNewPage = newPage => {
  model.state.search.page = newPage;
  updateUI();
};
function updateUI() {
  resultsView.render(model.getSearchResultsPage());
  paginationView.render(
    model.state.search.prev,
    model.state.search.next,
    model.state.search.page
  );
}
const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    const upload = await model.uploadRecipe(newRecipe);

    recipeView.default.render(model.state.recipe);
    addRecipeView.renderMessage();

    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    bookmarksView.render(model.state.bookmarks);
    setTimeout(() => {
      addRecipeView.hideWindow();
      addRecipeView.resetMarkup();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err);
    setTimeout(() => {
      addRecipeView.resetMarkup(true, newRecipe);
    }, MODAL_CLOSE_SEC * 1000);
  }
};

const controlAddBookmark = function () {
  //REFACTORED
  // if (!model.state.recipe.bookmarked) {
  //   model.addBookmark(model.state.recipe);
  // } else {
  //   model.removeBookmark(model.state.recipe);
  // }
  //REFACTORED
  return (
    //ADD OR REMOVE BOOKMARK
    !model.state.recipe.bookmarked
      ? model.addBookmark(model.state.recipe)
      : model.removeBookmark(model.state.recipe),
    //ADD OR REMOVE BOOKMARK
    //UPDATE VIEW
    (recipeView.default.update(model.state.recipe),
    bookmarksView.render(model.state.bookmarks))

    //UPDATE VIEW
  );
};

function init() {
  recipeView.default.addHandleRender(controlRecipes);

  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandleClick(renderNewPage);
  recipeView.default.addHandlerUpdateServing(controlUpdateServings);
  recipeView.default.viewBookmarkRecipe(controlAddBookmark);
  addRecipeView.addHandleUpload(controlAddRecipe);
  model.initBookmarks();
  bookmarksView.render(model.state.bookmarks);
}
init();
