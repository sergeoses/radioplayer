const audioPlayer = document.getElementById('audioPlayer');
const stationSelect = document.getElementById('stationSelect');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const themeToggle = document.getElementById('themeToggle');

// Встановити станцію при виборі
stationSelect.addEventListener('change', () => {
  audioPlayer.src = stationSelect.value;
  audioPlayer.play();
});

// Кнопки керування
playBtn.addEventListener('click', () => audioPlayer.play());
pauseBtn.addEventListener('click', () => audioPlayer.pause());

// Темна тема
themeToggle.addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked);
});

// Завантажити першу станцію
audioPlayer.src = stationSelect.value;
