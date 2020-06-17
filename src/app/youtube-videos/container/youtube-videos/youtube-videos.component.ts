import { Component, OnInit } from '@angular/core';
import { EchoesState } from 'src/app/core/store/core-store.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { YoutubeSearchService } from 'src/app/core/services/youtube-search.service';
import { reset, addVideos, searchNewQuery, searchMore } from '../../../core/store/youtube-videos/youtube-videos.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { YoutubeVideosHttpService } from 'src/app/core/services/youtube-videos-http.service';
import { GoogleApiYoutubeVideo } from 'src/app/core/store/youtube-videos/youtube-videos.reducer';
import { queueVideo, selectVideo } from 'src/app/core/store/now-playlist/now-playlist.actions';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.scss']
})
export class YoutubeVideosComponent implements OnInit {
  videos$: Observable<GoogleApiYoutubeVideo[]>;

  constructor(
    private playerService: PlayerService,
    private store: Store<EchoesState>
  ) { }

  ngOnInit() {
    this.videos$ = this.store.select(state => state.videos.results);
  }

  search(query: string) {
    this.store.dispatch(searchNewQuery({ query }));
  }

  playSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(selectVideo({ media }));
  }

  queueSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(queueVideo({ media }));
  }

  searchMore() {
    this.store.dispatch(searchMore());
  }

}
