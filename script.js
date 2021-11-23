
$('.language__select').ddslick({
  width: '92px'
});

$(document).ready(function() {
  setInterval (blinke_funk, Math.random()*1300);

  function blinke_funk() { 
    var blinke_speed = Math.random()*1300;
    // $(".background__neon-right-blink").fadeIn(blinke_speed).fadeOut(blinke_speed);
  }
});


$('.mask-group').slick({
  centerMode: true,
  // slidesToShow: 9,
  swipeToSlide: true,
});

document.querySelector('.center-informations__button').addEventListener('click', function (){
  document.querySelector('.center-informations__case-page').classList.toggle('no-active')
  document.querySelector('.center-informations__mask-group-block').classList.toggle('no-active')
})

let array = document.querySelectorAll('.mask-group__img')

for (let i = 0; i < array.length; i++) {
  array[i].addEventListener('click', (event) => {
    console.dir(event.target.src);
    document.querySelector('.center-informations__item').classList.toggle('no-active')
    document.querySelector('.center-informations__logo').src = event.target.src
  })
}
// console.log(array);


