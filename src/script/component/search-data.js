/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
class DataSearchFood extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(eventListener) {
    this.__clickEvent = eventListener;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchInput').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .search-container{
      padding: 3%;
      width: 100%;
      border-radius: 5px;
      background-color: white;
      box-shadow: 0 9px 0 0 rgba(255, 194, 136, 0.5);
    }

    .search-container input[type="search"] {
        background-color: white;
        width: 30%;
        box-sizing: border-box;
        transition: width 0.5s ease-in-out;
        border: none;
        border-radius: 30px;
        padding: 10px;
        color: #FEA82F;
    }

    .search-container input[type="search"]:hover{
        background-color: #FEA82F;
        color: white;
    }

    .search-container input[type="search"]:focus{
        width: 70%;
        color: #F0E3CA;
    }

    .search-container button{
      background-color: #FF6701;
      border: none;
      cursor: pointer;
      border-radius: 40px;
      padding: 10px;
      color: white;
      width: 20%
    }

    .search-container button:hover{
      background-color: white;
      color: #FF6701
    }

    @media screen and (min-width: 568px) {
      .search-container button{
        width:10%;
      }
    </style>
    <div class="comtent">
      <div id="search-container" class="search-container fa fa-search">
          <input class="" placeholder="Search food by name" id="searchInput" type="search">
          <button id="searchBtn" type="submit">Search</button>
      </div>
    </div>
        `;
    this.shadowDOM.querySelector('#searchBtn').addEventListener('click', this.__clickEvent);
  }
}

customElements.define('search-data', DataSearchFood);
