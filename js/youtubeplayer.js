    //This loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youTubePlayer', {
            videoId: 'EBlEkBzL118', //the code at the end of your old iframe embed script
            playerVars: {
                autoplay: 0,
                loop: 0,
                controls: 1,
                showinfo: 1,
                autohide: 0,
                modestbranding: 0,
                rel: 0,
                vq: 'hd1080'
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        //we aren't going to do anything here
        //event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        // track when user clicks to Play
        if (event.data == YT.PlayerState.PLAYING) {
            ga('send', 'event', 'Videos', 'Play', 'Solo Empanadas');
        }

        // track when user clicks to Pause
        if (event.data == YT.PlayerState.PAUSED) {
            ga('send', 'event', 'Videos', 'Pause', 'Solo Empanadas');
        }

        // track when video ends
        if (event.data == YT.PlayerState.ENDED) {
            ga('send', 'event', 'Videos', 'Finished', 'Solo Empanadas');
        }
    }