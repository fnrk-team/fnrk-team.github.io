function requestFullScreen() {
    var el = document.documentElement;

    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
    || el.mozRequestFullScreen || el.msRequestFullScreen;

    if (requestMethod) {
        requestMethod.call(el);
    }
    
    else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function disableButtonsDown(e) { 
    /*if (
        (e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 27 ||
        (e.which || e.keyCode) == 122 || (e.which || e.keyCode) == 18 ||
        (e.which || e.keyCode) == 115 || (e.which || e.keyCode) == 123
    ) e.preventDefault();*/
    requestFullScreen(); e.preventDefault(); 
}

function makeFun() {
    var audio = new Audio('../media/audios/sound.mp3');

    $(document).on('mousemove', disableButtonsDown)
    $(document).on("contextmenu", disableButtonsDown)
    $(document).on("keydown", disableButtonsDown);
    $(document).on("keyup", disableButtonsDown);

    $('.main').fadeOut(500, "swing", function(){
        audio.play();
        $('body').css('background', 'url("../media/gifs/anime-girls.gif")');
        $('.fun').show();

        setInterval(()=>{
            if(!window.fullscreen) requestFullScreen()
        }, 500)

    })
}


$(document).ready(function(){
    $('.main').fadeIn(1000);
    $('a').click(makeFun)
})
