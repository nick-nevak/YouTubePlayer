import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';


interface PlayerOutputs {
  ready?: EventEmitter<YT.Player>;
  change?: EventEmitter<Object | any>;
}

interface PlayerSize {
  height?: number;
  width?: number;
}

@Injectable()
export class PlayerService {
  player: YT.Player;
  api: ReplaySubject<any>;

  private isFullscreen: boolean = false;
  private defaultSizes = {
    height: 270,
    width: 367
  };

  constructor(private zone: NgZone) {
    this.createApi();
  }

  createApi() {
    this.api = new ReplaySubject(1);
    const onYouTubeIframeAPIReady = () => { this.api.next(window['YT']); };
    window['onYouTubeIframeAPIReady'] = onYouTubeIframeAPIReady;
  }

  loadPlayerApi() {
    const doc = window.document;
    const playerApiScript = doc.createElement('script');
    playerApiScript.type = 'text/javascript';
    playerApiScript.src = 'http://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApiScript);
  }

  setupPlayer(elementId: string) {
    const createPlayer = () => {
      if (window['YT'].Player) {
        this.player = this.createPlayer(elementId);
      }
    };
    this.api.subscribe(createPlayer);
  }

  createPlayer(elementId: string) {
    const service = this;
    const playerSize = {
      height: this.defaultSizes.height,
      width: this.defaultSizes.width
    };
    return new window['YT'].Player(elementId, Object.assign({}, playerSize, {
      videoId: '',
      events: {
        onReady: (ev) => {
          this.zone.run(() => {});
        },
        onStateChange: (ev) => {
          this.zone.run(() => {});
        }
      }
    }));

    function onPlayerStateChange(event) {
      const state = event.data;
      // play the next song if its not the end of the playlist
      // should add a "repeat" feature
      if (state === YT.PlayerState.ENDED) {
        // service.listeners.ended.forEach(callback => callback(state));
      }

      if (state === YT.PlayerState.PAUSED) {
        // service.playerState = YT.PlayerState.PAUSED;
      }
      if (state === YT.PlayerState.PLAYING) {
        // service.playerState = YT.PlayerState.PLAYING;
      }
      console.log('state changed', state);
      // dispatch STATE CHANGE
    }
  }

  play() {
    this.player.playVideo();
  }

  pause() {
    this.player.pauseVideo();
  }

  playVideo(media: any) {
    const id = media.id.videoId ? media.id.videoId : media.id;
    this.player.loadVideoById(id);
    this.play();
    // return media;
  }

  isPlaying(player) {
    // because YT is not loaded yet 1 is used - YT.PlayerState.PLAYING
    const isPlayerReady: any = player && player.getPlayerState;
    const playerState = isPlayerReady ? player.getPlayerState() : {};
    const isPlayerPlaying = isPlayerReady
      ? playerState !== YT.PlayerState.ENDED && playerState !== YT.PlayerState.PAUSED
      : false;
    return isPlayerPlaying;
  }

  toggleFullScreen(player, isFullScreen) {
    let { height, width } = this.defaultSizes;

    if (!isFullScreen) {
      height = window.innerHeight;
      width = window.innerWidth;
    }
    player.setSize(width, height);
  }

  generateUniqueId() {
    const MAX_LIMIT = 100000000;
    return Math.floor(Math.random() * MAX_LIMIT);
  }
}
