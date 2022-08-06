// $(document).ready(function(){
//     $(window).scroll(function(){
//       var scroll = $(window).scrollTop();
//       if (scroll > 100) {
//         $(".navbar").css("background" , "blue");
//       }else{
//         $(".navbar").css("background" , "");    
//       }
//     });
//   });
// $(function () {
//     var header = $(".navbar");
  
//     $(window).scroll(function () {
//       var scroll = $(window).scrollTop();
//       if (scroll >= 50) {
//         header.addClass("scrolled");
//       } else {
//         header.removeClass("scrolled");
//       }
//     });
//   });
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}