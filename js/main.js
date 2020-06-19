(() => {
    console.log('fired!');

    let audioControls = document.querySelectorAll('.controls'),
        audio = document.querySelector('audio'),
        audioThumbs = document.querySelectorAll('.trackRef');

    function loadAndPlay() {
        //'this' keyword refers tot he image you've clicked on
        audio.src = `audio/${this.dataset.trackref}`;
        //load method loads whatever resource you indicate
        audio.load();

        playAudio();
    }

    function playAudio() {
        audio.play();
    }

    function rewindAudio() {
        audio.pause();
        audio.currentTime = 0;

    }

    audioControls[0].addEventListener('click', playAudio);
    audioControls[1].addEventListener('click', rewindAudio);
    //process the image tags and make them load the right audio track

    for (thumb of audioThumbs) {
        thumb.addEventListener('click', loadAndPlay);
    }

    //listen for the end of the audio track
    audio.addEventListener('ended', () => console.log('track ended'));
})();