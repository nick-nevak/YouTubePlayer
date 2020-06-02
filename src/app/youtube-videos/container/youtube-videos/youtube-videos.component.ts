import { Component, OnInit } from '@angular/core';
import { EchoesState } from 'src/app/core/store/core-store.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { YoutubeSearchService } from 'src/app/core/services/youtube-search.service';
import { YoutubeVideosInfoService } from 'src/app/core/services/youtube-videos-info.service';
import { reset, addVideos } from '../../../core/store/youtube-videos/youtube-videos.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { YoutubeVideosHttpService } from 'src/app/core/services/youtube-videos-http.service';
import { GoogleApiYoutubeVideo } from 'src/app/core/store/youtube-videos/youtube-videos.reducer';
import { queueVideo } from 'src/app/core/store/now-playlist/now-playlist.actions';

@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.scss']
})
export class YoutubeVideosComponent implements OnInit {
  videos$: Observable<GoogleApiYoutubeVideo[]>;
  searchQuery: string = '';

  constructor(
    private youtubeSearch: YoutubeSearchService,
    private youtubeVideosInfo: YoutubeVideosInfoService,
    private youtubeVideosService: YoutubeVideosHttpService,
    // private playerService: PlayerService,
    private store: Store<EchoesState>
  ) {
  }

  ngOnInit() {
    this.videos$ = this.store.select(state => state.videos.results);
    //this.search('Mount and blade 2');
  }

  search(query: string) {
    if (this.youtubeSearch.isNewSearchQuery(query)) {
      this.store.dispatch(reset());
    }
    this.youtubeVideosService
      .search(query)
      .pipe(
        tap(mediaItems => console.log('search:', mediaItems)),
        map((mediaItems: GoogleApiYouTubeSearchResource[]) => mediaItems.map(video => video.id.videoId)),
        switchMap((mediaIds: string[]) => this.youtubeVideosService.fetchVideoData(mediaIds)),
        tap(videos => console.log('videos:', videos))
      ).subscribe(mediaItems => {
        this.store.dispatch(addVideos({ videos: mediaItems }));
      });
  }

  playSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    // this.playerService.playVideo(media);
    this.queueSelectedVideo(media);
  }

  queueSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(queueVideo({ media }));
  }

  resetPageToken() {

  }

  searchMore(query: string) {
    this.youtubeSearch.searchMore();
    this.search(query);
  }
}
