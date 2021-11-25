
$('.language__select').ddslick({
  width: '92px'
});

$(document).ready(function() {
  setInterval (blinke_funk, Math.random()*1300);

  function blinke_funk() { 
    var blinke_speed = Math.random()*1300;
    var blinke_speed1 = Math.random()*300;
    $(".background__neon-right-blink").fadeIn(blinke_speed).fadeOut(blinke_speed);
    $(".arrow-down").fadeIn(blinke_speed1).fadeOut(blinke_speed1);
    $(".arrow-up").fadeIn(blinke_speed1).fadeOut(blinke_speed1);
  }
});


$('.mask-group__container').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 9,
  variableWidth: true,
  focusOnSelect: true, 
  // initialSlide: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

let array = document.querySelectorAll('.mask-group img')

for (let i = 0; i < array.length; i++) {
  array[i].addEventListener('click', (event) => {
    console.dir(event.target.src);
    // document.querySelector('.center-informations__item').classList.toggle('no-active')
    // document.querySelector('.center-informations__logo').src = event.target.src
  })
}


$('.button-yellow').click(function(e) {
  e.preventDefault();
  $('.center-informations__case-page').addClass('no-active')
  $('.center-informations__mask-group-block').removeClass('no-active')
  $('.button-green').removeClass('no-active')
  $('.center-informations__goal').removeClass('no-active')
  $('.background__koko').removeClass('no-active')
  $('.button-yellow').addClass('no-active')
  // $('.arrow-down').addClass('no-active')
  // $('.arrow-up').addClass('no-active')
  // $('.mask-group').css("opacity", "0.2")
  let number = Math.round(Math.random()*14)
  $('.mask-group__container').slick('slickGoTo', number-1)
  $('.center-informations__goal-img').attr('src', `./img/items/${number}.svg`)
  console.log(document.querySelector('.mask-group__img'+number));
});