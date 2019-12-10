var $rocket = $('#rocket');
var $win = $(window);
var width = $(window).width();

$win.on('scroll', function() {
    var top = $win.scrollTop();
    var $wave = Math.sin(0.0034*top);
    var rotate = Math.sin(0.0034*top+40);
   
    if (top == 0) {
        $rocket.css('transform', 'translate(' + -$wave*(width*0.25) + 'px, 550px) rotate(' + 0 + 'deg)');
    }else{
        $rocket.css('transform', 'translate(' + -$wave*(width*0.25) + 'px, 550px) rotate(' + 40*rotate + 'deg)');
    }
})

var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('header').outerHeight();
var $info = $('.info');
var $about = $('.about');

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.about').removeClass('about-down').addClass('about-up');
        $('.info').removeClass('info-down').addClass('info-up');
        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.about').removeClass('about-up').addClass('about-down');
            $('.info').removeClass('info-up').addClass('info-down');
            
        }
    }
    
    lastScrollTop = st;
}
