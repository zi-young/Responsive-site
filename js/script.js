var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
//prev 3-4-1-2 순으로 정렬


// mobile-gallery
const galleryWrap = $('.gallery-wrap');
let offset=galleryWrap.offset().left;
// console.log(offset)

galleryWrap.on({mousemove(e){
    // console.log(e.pageX)
    if(e.pageX >=  1560 ){
        return false;
    }else{
        $(this).css({left: -e.pageX})   
    }
}})


