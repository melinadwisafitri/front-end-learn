/* eslint-disable no-undef */

class appHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .heading{
      display: grid;
      grid-template-areas:
          'title title title-img'
          'title title btn-start';
      margin: 5%;
    }
    .title{
        grid-area: title;
        max-width: 25vh;
    }
    
    .feature{
      color: blue;
      display: grid;
      place-content: center;
      text-align: center;
    }

    .title h1{
        font-size: 2em;
        font-family: 'Carter One', cursive;
    }
    .title p {
      font-size: 0.8em;
    }
    .title-img{
        grid-area: title-img;
    }

    .btn-start {
      grid-area: btn-start;
      font-size: 30px;
    }

    .btn-start a{
      background-color: white;
      color: #FF8303;
      border-radius: 20px;
      border: 2px solid #FF8303;
      width: 20vh;
    }

    .btn-start a:hover{
      background-color: #FF8303;
      color: white;
      cursor: pointer;
      transition-duration: 0.4s;
    }

    img {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      .title{
        max-width: 60vh;
        margin-right: 30%;
        background-color: #FFC288;
        padding: 10%
      }

      .title h1{
        font-size: 3em;
      }

      .title p {
        font-size: 1em;
      }

      img{
        width: 150%;
      }

      .title-img{
        margin-right: 30%;
      }
      
    }
    </style>
    <div class='heading'>
      <div class="title">
        <h1>Let's Cooking</h1>
        <p>With cooking a sense of pleasure will appear, cooking can be done with family, friends and others. Cooking from simple ingredients can make profit, so don't worried to try it cook. In this web inform you about more recipe in the world, so please stay in the website</p>
      </div>
      <div class="feature title-img">
        <img src="./img/img-header.svg" alt="">
      </div>
      <div class="feature btn-start">
        <a>➡</a>
      </div>      
    </div>`;
  }
}

customElements.define('app-header', appHeader);
