var $rocket = $('#rocket');
var $win = $(window);
var width = $(window).width();



$win.on('scroll', function() {
    var top = $win.scrollTop();
    var wave = Math.sin(0.0034*top);
    var rotate = Math.sin(0.0034*top+40);

    // "Media query" that splits at 600px

    if(width < 600){
        if (top <= 0) {
            $rocket.css('transform', 'translate(' + -wave*(width*0.25) + 'px, 380px ) rotate(' + 0 + 'deg)');
        }else{
            $rocket.css('transform', 'translate(' + -wave*(width*0.25) + 'px, 380px) rotate(' + 40*rotate + 'deg)');
        }
    }else{
        if (top <= 0) {
            $rocket.css('transform', 'translate(' + -wave*(width*0.25) + 'px, 650px ) rotate(' + 0 + 'deg)');
        }else{
            $rocket.css('transform', 'translate(' + -wave*(width*0.25) + 'px, 650px) rotate(' + 40*rotate + 'deg)');
        }
    }
});





var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('.header').outerHeight();
var $info = $('.info');
var $about = $('.about');
var $header = $('.header');

$win.scroll(function(event){
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

    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $about.addClass('about-up');
        $info.addClass('info-up');
        $header.addClass('header-up')

        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $about.removeClass('about-up');
            $info.removeClass('info-up');
            $header.removeClass('header-up')
            
        }
    }
    
    lastScrollTop = st;
}

$win.on('scroll', function() { 
    if ($(window).scrollTop() >= $( 
      '.footer').offset().top + $('.footer'). 
        outerHeight() - window.innerHeight) { 
            document.getElementById('rocket').src = 'Assets/svg/Rocket_FrontpageReverse.svg';
     
    }
}); 

$win.on('scroll', function() { 
    if ($(window).scrollTop() == 0) {   
        document.getElementById('rocket').src = 'Assets/svg/Rocket_Frontpage.svg'; 
    }
});