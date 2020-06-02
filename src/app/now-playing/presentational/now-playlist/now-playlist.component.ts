import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YoutubeMediaPlaylist } from 'src/app/core/store/now-playlist/now-playlist.reducer';

@Component({
  selector: 'app-now-playlist',
  templateUrl: './now-playlist.component.html',
  styleUrls: ['./now-playlist.component.scss']
})
export class NowPlaylistComponent {
  @Input() playlist: YoutubeMediaPlaylist;
  @Output() select = new EventEmitter();
  @Output() remove = new EventEmitter();

  private activeTrackElement: HTMLUListElement;

  constructor() { }

  ngAfterViewChecked() {
    this.scrollToActiveTrack();
  }
  scrollToActiveTrack() {
    if (this.activeTrackElement) {
      this.activeTrackElement.scrollIntoView();
    }
  }

  selectVideo(media) {
    this.select.emit(media);
  }

  removeVideo(media: GoogleApiYouTubeSearchResource) {
    this.remove.emit(media);
  }

  isActiveMedia(mediaId: string, trackElement: HTMLUListElement) {
    const isActive = this.playlist.index === mediaId;
    if (isActive) {
      this.activeTrackElement = trackElement;
    }
    return isActive;
  }

}
