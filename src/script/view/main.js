/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import '../component/search-data.js';
import '../component/list-food.js';
import '../component/list-category.js';
import SearchData from '../data/data_source.js';

const searchFood = () => {
  const searchInput = document.querySelector('search-data');
  const listFood = document.querySelector('food-list');

  const renderValues = (values) => {
    listFood.foods = values;
  };

  const falseValues = (msg) => {
    listFood.renderError(msg);
  };

  const searchBtnClick = async () => {
    try {
      const values = await SearchData.searchFood(searchInput.value);
      renderValues(values);
    } catch (msg) {
      falseValues(msg);
    }
  };

  searchBtnClick('steak');
  searchInput.clickEvent = searchBtnClick;
};

const getFoodCategory = () => {
  const listCategory = document.querySelector('category-list');

  const renderValues = (values) => {
    listCategory.categories = values;
  };

  const falseValues = (msg) => {
    listFood.renderError(msg);
  };

  const getCategoryList = async () => {
    try {
      const value = await SearchData.getCategoryAll();
      renderValues(value);
    } catch (msg) {
      falseValues(msg);
    }
  };

  getCategoryList();
};
export { searchFood, getFoodCategory };
