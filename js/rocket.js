var $rocket = $('#rocket');
var $win = $(window);
var width = $(window).width();

$win.on('scroll', function() {
    var top = $win.scrollTop();
    var $wave = Math.sin(0.0034*top);
    var rotate = Math.sin(0.0034*top+40);
    $rocket.css('transform', 'translate(' + -$wave*(width*0.25) + 'px, 500px) rotate(' + 40*rotate + 'deg)');
})
