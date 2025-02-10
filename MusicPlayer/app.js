let songContainer = document.getElementById('songs');
let suggestedSongContainer = document.getElementById('suggested');
let songName = document.getElementById('songName');
let artistName = document.getElementById('artistName');
let category = document.getElementById('category');
let audioPlayer = document.getElementById('audioPlayer');
const playPauseIcon = document.getElementById('playPauseIcon');
const record = document.getElementById('record');
let songData = []
let isPlaying = false; 

fetch('./data/songs.json')
    .then((res) => res.json())
    .then(data => {
        songData = data;
        data?.songs.forEach(song => {
            songContainer.innerHTML += `
                <div class='cursor-pointer' onclick="playSong(${song?.id})">
                    <img src="${song?.cover}" class="h-32 w-40" alt="image 1">
                    <p class="text-white tracking-widest text-center font-serif text-[10px] md:text-xs">${song?.name}</p>
                    <p class="text-zinc-400 tracking-widest text-center text-[9px] md:text-[10px]">by ${song?.artist}</p>
                </div>
            `;

            suggestedSongContainer.innerHTML += `
                <div class="flex justify-between text-white px-2 cursor-pointer hover:bg-zinc-900" onclick="playSong(${song?.id})">
                    <div class="flex space-x-3">
                        <img src="${song?.cover}" class="rounded-lg h-18 w-16 md:h-24 md:w-24" alt="playlist image">
                        <div>
                            <p class="font-serif text-base md:text-xl">${song?.name}</p>
                            <p class="text-zinc-400 text-xs md:text-sm">by ${song?.artist}</p>
                        </div>
                    </div>
                    <i>Play</i>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error loading songs:', error));

const playSong = (songId) => {
    const songToPlay = songData?.songs.find(song => song.id == songId);
    const playedBars = document.querySelectorAll('.played');

    if (songToPlay) {
        songName.innerText = songToPlay?.name;
        artistName.innerText = songToPlay?.artist;
        category.innerText = songToPlay?.category;
        audioPlayer.src = songToPlay?.song;
        audioPlayer.play();
        isPlaying = true;
        playPauseIcon.querySelector('img').src = './images/pause.png';

        playedBars.forEach(bar => bar.classList.add('wave'));
        record.classList.add('record');
    }
};

const togglePlayPause = () => {
    const playedBars = document.querySelectorAll('.played');

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
        playPauseIcon.querySelector('img').src = './images/pause.png';

        playedBars.forEach(bar => bar.classList.add('wave'));
        record.classList.add('record');
    } else {
        audioPlayer.pause();
        isPlaying = false;
        playPauseIcon.querySelector('img').src = './images/play.png';

        playedBars.forEach(bar => bar.classList.remove('wave'));
        record.classList.remove('record');
    }
};

audioPlayer.addEventListener('ended', () => {
    playPauseIcon.querySelector('img').src = './images/play.png';
    isPlaying = false;

    const playedBars = document.querySelectorAll('.played');
    playedBars.forEach(bar => bar.classList.remove('wave'));
    record.classList.remove('record');
});
