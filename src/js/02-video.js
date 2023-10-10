import Player from "@vimeo/player";
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe, {
    id: 236203659,
    width: 640
});

const VCT_KEY = "videoplayer-current-time";

const setTime = function (event) {
    localStorage.setItem(VCT_KEY, JSON.stringify(event.seconds));
  console.log(event.seconds);
};

player.on('timeupdate', throttle(setTime, 1000));

const seconds = JSON.parse(localStorage.getItem(VCT_KEY));
    
 player.setCurrentTime((seconds) || 0);
    
    
