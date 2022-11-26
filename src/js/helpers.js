import { TIMEOUT_SEC } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}  error code : ${res.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};
//REFACTORED INTO AJAX FUNCTION

// export const getJSON = async url => {
//   try {
//     //importantComment Promise.race
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     //importantComment
//     const data = await res.json();
//     if (!res.ok) throw new Error(`${data.message}  error code : ${res.status}`);

//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
// export const sendJSON = async (url, uploadData) => {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(uploadData),
//     });
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//     const data = await res.json();
//     if (!res.ok) throw new Error(`${data.message}  error code : ${res.status}`);

//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
//REFACTORED INTO AJAX FUNCTION
export const checkPrevPage = (results, pagination) => {
  try {
    return !!results[
      results.findIndex(
        element => element.id === pagination?.slice(0, 1)[0].id
      ) - 1
    ];
  } catch (err) {
    return false;
  }
};

export const checkNextPage = (results, pagination) => {
  try {
    return !!results[
      results.findIndex(element => element.id === pagination?.slice(-1)[0].id) +
        1
    ];
  } catch (err) {
    return false;
  }
};
//OR CAN USE DATA ATTR IN DOM ELEMENT TO GET NUMBER
export const getPageNumberFromButton = btnText => {
  const [_, result] = btnText.split(' ');

  return +result;
};
//OR
// +[...btnText].filter(e => isFinite(e) && parseInt(e));
//OR CAN USE DATA ATTR IN DOM ELEMENT TO GET NUMBER
export const updateRecipeQuantitys = (percentage, ingredients) =>
  ingredients.map(ingredient => {
    return ingredient.quantity
      ? { ...ingredient, quantity: +ingredient.quantity * +percentage }
      : ingredient;
  });
