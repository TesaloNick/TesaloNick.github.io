$('.language__select').ddslick({
  width: '92px'
});

$(document).ready(function() {
  setInterval (blinke_funk, Math.random()*800);
  setInterval (blinke_funk1, Math.random()*300);

  function blinke_funk() { 
    var blinke_speed = Math.random()*800;
    // $(".background__neon-right-blink").fadeIn(blinke_speed).fadeOut(blinke_speed);
  }
  function blinke_funk1() { 
    var blinke_speed1 = Math.random()*300;
    // $(".arrow-down").fadeIn(blinke_speed1).fadeOut(blinke_speed1);
    // $(".arrow-up").fadeIn(blinke_speed1).fadeOut(blinke_speed1);
  }
});


$('.mask-group__container').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 9,
  variableWidth: true,
  cssEase: 'cubic-bezier(.3,-0.65,.47,1.05)',
  speed: 4000, 
  // focusOnSelect: true, 
  // swipeToSlide: true,
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

// for (let i = 0; i < array.length; i++) {
//   array[i].addEventListener('click', (event) => {
//     console.dir(event.target.src);
    // document.querySelector('.center-informations__item').classList.toggle('no-active')
    // document.querySelector('.center-informations__logo').src = event.target.src
//   })
// }


$('.button-yellow').click(function(e) {
  e.preventDefault();
  $('.center-informations__case-page').addClass('no-active')
  $('.center-informations__mask-group-block').removeClass('no-active')

  let randomNumber = Math.round(Math.random()*14)
  $('.mask-group__container').slick('slickGoTo', randomNumber-1)

  setTimeout(() => {
    $('.center-informations__goal').removeClass('no-active')
    $('.center-informations__goal-img').attr('src', `./img/items/${randomNumber}.svg`)
    $('.background__koko').removeClass('no-active')
    $('.mask-group__container').css("opacity", "0.2")
    $('.button-yellow').addClass('no-active')
    $('.button-green').removeClass('no-active')
    $('.arrow-down').addClass('no-active')
    $('.arrow-up').addClass('no-active')
    console.log($(`.mask-group__img${randomNumber}`).data('color'));
  }, 4000)
});