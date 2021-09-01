import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_TIME_ON_EXIT = 'videoplayer-current-time';

const videoPlayer = new Player('vimeo-player');

videoPlayer.on('play', onVideoPlay);

function onVideoPlay() {
  if (localStorage.getItem(PLAYER_TIME_ON_EXIT)) {
    videoPlayer.setCurrentTime(localStorage.getItem(PLAYER_TIME_ON_EXIT));
    player.off('play', onVideoPlay);
  }
}

videoPlayer.on('timeupdate', throttle(OnTimeUpdate, 1000));

videoPlayer.on('seeked', OnTimeUpdate);

function OnTimeUpdate() {
  videoPlayer.getCurrentTime().then(seconds => localStorage.setItem(PLAYER_TIME_ON_EXIT, seconds));
}
