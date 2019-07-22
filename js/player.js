    
    var v = document.getElementById('videoPlayer');
    var vv = document.getElementById('vOverlay');
    <!-- Auto play, Half volume -->
    v.play();
    v.volume = 0.5;
    v.firstChild.nodeValue = "Play";

    <!-- Play, Pause -->
    vv.addEventListener('click',function(e){
        if (!v.paused) {
            console.log("pause playback");
            v.pause();
            v.firstChild.nodeValue = 'Pause';
        } else {
            console.log("start playback")
            v.play();
            v.firstChild.nodeValue = 'Play';
        }
      });