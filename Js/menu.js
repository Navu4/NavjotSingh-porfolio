let menuButton = document.querySelector('.menu-btn');
let crossButton = document.querySelector('.cross-btn');
console.log(menuButton, crossButton);
menuButton.addEventListener('click', (e) => {
  console.log('CLICK');
  crossButton.classList.remove('hide');
  menuButton.style.display = 'none';
  
  document.querySelector('.nav-list').style.display = 'block'
});
crossButton.addEventListener('click', (e) => {
  crossButton.classList.add('hide');
  menuButton.style.display = 'block';
  document.querySelector('.nav-list').style.display = 'none'
});
