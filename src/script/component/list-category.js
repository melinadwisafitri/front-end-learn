/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import './item-category.js';

class categoryList extends HTMLElement {
  /* constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  } */

  set categories(category) {
    this._categories = category;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._categories.forEach((category) => {
      const categoryItem = document.createElement('category-item');
      categoryItem.categories = category;
      this.appendChild(categoryItem);
    });
  }

  renderError(msg) {
    this.innerHTML = `
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
    this.innerHTML += `
        <h2 class='placeholder'> ${msg}</h2>`;
  }
}

customElements.define('category-list', categoryList);
