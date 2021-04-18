$(document).ready(function(){
  $('.slider').bxSlider();
});

$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});

$(document).ready(function(){
  $('#click1').click(function(){
      $('#aimg').toggleClass('aboutmeimg2');
  });
});