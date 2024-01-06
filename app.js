$(document).ready(function(){
$('.slider').slick({
arrows:false,
dots:true,
appendDots:'.slider-dots',
dotsClass:'dots'
});


let hamberger= document.querySelector('.hamberger');
let times= document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');

hamberger.addEventListner('click',function(){
mobileNav.classList.add('open');

});

times.addEventListner('click',function(){
    mobileNav.classList.remove('open');

});


});