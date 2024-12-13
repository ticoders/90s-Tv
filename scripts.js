const tvScreen = document.getElementById('tv-screen');
const channelUp = document.getElementById('channel-up');
const channelDown = document.getElementById('channel-down');
 

const channels = [
  'Assets/AudreL.mov',
  'Assets/vid2.mov',
  'Assets/vid3.mov',
  'Assets/vid-4.mov',
  'Assets/vid5.mov',
  'Assets/vid6.mov',
  'Assets/video1.mov',
  'Assets/video3.mov',
  'Assets/video-2.mov',
  'Assets/lstvid.mov',
  // Add up to 10 channels here
];

let currentChannel = 0;
tvScreen.src = channels[currentChannel];

// Change channel
channelUp.addEventListener('click', () => {
  currentChannel = (currentChannel + 1) % channels.length;
  tvScreen.src = channels[currentChannel];
  tvScreen.play();
});

channelDown.addEventListener('click', () => {
  currentChannel = (currentChannel - 1 + channels.length) % channels.length;
  tvScreen.src = channels[currentChannel];
  tvScreen.play();
});


// Autoplay video if not playing
tvScreen.addEventListener('ended', () => {
  tvScreen.play();
});
