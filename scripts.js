$('.slider-block__slider').slick({
  dots: true,
  customPaging: function(slider, i) {
    return '<div class="slider-block__dot"></div>';
  },
  prevArrow: '<button id="prev" type="button" class="slider-block__arrow-left"><img src="./img/slider/arrow-left.svg" alt="arrow-left" class="slider-block__arrow-left-img"></button>',
  nextArrow: '<button id="next" type="button" class="slider-block__arrow-right"><img src="./img/slider/arrow-right.svg" alt="arrow-right" class="slider-block__arrow-right-img"></button>',
});

if ($(window).width() <= 1150) {
  $('.slider-of-prices__block').slick({
    dots: false,
    focusOnSelect: true,
    prevArrow: '<button id="prev" type="button" class="slider-block__arrow-left"><img src="./img/slider/arrow-left.svg" alt="arrow-left" class="slider-block__arrow-left-img"></button>',
    nextArrow: '<button id="next" type="button" class="slider-block__arrow-right"><img src="./img/slider/arrow-right.svg" alt="arrow-right" class="slider-block__arrow-right-img"></button>',
    slidesToShow: 3,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }); 
}

const sidebarButtons = document.querySelectorAll('.sidebar-button')

const ourWorksButton = document.querySelector('.sidebar__our-works-button')
const pricesButton = document.querySelector('.sidebar__prices-button')
const mapButton = document.querySelector('.sidebar__map-button')
const background = document.querySelector('.background')
const prices = document.querySelector('.prices')
const footer = document.querySelector('.footer')

function scrollTo(scrollToElement, button) {
  window.scroll({
    left: 0,
    top: scrollToElement.offsetTop,
    behavior: 'smooth'
  })
}

ourWorksButton.style.color = '#F2BF14'
ourWorksButton.previousSibling.style.backgroundColor = '#F2BF14'

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset+window.innerHeight >= footer.offsetTop) {
    mapButton.style.color = '#F2BF14'
    mapButton.previousSibling.style.backgroundColor = '#F2BF14'
    pricesButton.style.color = '#CCCCCC'
    pricesButton.previousSibling.style.backgroundColor = '#CCCCCC'
    ourWorksButton.style.color = '#CCCCCC'
    ourWorksButton.previousSibling.style.backgroundColor = '#CCCCCC'
  } else if (window.pageYOffset > 0 && window.pageYOffset+window.innerHeight < footer.offsetTop){
    pricesButton.style.color = '#F2BF14'
    pricesButton.previousSibling.style.backgroundColor = '#F2BF14'
    mapButton.style.color = '#CCCCCC'
    mapButton.previousSibling.style.backgroundColor = '#CCCCCC'
    ourWorksButton.style.color = '#CCCCCC'
    ourWorksButton.previousSibling.style.backgroundColor = '#CCCCCC'
  } else if (window.pageYOffset === 0){
    ourWorksButton.style.color = '#F2BF14'
    ourWorksButton.previousSibling.style.backgroundColor = '#F2BF14'
    mapButton.style.color = '#CCCCCC'
    mapButton.previousSibling.style.backgroundColor = '#CCCCCC'
    pricesButton.style.color = '#CCCCCC'
    pricesButton.previousSibling.style.backgroundColor = '#CCCCCC'
  }
})

ourWorksButton.addEventListener('click', () => scrollTo(background, ourWorksButton))
pricesButton.addEventListener('click', () => scrollTo(prices, pricesButton))
mapButton.addEventListener('click', () => scrollTo(footer, mapButton))