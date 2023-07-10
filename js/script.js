var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,   // 슬라이드 사이 여백

    slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
    centeredSlides: true,    //센터모드
    autoplay: {     //자동슬라이드 (false-비활성화)
      delay: 2500, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },

    loop : true,   // 슬라이드 반복 여부

    loopAdditionalSlides : 1,

// 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    pagination: { // 호출(pager) 여부
      el: ".swiper-pagination", //버튼을 담을 태그 설정
      clickable: true, // 버튼 클릭 여부
    }
    
  });



let target=document.querySelector(".motion-anchor__blank");
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500); //blink함수를 0.5초에 한번씩 호출


// stories

let box=$('#stories .storiesBody .contents');
let col1=0;
let col2=1;
let col3=2;
let col4=3;
let timer;

timer=setInterval(event, 2500)

function event(){
  box.eq(col1).css({transform:'scale('+.9+')', zIndex:0}).stop().animate({left:'10%',top:50, opacity:.5, marginLeft:0},1000)
  box.eq(col2).css({transform:'scale('+.8+')', zIndex:0}).stop().animate({left:'50%',top:0, opacity:.2, marginLeft:'-11%'},1000) //col1위치로 이동시키려면 marginLeft:'-11%'
  box.eq(col3).css({transform:'scale('+.9+')', zIndex:0}).stop().animate({left:'68%',top:50, opacity:.5, marginLeft:0},1000) 
  box.eq(col4).css({transform:'scale('+1+')', zIndex:1}).stop().animate({left:'50%',top:130, opacity:1, marginLeft:'-11%'},1000) //첫번째 위치로 보내기
  col1--;
  col2--;
  col3--;
  col4--;
  if(col1<0)col1=3;
  if(col2<0)col2=3;
  if(col3<0)col3=3;
  if(col4<0)col4=3;
}

box.hover(function(){
    clearInterval(timer)
},function(){
    timer=setInterval(event,2500)
})

const next=$('#stories .storiesBody .contentsBtn .next')
const prev=$('#stories .storiesBody .contentsBtn .prev')

next.hover(function(){
    clearInterval(timer)
},function(){
    timer=setInterval(event,2500)
})

prev.hover(function(){
    clearInterval(timer)
},function(){
    timer=setInterval(event,2500)
})

next.click(event)
prev.click(function(){
    box.eq(col3).css({transform:'scale('+.9+')', zIndex:0}).stop().animate({left:'10%',top:50, opacity:.5, marginLeft:0},1000)
    box.eq(col4).css({transform:'scale('+.8+')', zIndex:0}).stop().animate({left:'50%',top:0, opacity:.2, marginLeft:'-11%'},1000) //col1위치로 이동시키려면 marginLeft:'-11%'
    box.eq(col1).css({transform:'scale('+.9+')', zIndex:0}).stop().animate({left:'68%',top:50, opacity:.5, marginLeft:0},1000) 
    box.eq(col2).css({transform:'scale('+1+')', zIndex:1}).stop().animate({left:'50%',top:130, opacity:1, marginLeft:'-11%'},1000) //첫번째 위치로 보내기
    col1++;
    col2++;
    col3++;
    col4++;
    if(col1>3)col1=0;
    if(col2>3)col2=0;
    if(col3>3)col3=0;
    if(col4>3)col4=0;
})


$('.type').typed({
  strings:['빈 공간에 가치를 담다 _'],
  typeSpeed:200,
  backDelay:300,
  fadeOut: false,
  smartBackspace: true,
  cursorChar: '_',
  loop: true
});


// 스크롤 헤더 이벤트

let Scroll = 80;
$(window).on('scroll', function() {
if (window.scrollY >= Scroll) {
  $('#header').css({'height':'80px', 'borderBottom':'1px solid #000', 'transition':'.5s'});
  $('.h-box').css('margin-top','30px');
}
 
else {
  $('#header').css({'height':'113px', 'borderBottom':'none', 'transition':'.5s'});
  $('.h-box').css('margin-top','40px');
}

if (window.scrollY >= 2000) {
  $('#header').hide();
} else if (window.scrollY < 80) {
  $('#header').show();
}
});

