
$(window).load(function() {

    $(".top-demo div").each(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        })
    }).mouseover(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        })
    });

    $('#myButton').click(function() {

        $(".top-demo div").each(function() {
            $(this).circulate({
                speed: Math.floor(Math.random()*300) + 100,
                height: Math.floor(Math.random()*1000) - 470,
                width: Math.floor(Math.random()*1000) - 470
            });

        });

        jakkimodule.playSound('./sounds/harpRoll.wav', 0.5);
    });


});

var jakkimodule= (function () {

    return {
        playSound:  function(str, vol) {
            var snd = new Audio();
            snd.src = str;
            snd.volume = vol;
            snd.play();
        }
    }
})()

