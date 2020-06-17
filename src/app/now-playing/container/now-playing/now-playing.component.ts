import { Component, OnInit } from '@angular/core';
import { YoutubeMediaPlaylist } from 'src/app/core/store/now-playlist/now-playlist.reducer';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/core/services/player.service';
import { Store } from '@ngrx/store';
import { EchoesState } from 'src/app/core/store/core-store.module';
import { updateIndexByMedia, changeFilter, removeAll, removeVideo } from 'src/app/core/store/now-playlist/now-playlist.actions';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  public nowPlaylist$: Observable<YoutubeMediaPlaylist>;

  constructor(private store: Store<EchoesState>,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.nowPlaylist$ = this.store.select(state => state.nowPlaylist);
  }

  selectVideo(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(updateIndexByMedia({ mediaId: media.id }));
    this.playerService.playVideo(media);
  }

  updateFilter(filter: string) {
    this.store.dispatch(changeFilter({ filter }));
  }

  resetFilter() {
    this.store.dispatch(changeFilter({ filter: '' }));
  }

  clearPlaylist() {
    this.store.dispatch(removeAll());
  }

  removeVideo(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(removeVideo({media}));
  }

}
