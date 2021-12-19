/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import './assets/style.css';
import './script/script.js';
import './script/component/search-data.js';
import './script/component/app-header.js';
import './script/component/list-food.js';
import './script/component/list-category.js';
import { searchFood, getFoodCategory } from './script/view/main';

document.addEventListener('DOMContentLoaded', () => {
  searchFood();
  getFoodCategory();
});
