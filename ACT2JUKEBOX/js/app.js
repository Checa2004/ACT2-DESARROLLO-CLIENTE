let songs = [];        // guardo canciones json
let currentIndex = 0;  // indice cancion seleccionada
let currentHowl = null; // objeto del howler reproductor

const playlistElement = document.getElementById('playlist');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const trackCover = document.getElementById('track-cover');
const btnPlay = document.getElementById('btn-play');

async function loadSongs() {
  try {
    const res = await fetch('data/songs.json');
    if (!res.ok) throw new Error('Error al cargar canciones');
    
    songs = await res.json();
    renderPlaylist();     // pinta canciones lista
    updateUI(songs[0]);   // muestra datos iniciales lista
  } catch (error) {
    console.error('Error:', error);
  }
}

function renderPlaylist() {
  playlistElement.innerHTML = '';

  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.style.cursor = 'pointer';
    li.style.padding = '8px';
    li.textContent = `${song.title} - ${song.artist}`;

    // clic i reproduce cancion
    li.addEventListener('click', () => {
      playSong(index);
    });

    playlistElement.appendChild(li);
  });
}

function playSong(index) {
  currentIndex = index;
  const song = songs[currentIndex];

  // detiene audio
  if (currentHowl) {
    currentHowl.stop();
    currentHowl.unload();
  }

  currentHowl = new Howl({
    src: [song.file],
    html5: true,
    onplay: () => { btnPlay.textContent = 'Pause'; },
    onpause: () => { btnPlay.textContent = 'Play'; },
    onend: () => { btnPlay.textContent = 'Play'; }
  });

  currentHowl.play();
  updateUI(song);
}

// cambia texto y caratula
function updateUI(song) {
  if (!song) return;
  trackTitle.textContent = song.title;
  trackArtist.textContent = song.artist;
  trackCover.src = song.cover;
}

// boton play i pause
btnPlay.addEventListener('click', () => {
  if (!currentHowl) {
    playSong(currentIndex);  //al iniciar suena primera pista
  } else if (currentHowl.playing()) {
    currentHowl.pause();
  } else {
    currentHowl.play();
  }
});

document.addEventListener('DOMContentLoaded', loadSongs);