// Event listeners for each button
document.getElementById('pianoButton1').addEventListener('click', function() {
    playPianoSound('Samples/runaway_1.mp3');

});

document.getElementById('pianoButton2').addEventListener('click', function() {
    playPianoSound('Samples/runaway_2.mp3');
    
});

document.getElementById('pianoButton3').addEventListener('click', function() {
    playPianoSound('Samples/runaway_3.mp3');
   
});

document.getElementById('pianoButton4').addEventListener('click', function() {
    playPianoSound('Samples/runaway_4.mp3');

});

// Function to play piano sound
function playPianoSound(audioFilePath) {
    // Your existing playPianoSound function
}




// Function to play piano sound and trigger animation
function playPianoSound(audioFilePath, buttonId) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const pianoSound = audioContext.createBufferSource();
    const request = new XMLHttpRequest();
    request.open('GET', audioFilePath, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
        audioContext.decodeAudioData(request.response, function (buffer) {
            pianoSound.buffer = buffer;
            pianoSound.connect(audioContext.destination);
            pianoSound.start(0);

            // Trigger animation on click
            document.getElementById(buttonId).classList.add('animated');
            setTimeout(function () {
                document.getElementById(buttonId).classList.remove('animated');
            }, 500);
        });
    };

    request.send();
}