import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerOn = 'videoplayer-current-time';

const videoPlayer = new Player('vimeo-player');

videoPlayer.on('play', onVideoPlay);

function onVideoPlay() {
  if (localStorage.getItem(playerOn)) {
    videoPlayer.setCurrentTime(localStorage.getItem(playerOn));
    player.off('play', onVideoPlay);
  }
}

videoPlayer.on('timeupdate', throttle(OnTimeUpdate, 500));

videoPlayer.on('seeked', OnTimeUpdate);

function OnTimeUpdate() {
  videoPlayer.getCurrentTime().then(seconds => localStorage.setItem(playerOn, seconds));
}
