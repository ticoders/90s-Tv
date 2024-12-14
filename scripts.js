const tvScreen = document.getElementById('tv-screen');
const tvFrame = document.getElementById('tv-frame');
const channelUp = document.getElementById('channel-up');
const channelDown = document.getElementById('channel-down');
const clickSound = new Audio('Assets/tv-static-7019.mp3');


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

// Function to play the sound on button click
function playClickSound() {
    clickSound.play();
    setTimeout(() => {
        clickSound.pause();  // Pause the sound
        clickSound.currentTime = 0;   
    }, 500);   
}
channelUp.addEventListener('click', playClickSound);
channelDown.addEventListener('click', playClickSound);