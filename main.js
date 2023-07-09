const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const prev = document.getElementById("prev");
const stop = document.getElementById("stop");
const next = document.getElementById("next");

var count = 0;

const music = [
    "../musica1.mp3",
    "../musica2.mp3",
    "../musica3.mp3"
];

function playMusic() {
    audioSource.src = music[count];
    audioPlayer.load();
    audioPlayer.play();

}

playMusic();

function prevMusic() {
    count--;

    if (count < 0) {
        count = music.length - 1;
    }
    playMusic();
}

function nextMusic() {
    count++;

    if (count >= music.length) {
        count = 0;
    }
    playMusic();
}

function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

prev.addEventListener("click", prevMusic);
stop.addEventListener("click", stopMusic);
next.addEventListener("click", nextMusic);
audioPlayer.addEventListener("ended", nextMusic);
