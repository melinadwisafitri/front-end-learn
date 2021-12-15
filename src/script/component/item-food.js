/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
class searchItemFood extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set foods(food) {
    this._foods = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    img {
      width: 100%;
    }
    .card-search
    {
        justify-content: center;
        align-items: center;
        padding: 10px
    }

    .card-search .card-search-1
    {
        width: 50vh;
        height: 200px;
        background: white;
        border-radius: 20px;
        
    }

    .card-search .card-search-1 .circle-img
    {
        width: 100%;
        height: 100px;
        clip-path: circle(100px at center 0);
    }


    .card-search .card-search-1 .content-card-search{
        text-align: center;
        font-size: 20px;
    }

    .card-search .card-search-1 .content-card-search .content-bottom{
        display: flex;
        font-size: 15px;
        margin-top: -30px;
        justify-content: space-between;
        padding: 5%;
        color: #A35709;
    }

    @media screen and (min-width: 360px) {
      .card-search .card-search-1
    {
        width: 100%;
        height: 280px;
    }

    @media screen and (min-width: 568px) {
      .card-search .card-search-1 .content-card-search .content-bottom{
        flex-direction: column;
      }
    </style>
    <div class="card-search">
            <div class="card-search-1">
                <div class="circle-img">
                    <img src='${this._foods.strMealThumb}'/>
                </div>
                <div class="content-card-search">
                    <h3>${this._foods.strMeal}</h3>
                    <div class='content-bottom'>
                      <p class='fa fa-coffee'>${this._foods.strCategory}</p>
                      <p class='fa fa-building'>${this._foods.strArea}</p>
                    </div>
                </div>
            </div>
    </div>
    `;
  }
}
customElements.define('food-item', searchItemFood);
