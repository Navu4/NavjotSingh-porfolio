let mainContainer = document.getElementById('main-container');
let container = document.querySelector('.blog-container');
let displayBlog = 3;

// Carousel Implementation
function rightShift() {
  let list = container.children;

  list[0].classList.add('hide');

  list[displayBlog + 1].classList.remove('hide');
  list[displayBlog + 1].setAttribute('data-aos', 'fade-left');
  list[displayBlog + 1].classList.add('aos-init', 'aos-animate');

  rotate(list, container, false);
  console.log('Left');
}

function leftShift() {
  let list = container.children;

  list[displayBlog].classList.add('hide');

  rotate(list, container, true);

  list[0].classList.remove('hide');
  list[0].setAttribute('data-aos', 'fade-right');
  console.log('Right');

  setTimeout(function () {
    list[0].removeAttribute('data-aos');
    list[0].classList.remove('aos-init', 'aos-animate');
  }, 500);
}

// Rotate Function
function rotate(list, containerDiv, flag) {
  if (!flag) {
    let hide = list[0];
    list[0].remove();
    containerDiv.appendChild(hide);
  } else {
    let appear = list[list.length - 1];
    list[list.length - 1].remove();
    containerDiv.insertBefore(appear, list[0]);
  }
  console.log(containerDiv);
}

if (mainContainer.offsetWidth < 1025 && mainContainer.offsetWidth > 768) {
  container.children[2].classList.add('hide');
  displayBlog = 1;
} else if(mainContainer.offsetWidth < 770){
  container.children[1].classList.add('hide');
  container.children[2].classList.add('hide');
  displayBlog = 0;
} else {
  if(container.children[1].classList.contains('hide')){
    container.children[1].classList.remove('hide')
  }
  if(container.children[2].classList.contains('hide')){
    container.children[2].classList.remove('hide')
  }
  displayBlog = 3;
}
