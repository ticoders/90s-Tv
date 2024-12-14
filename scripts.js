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


    function alignTvScreen() {
        // Get the dimensions and position of the frame
        const frameRect = tvFrame.getBoundingClientRect();

        // Set the screen's dimensions and position dynamically
        tvScreen.style.width = `${frameRect.width * 0.55}px`; // Adjust ratio for screen size
        tvScreen.style.height = `${frameRect.height * 0.45}px`;
        tvScreen.style.left = `${frameRect.left + frameRect.width * 0.23}px`;
        tvScreen.style.top = `${frameRect.top + frameRect.height * 0.18}px`;
    }

    // Align the TV screen on load and on window resize
    window.onload = alignTvScreen;
    window.onresize = alignTvScreen;