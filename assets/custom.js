// ===== Background Music Playlist =====
const songs = [
  "assets/music.mp3"
];

let current = 0;
const audio = document.getElementById('bg-music');
const playToggleBtn = document.getElementById('play-toggle-btn');

function playSong(index) {
  audio.src = songs[index];
  audio.play().catch(() => {
    console.log('Playback prevented; user interaction needed.');
  });
}

audio.addEventListener('ended', () => {
  current = (current + 1) % songs.length;
  playSong(current);
});

// Start paused, wait for user to click play
audio.pause();
if (playToggleBtn) playToggleBtn.textContent = '▶️'; // Play icon initially

if (playToggleBtn) {
  playToggleBtn.addEventListener('click', () => {
    if (audio.paused) {
      // Play music
      if (!audio.src) {
        playSong(current);
      } else {
        audio.play();
      }
      playToggleBtn.textContent = '⏸️'; // Pause icon
    } else {
      // Pause music
      audio.pause();
      playToggleBtn.textContent = '▶️'; // Play icon
    }
  });
}
// Typing effect
const roles = [
  "quant.", "music.", "puzzles.", "debating.", "fitness.",
  "blogs.", "math.", "cricket.", "creator.", "food.",
  "cinema.", "physics.","cars."
];

const typingEl = document.querySelector(".typing-text");
const cursorEl = document.querySelector(".cursor");

let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  if (!typingEl) return;

  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      typingEl.textContent += roles[roleIndex].charAt(charIndex++);
      setTimeout(typeLoop, 100);
    } else {
      typing = false;
      setTimeout(typeLoop, 1300);
    }
  } else {
    if (charIndex > 0) {
      typingEl.textContent = roles[roleIndex].substring(0, --charIndex);
      setTimeout(typeLoop, 50);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeLoop, 500);
    }
  }
}

window.addEventListener("load", typeLoop);