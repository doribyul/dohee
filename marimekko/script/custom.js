$(document).ready(function(){
  $('.gnb>li').mouseenter(function(){
    $(this).find('.sub').stop().slideDown(400)
  });
  $('.gnb>li').mouseleave(function(){
    $(this).find('.sub').stop().slideUp()
  })
})