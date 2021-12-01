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
    // centerMode: true, 
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