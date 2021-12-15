/* eslint-disable no-undef */
const buttonDrawer = document.querySelector('#btndrawer');
const navDrawer = document.querySelector('#navheader');
const main = document.querySelector('main');

buttonDrawer.addEventListener('click', () => {
  navDrawer.classList.add('open');
});

main.addEventListener('click', () => {
  navDrawer.classList.remove('open');
});

/* function menu(className) {
  const content = document.getElementsByClassName('content');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < content.length; i++) {
    content[i].getElementsByClassName.display = 'none';
  }

  document.getElementById(className).style.display = 'block';
}

document.getElementById('categories-id').click(); */
