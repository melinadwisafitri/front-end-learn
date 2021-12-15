/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */

import './item-food.js';

class searchListValue extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set foods(food) {
    this._foods = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._foods.forEach((food) => {
      const foodItem = document.createElement('food-item');
      foodItem.foods = food;
      this.shadowDOM.appendChild(foodItem);
    });
  }

  renderError(msg) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
    this.shadowDOM.innerHTML += `
        <h2 class='placeholder'> ${msg}</h2>`;
  }
}

customElements.define('food-list', searchListValue);
