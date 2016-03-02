    // Audio
    var audio = document.getElementById("internetRadio");

    // Buttons
    var playButton = document.getElementById("playIt");



// Event listener for the play/pause button
playButton.addEventListener("click", function () {
    if (audio.paused == true) {
        // Play the video
        audio.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "Pause";
    } else {
        // Pause the video
        audio.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "Play";
    }
});