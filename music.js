function showMusic() {
    homeScreen.style.display = 'none'
    music.style.display = 'block'
}
const audio = document.getElementById('audio');
const image = document.getElementById('image');
const playBtn = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressBar = document.getElementById('progress-bar');

const musicListBtn = document.getElementById('musicList');
const list = document.getElementById('list');
const player = document.getElementById('music-holder');

const songs = [
    {
        title: "Bahamas",
        artist: "Young Jonn",
        image: "https://trendybeatz.com/images/Young-Jonn-Jiggy-Forever-AlbumArtwork1.jpg",
        audio: "https://cdn.trendybeatz.com/audio/Young-Jonn-Bahamas-(TrendyBeatz.com).mp3"
    },
    {
        title: "Albert Einstein",
        artist: "Seyi Vibez",
        image: "https://trendybeatz.com/images/Seyi-Vibez-Loseyi-Professor-EPArtwork1.jpg",
        audio: "https://cdn.trendybeatz.com/audio/Seyi-Vibez-Albert-Einstein-(TrendyBeatz.com).mp3"
    },
    {
        title: "Charm",
        artist: "Rema",
        image: "https://trendybeatz.com/images/Rema-Rave-And-Roses-Ultra-Album-Artwork1.jpg",
        audio: "https://cdn.trendybeatz.com/audio/Rema-Charm-(TrendyBeatz.com).mp3"
    },
]
console.log(songs);


let currentSong = 0
let isPlaying = false

const loadSong = (song) => {
    title.innerHTML = song.title,
    artist.innerHTML = song.artist,
    audio.src = song.audio,
    image.src = song.image
}
loadSong(songs[currentSong])

const play = () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = 'Play';
    } else {
        audio.play();
        playBtn.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
};
const prev = () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length
    loadSong(songs[currentSong])
    if (isPlaying) audio.play()
}
const next = () => {
    currentSong = (currentSong + 1) % songs.length
    loadSong(songs[currentSong])
    if (isPlaying) audio.play()
} 
const updateProgress = () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
};

const showSongsList = () => {
    list.innerHTML = '';

    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `${song.title} - ${song.artist}`;
        songItem.addEventListener('click', () => {
            currentSong = index;
            loadSong(songs[currentSong]);
            toggleSongList();
        });
        list.appendChild(songItem);
    });

    toggleSongList();
}
const toggleSongList = () => {
    const isSongListVisible = list.style.display === 'block';
    list.style.display = isSongListVisible ? 'none' : 'block';
    player.style.display = isSongListVisible ? 'block' : 'none';
}
musicListBtn.addEventListener('click', showSongsList);