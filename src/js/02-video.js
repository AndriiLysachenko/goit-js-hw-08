import Player from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const seconds = localStorage.getItem("videoplayer-current-time") || 0;



player.on('timeupdate', throttle(function({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
}, 1000));


player.setCurrentTime(seconds);