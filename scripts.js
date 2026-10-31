const tvScreen = document.getElementById('tv-screen');
const channelUp = document.getElementById('channel-up');
const channelDown = document.getElementById('channel-down');
const channelStatus = document.getElementById('channel-status');
const channelError = document.getElementById('channel-error');
const clickSound = new Audio('Assets/tv-static-7019.mp3');


const channels = [
  'Assets/AudreL.mov',
  'Assets/vid2.mov',
  'Assets/vid3.mov',
  'Assets/vid-4.mov',
  'Assets/vid5.mov',
  'Assets/soultrain.mov',
  'Assets/video1.mov',
  'Assets/video3.mov',
  'Assets/video-2.mov',
  'Assets/lstvid.mov',
   
];

let currentChannel = 0;

function tuneToChannel() {
  channelStatus.textContent = `Channel ${String(currentChannel + 1).padStart(2, '0')}`;
  channelError.hidden = true;
  tvScreen.src = channels[currentChannel];
  tvScreen.play().catch(() => {
    // Playback can be blocked until the user interacts; the controls remain usable.
  });
}

// Change channel
channelUp.addEventListener('click', () => {
  currentChannel = (currentChannel + 1) % channels.length;
  tuneToChannel();

  playClickSound();
});

channelDown.addEventListener('click', () => {
  currentChannel = (currentChannel - 1 + channels.length) % channels.length;
  tuneToChannel();
  playClickSound();
});

tvScreen.addEventListener('ended', () => {
  tvScreen.currentTime = 0;
  tvScreen.play().catch(() => {});
});

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
  setTimeout(() => {
    clickSound.pause();
    clickSound.currentTime = 0;
  }, 500);
}

tvScreen.addEventListener('error', () => {
  channelError.hidden = false;
});

tuneToChannel();