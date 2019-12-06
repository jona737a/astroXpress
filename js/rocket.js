var $rocket = $('#rocket');
var $win = $(window);

$win.on('scroll', function() {
    var top = $win.scrollTop();
    var $wave = Math.sin(0.0034*top);
    $rocket.css('transform', 'translate(' + -$wave*700 + 'px, 500px)');
})

$win.on('scroll', function() {
    var top = $win.scrollTop();
    var rotate = Math.sin(0.0034*top);
    $rocket.css('transform', 'rotate(' + -$wave*700 + 'deg)');
})