import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { YoutubeMediaPlaylist } from 'src/app/core/store/now-playlist/now-playlist.reducer';

@Component({
  selector: 'app-now-playlist-filter',
  templateUrl: './now-playlist-filter.component.html',
  styleUrls: ['./now-playlist-filter.component.scss']
})
export class NowPlaylistFilterComponent {

  @Input() playlist: YoutubeMediaPlaylist;
  @Output() clear = new EventEmitter<string>();
  @Output() filter = new EventEmitter<string>();
  @Output() reset = new EventEmitter<string>();

  constructor() {

  }

  handleFilterChange(searchFilter: string) {
    this.filter.emit(searchFilter);
  }

  resetSearchFilter() {
    this.reset.emit('');
  }

  isFilterEmpty() {
    return this.playlist.filter === '';
  }

  clearPlaylist() {
    this.clear.emit('');
  }

  isPlaylistEmpty() {
    return this.playlistLength === 0;
  }

  get playlistLength() {
    return this.playlist.videos.length;
  }

}
