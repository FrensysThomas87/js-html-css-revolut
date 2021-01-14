$(document).ready(function(){

  $('nav ul li').click(function(){
    var dropdown = $('.dropdown-link');
    var current = $('.dropdown-link.active');
     $(this).find('.dropdown-link').toggleClass('active');
     if(dropdown.hasClass('active')){
       current.removeClass('active');
     }
  });



});
