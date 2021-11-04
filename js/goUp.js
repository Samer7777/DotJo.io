// window.onscroll = function() {myFunction2()};

// function myFunction2() {
// if (document.body.scrollTop > 890 || document.documentElement.scrollTop > 890) {
//     document.getElementById("goUp").classList.add ("show");

// } else {
//     document.getElementById("goUp").classList.remove ("show");
//     document.getElementById("goUp").style.transition=".4s all ease"
// }
// }

// window.onscroll,function(myFunction2){
//     if(document.body.scrollTop > 980){
//         document.getElementById("goUp").classList.add ("show");
//     }else{
//             document.getElementById("goUp").classList.remove ("show");
//             document.getElementById("goUp").style.transition=".4s all ease";
//     }
// }
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '600');
});