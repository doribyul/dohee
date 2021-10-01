$(document).ready(function(){
  // 메인슬라이드
  const $new_imgWrap=$('.new_imgWrap'),
  $listSlides=$new_imgWrap.find('.listSlides'),
  $listWrap=$listSlides.find('ul');
  const $allow=$('.allow'),
  $btnPrev=$allow.find('.btnPrev')
  $btnNext=$allow.find('.btnNext');
  const $indicators=$('.indicators'),
  $indicator=$indicators.find('a'),
  $slideCount=$listWrap.length;
  let currentIdx=0,
  input='',
  timer;
  let num=0;
  setInterval(function(){
    if(num<1){
      num++;
    }else{
      num=0;
    };
    $('.mainBnr').animate({'left':-100*num+'%'},700);
  },3000)
  // 뉴아이템슬라이드
  $listSlides.css('width',100*$slideCount+'%');
  $listWrap.each(function(i){
    input+='<a href="#none">'+'</a>';
    $indicators.html(input);
  })
    $indicators.find('a').click(function(e){
      e.preventDefault();
      let idx=$(this).index();
      console.log(idx);
      goToSlider(idx);
      $(this).addClass('active').siblings().removeClass('active');
    });
    update();
    function goToSlider(idx){
      $listSlides.stop().animate({'left':-100*idx+'%'},1000)
      currentIdx=idx;
      update();
    };
    $allow.find('a').click(function(){
      if($(this).hasClass('btnPrev')){
        goToSlider(currentIdx-1)
      }else{
        goToSlider(currentIdx+1)
      }
    });
    function update(){
      if(currentIdx==0){
        $btnPrev.addClass('disabled');
      }else{
        $btnPrev.removeClass('disabled')
      };
      if(currentIdx==$slideCount-1){
        $btnNext.addClass('disabled');
      }else{
        $btnNext.removeClass('disabled');
      };
      $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
    };
    // 햄버거
    $('.mb_icon').click(function(){
      $('.gnb').toggleClass('on')
      $(this).toggleClass('close')
      $('header').toggleClass('on')
    })
})