$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
    items: 2,
    loop:true,
    margin:30,
    nav:true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
        }
    );
  });
  let scroll = document.getElementById("scroll")
  window.addEventListener('scroll', function(){
    let d = document.documentElement.scrollTop;
    if (d>500) scroll.style.display = "block"
    else scroll.style.display = "none"
 })
 let h4 = document.getElementsByClassName("h4-counter")
 console.log(h4)
 let valid = true
 
 function interval(element , end , c ) {
     let i = 0
     let varName = setInterval(function counter() {
        if (i == end) clearInterval(varName)
        element.innerText = i
        i +=c
    } , 10)
     valid = false
 }

 window.addEventListener('scroll' ,()=> {
    
    if (document.documentElement.scrollTop>900) {
        if(valid){
            interval(h4[0], 8000, 100 )
            interval(h4[1], 810, 10 )
            interval(h4[2], 2000, 10)
            interval(h4[3], 20, 1)
        }
    }
 })