$('.slider-block__slider').slick({
  dots: true,
  // appendArrows: $('.your-class-arrow'),
  customPaging: function(slider, i) {
    return '<div class="slider-block__dot"></div>';
  },
  prevArrow: '<button id="prev" type="button" class="slider-block__arrow-left"><img src="./img/slider/arrow-left.svg" alt="arrow-left" class="slider-block__arrow-left-img"></button>',
  nextArrow: '<button id="next" type="button" class="slider-block__arrow-right"><img src="./img/slider/arrow-right.svg" alt="arrow-right" class="slider-block__arrow-right-img"></button>',
});
