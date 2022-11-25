import { API_URL, API_KEY, RES_PER_PAGE, INITAL_PAGE } from './config';
import {
  AJAX,
  checkNextPage,
  checkPrevPage,
  updateRecipeQuantitys,
} from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    resultsPerPage: RES_PER_PAGE,
    page: INITAL_PAGE,
    results: [],
  },
};

export const initBookmarks = () =>
  (state.bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []);
const createRecipeObject = data => {
  const { recipe } = data.data;
  const {
    id,
    title,
    publisher,
    source_url: sourceUrl,
    image_url: image,
    servings,
    cooking_time: cookingTime,
    ingredients,
  } = recipe;
  return {
    id,
    title,
    publisher,
    sourceUrl,
    image,
    servings,
    cookingTime,
    ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};
export const loadRecipe = async id => {
  //1. Loading Recipe

  try {
    const data = await AJAX(`${API_URL}${id}?${API_KEY}`);
    //REFACTORED
    // const {
    //   recipe: {
    //     id: ID,
    //     title,
    //     publisher,
    //     source_url,
    //     image_url,
    //     servings,
    //     cooking_time,
    //     ingredients,
    //   },
    // } = data.data;

    // state.recipe = {
    //   id: ID,
    //   title,
    //   publisher,
    //   sourceUrl: source_url,
    //   image: image_url,
    //   servings,
    //   cookingTime: cooking_time,
    //   ingredients,
    //   bookmarked: state.bookmarks.some(({ id }) => id === ID),
    // };
    //REFACTORED
    state.recipe = createRecipeObject(data);
    state.recipe.bookmarked = state.bookmarks.some(
      ({ id }) => id === state.recipe.id
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

    if (data.data.recipes.length < 1) throw Error();
    const results = data.data.recipes.map(
      ({ id, title, publisher, image_url: image, key }) => {
        return {
          id,
          title,
          publisher,
          image,
          ...(key && { key }),
        };
      }
    );
    state.search = { ...state.search, query, results };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const updatePageNum = (newPageNum = INITAL_PAGE) =>
  (state.search.page = newPageNum);

export const getSearchResultsPage = function (page = state.search.page) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  const pagination = state.search.results.slice(start, end);

  state.search.prev = checkPrevPage(state.search.results, pagination);
  state.search.next = checkNextPage(state.search.results, pagination);
  //REFACTORED IN HELPERS MODULE
  // state.search.next = (() => {
  //   try {
  //     return !!state.search.results[
  //       state.search.results.findIndex(
  //         element => element.id === pagination?.slice(-1)[0].id
  //       ) + 1
  //     ];
  //   } catch (err) {
  //     return false;
  //   }
  // })();

  // state.search.prev = (() => {
  //   try {
  //     return !!state.search.results[
  //       state.search.results.findIndex(
  //         element => element.id === pagination?.slice(0, 1)[0].id
  //       ) - 1
  //     ];
  //   } catch (err) {
  //     return false;
  //   }
  // })();
  //REFACTORED IN HELPERS MODULE

  return pagination;
};
export function updateRecipe(newQty) {
  const newIngredientsValues = +newQty / +state.recipe.servings;
  state.recipe = {
    ...state.recipe,
    servings: newQty,
    ingredients: updateRecipeQuantitys(
      newIngredientsValues,
      state.recipe.ingredients
    ),
  };

  return state.recipe;
}
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
export const addBookmark = function (recipe) {
  state.bookmarks = [...state.bookmarks, recipe];
  if (state.recipe.id === recipe.id)
    state.recipe.bookmarked = (!state.recipe.bookmarked && true) || false;

  persistBookmarks();
};
export const removeBookmark = function ({ id: recipeId }) {
  state.recipe.bookmarked = false;
  state.bookmarks = state.bookmarks.filter(({ id }) => id !== recipeId);

  persistBookmarks();
};
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredientsRawData = Object.entries(newRecipe).filter(
      ([entry, value]) => isFinite(entry.split('-')[1])
    );
    const ingredients = Object.values(ingredientsRawData).map(
      ([_, ingredient]) => getIngredientsData(ingredient)
    );
    const dataWithoutIngredients = Object.entries(newRecipe)
      .filter(([entry, value]) => !entry.includes('ingredient'))
      .reduce((acc, [key, value]) => {
        return { ...acc, [key]: parseIfNum(value) };
      }, {});
    const {
      title,
      publisher,
      sourceUrl: source_url,
      image: image_url,
      servings,
      cookingTime: cooking_time,
    } = dataWithoutIngredients;

    const parsedData = {
      title,
      publisher,
      source_url,
      image_url,
      servings,
      cooking_time,
      ingredients: ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, parsedData);

    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
function getIngredientsData(data) {
  const splitted = data.split(',');
  if (splitted.length < 3) {
    throw new Error('wrong input in some of the fields');
  }
  const [quantity, unit, description] = splitted.map(e => e.trim());
  return {
    quantity: parseIfNum(quantity),
    unit: unit || undefined,
    description: description || undefined,
  };
}
const parseIfNum = data => (isFinite(+data) && +data !== 0 ? +data : data);
