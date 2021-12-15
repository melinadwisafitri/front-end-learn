/* eslint-disable no-undef */
class SearchData {
  static searchFood(key) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
      .then((responses) => responses.json())
      .then((responsesJSONData) => {
        if (responsesJSONData.meals != null) {
          return Promise.resolve(responsesJSONData.meals);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`${key} not found`);
      });
  }

  static getCategoryAll() {
    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((responses) => responses.json())
      .then((responseJSONData) => {
        if (responseJSONData.categories != null) {
          return Promise.resolve(responseJSONData.categories);
        }
        return Promise.reject();
      });
  }
}

export default SearchData;
