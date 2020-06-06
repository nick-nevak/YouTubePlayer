import { Component, OnInit } from '@angular/core';
import { YoutubeMediaPlaylist } from 'src/app/core/store/now-playlist/now-playlist.reducer';
import { Observable } from 'rxjs';
import { NowPlaylistService } from 'src/app/core/services/now-playlist.service';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  public nowPlaylist$: Observable<YoutubeMediaPlaylist>;

  constructor(
    public nowPlaylistService: NowPlaylistService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.nowPlaylist$ = this.nowPlaylistService.playlist$;
  }

  selectVideo(media: GoogleApiYouTubeVideoResource) {
    this.nowPlaylistService.updateIndexByMedia(media.id);
    this.playerService.playVideo(media);
  }

  updateFilter(searchFilter: string) {
    this.nowPlaylistService.updateFilter(searchFilter);
  }

  resetFilter() {
    this.nowPlaylistService.updateFilter('');
  }

  clearPlaylist() {
    this.nowPlaylistService.clearPlaylist();
  }

  removeVideo(media) {
    this.nowPlaylistService.removeVideo(media);
  }
}
