// Slick
$(document).ready(function() {
  $('.slick-sketch').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true,
  autoplay: true
});


// Zoom
$(document).ready(function() {
  $('#photo2').zoom({
    url: 'img/gallery/boat-big.jpg',
    magnify: 0.3
  });

  $('#photo1').zoom({
    url: 'img/gallery/bird.jpg',
    magnify: 1
  });
});

// Scroll Magic Animations
$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  $('.photo-subsection').each(function() {
    var imageFrame = new ScrollMagic.Scene({
        triggerElement: this,
        reverse: false
      })
      .setClassToggle(this, 'appear')
      // .addIndicators({
      //     name:'fade scene'
      // })
      .addTo(controller);
  })
});