/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
class categoryItemFood extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set categories(category) {
    this._categories = category;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        .category-item {
          padding: 10px;
          text-align: center;
          border-radius: 5px;
          background-color: white;
          box-shadow: 5px 5px 6px 0px rgba(0, 0, 0, 0.3);
          transition: 0.3s ease-in;
          height: 80px;
          margin-top: 10vh;
        }

        .category-item:hover {
          height: 200px;
        }

        .category-item img {
          position: relative;
          top: -50px;
          width: 80%;
          z-index: 1;
        }

        .category-item h2{
          margin-top: -40px;
          font-size: 20px;
        }

        .category-item .description{
          margin-top: -10px;
          visibility: hidden;
          text-align: justify;
          padding: 5px;
        }

        .category-item:hover .description{
          visibility: visible;
          overflow: hidden;
          transition: 0.3s ease-in-out;
          transition-delay: 0.1s;
          height: 100px;
        }

        @media screen and (min-width: 768px){
          .category-item{
          }
        }
    </style>
    <div class= 'category-item'>
          <img src = '${this._categories.strCategoryThumb}'/>
          <h2> ${this._categories.strCategory} </h2>
          <p class='description'>${this._categories.strCategoryDescription}</p>
    </div>`;
  }
}

customElements.define('category-item', categoryItemFood);
