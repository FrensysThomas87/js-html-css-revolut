$(document).ready(function(){

  $('nav ul li').click(function(){
    $(this).find('.dropdown-link').toggleClass('disp-none');
    console.log('sto funzionando');
  });


});
