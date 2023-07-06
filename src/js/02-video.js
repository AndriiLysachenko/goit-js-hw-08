
//import Player from '@vimeo/player';

//const iframe = document.querySelector('iframe');
//const player = new Player(iframe);
//import throttle from "lodash.throttle";

//const timeVideo = JSON.parse(localStorage.getItem("videoplayer-current-time")) || {};
//const seconds = timeVideo.seconds;
//console.log(seconds);


//player.on('timeupdate', throttle(function(seconds) {
    //localStorage.setItem("videoplayer-current-time", JSON.stringify(//seconds));
//}, 1000));


//player.setCurrentTime(seconds).then(function() {
    
//}).catch(function(error) {
   // switch (error.name) {

    //    case 'RangeError':
    //        break;

    //    default:
    //        break;
  //  }
//});

//player.getVideoTitle().then(function(title) {
  //  console.log('title:', title);
//});
//player.on("play", player.setCurrentTime);

import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function (event) { 
    console.log(event);
    localStorage.setItem("videoplayer-current-time", event.seconds)
};
    
player.on('timeupdate', throttle(onTimeupdate, 1000));
//player.off('timeupdate', onTimeupdate);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);